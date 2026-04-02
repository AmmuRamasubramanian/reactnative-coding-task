import { View , Text, Pressable} from 'react-native'
import styles from './RefuelingRecordDetailsPage_styles'
import { useMileageAppStore } from '../../store'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import moment from 'moment'

export default function RefuelingRecordDetailsPage(){

    const selectedRecordItem=useMileageAppStore((state)=>state.selectedRecordItem)
    const safeAreaInsets=useSafeAreaInsets()

    const dateText=moment(selectedRecordItem?.date, "YYYY-MM-DD").format("ddd, DD MMM ‘YY")

    const truncatedName = selectedRecordItem?.vehicle_name.length > 12 ? selectedRecordItem?.vehicle_name.slice(0, 12) + "..." : selectedRecordItem?.vehicle_name;

    return(
        <View style={[styles.container, {paddingLeft: safeAreaInsets.left, paddingRight:safeAreaInsets.right, paddingBottom:safeAreaInsets.bottom}]}>
            <View style={[styles.topHeader, {paddingTop:safeAreaInsets.top}]}>
                <View style={styles.dateFlexdiv}>
                    <Text style={styles.dateText}>{dateText}</Text>
                    <Text style={styles.vehicleName}>{truncatedName}</Text>
                    <Text style={styles.vehicleName}></Text>
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
                <Pressable style={styles.editBtnDiv}>
                    <Text style={styles.editBtnText}>Edit</Text>
                </Pressable>
            </View>
        </View>
    )
}