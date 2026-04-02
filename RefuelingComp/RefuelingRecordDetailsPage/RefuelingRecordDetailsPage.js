import { View , Text, Pressable} from 'react-native'
import styles from './RefuelingRecordDetailsPage_styles'
import { useMileageAppStore } from '../../store'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import moment from 'moment'
import { useNavigation } from '@react-navigation/native'
import Icons from '../../Icons'
import colors from '../../colors'
import { useState } from 'react'
import RecordDeleteConfirmPopup from '../RecordDeleteConfirmPopup/RecordDeleteConfirmPopup'

export default function RefuelingRecordDetailsPage(){

    const selectedRecordItem=useMileageAppStore((state)=>state.selectedRecordItem)
    const removeRecordForVehicles=useMileageAppStore((state)=>state.removeRecordForVehicles)
    const safeAreaInsets=useSafeAreaInsets()
    const navigation=useNavigation()

    const dateText=moment(selectedRecordItem?.date, "YYYY-MM-DD").format("ddd, DD MMM ‘YY")

    const truncatedName = selectedRecordItem?.vehicle_name.length > 12 ? selectedRecordItem?.vehicle_name.slice(0, 12) + "..." : selectedRecordItem?.vehicle_name;

    const addedTime=moment(Number(selectedRecordItem?.id)).format("Do MMM 'YY")

    const [showDeleteConfirm, setShowDeleteConfirm]=useState(false)

    const handleGoBack=()=>{
        navigation.goBack()
    } 

    const onPressDeleteRecord=()=>{
        setShowDeleteConfirm(true)
    }

    const handleCloseDeleteRecConfirm=()=>{
        setShowDeleteConfirm(false)
    }

    const onPressDelete=()=>{
        removeRecordForVehicles(selectedRecordItem?.vehicle_id, selectedRecordItem?.id)
        navigation.goBack()
    }

    const handleEditRecordDet=()=>{
        navigation.navigate('AddRefuelingPage', {isEdit:true})
    }

    return(
        <View style={[styles.container, {paddingLeft: safeAreaInsets.left, paddingRight:safeAreaInsets.right, paddingBottom:safeAreaInsets.bottom}]}>
            <View style={[styles.topHeader, {paddingTop:safeAreaInsets.top}]}>
                <View style={styles.dateFlexdiv}>
                    <Pressable onPress={handleGoBack} style={styles.arrowLeftIcon}>
                        <Icons.arrowleft width={25} height={25} fill={colors.greenBtnColor}/>
                    </Pressable>
                    <Text style={styles.dateText}>{dateText}</Text>
                    <Text style={styles.vehicleName}>{truncatedName}</Text>
                    <Text style={styles.addedTimeText}>Added on {addedTime}</Text>
                    <Pressable onPress={onPressDeleteRecord} style={styles.binIconOuter}>
                        <Icons.trash width={20} height={20} fill={colors.pinkishred}/>
                    </Pressable>
                </View>
            </View>
            <View style={[styles.contentContainer]}>
                <View style={{flex:1}}>
                    <View style={styles.detailsBox}>
                        <View style={styles.detailItemDiv}>
                            <Text style={styles.detailsText}>Start Reading</Text>
                            <Text style={styles.detailsText}>{selectedRecordItem.odometer_start} kms</Text>
                        </View>
                        <View style={styles.detailGap}/>
                        <View style={styles.detailItemDiv}>
                            <Text style={styles.detailsText}>End Reading</Text>
                            <Text style={styles.detailsText}>{selectedRecordItem.odometer_end} kms</Text>
                        </View>
                        <View style={styles.detailGap}/>
                        <View style={styles.detailItemDiv}>
                            <Text style={styles.detailsText}>Consumed</Text>
                            <Text style={styles.detailsText}>{selectedRecordItem.fuel_consumption}L</Text>
                        </View>
                        <View style={styles.detailGap}/>
                        <View style={styles.detailItemDiv}>
                            <Text style={styles.detailsText}>Price</Text>
                            <Text style={styles.detailsText}>${selectedRecordItem.price}</Text>
                        </View>
                    </View>
                </View>
                <Pressable style={styles.editBtnDiv} onPress={handleEditRecordDet}>
                    <Text style={styles.editBtnText}>Edit</Text>
                </Pressable>
            </View>
            {
                showDeleteConfirm &&
                <>
                <RecordDeleteConfirmPopup
                    onClose={handleCloseDeleteRecConfirm}
                    onPressDelete={onPressDelete}
                />
                </>
            }
        </View>
    )
}