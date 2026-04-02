import { View , Text, Pressable} from 'react-native'
import styles from './RefuelingMainPage_styles'
import { useMileageAppStore } from '../../store'
import { LinearGradient } from 'expo-linear-gradient'
import Icons from '../../Icons'
import { useNavigation } from '@react-navigation/native'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import colors from '../../colors'
import { memo, useCallback, useEffect, useMemo, useState } from 'react'
import { FlashList } from '@shopify/flash-list'
import isEqual from 'lodash.isequal'
import moment from 'moment'

export default function RefuelingMainPage(){

    const navigation=useNavigation()
    const safeAreaInsets=useSafeAreaInsets()

    const vehicleslist=useMileageAppStore((state)=>state.vehicles)
    const recordslist=useMileageAppStore((state)=>state.records)

    const [selectedVehicleItem, setSelectedVehicleItem]=useState(null)
    const selectedRecords=useMemo(()=>{
        if(!selectedVehicleItem){
            return []
        }
        return recordslist[selectedVehicleItem?.id]
    },[recordslist, selectedVehicleItem])

    const handleNavigateaddvehicles=()=>{
        navigation.navigate('Vehicles', {screen:"AddVehiclesPage", initial:false})
    }

    const handleNavigateAddRefueling=()=>{
        navigation.navigate('AddRefuelingPage')
    }

    useEffect(()=>{
        if(vehicleslist && vehicleslist.length!==0){
            setSelectedVehicleItem(vehicleslist[0])
        }
    },[vehicleslist])

    const MemoizedRenderItem=memo(({item, isFirstIndex})=>{

        const dateText=moment(item.date, "YYYY-MM-DD").format("ddd, DD MMM ‘YY")

        return(
            <View style={[styles.recordItem, {marginTop:20}]}>
                <View style={styles.recordInnerflex}>
                    <Icons.Rose width={28} height={28}/>
                    <View style={{marginLeft:10}}>
                        <Text style={styles.dateTextOfRecord} numberOfLines={1} ellipsizeMode='tail'>{dateText}</Text>
                        <Text style={styles.fuelText} numberOfLines={1} ellipsizeMode='tail'>{item.fuel_consumption}L</Text>
                    </View>
                </View>
                <Text style={styles.priceText} numberOfLines={1} ellipsizeMode='tail'>${item.price}</Text>
            </View>
        )
    },(r1, r2)=>{
        return isEqual(r1.item, r2.item) && r1.isFirstIndex===r2.isFirstIndex
    })

    const renderItem=useCallback(({item}, isFirstIndex)=>{
        return <MemoizedRenderItem item={item} isFirstIndex={isFirstIndex}/>
    },[])

    return(
        <View style={[styles.container, {paddingTop:safeAreaInsets.top, paddingLeft:safeAreaInsets.left, paddingRight:safeAreaInsets.right}]}>
            <View style={{flex:1, backgroundColor:colors.lightWhitish, width:"100%"}}>
                <View style={styles.titleDiv}>
                    <Text style={styles.title}>Refuelling</Text>
                    {
                        selectedRecords && selectedRecords.length!==0 && selectedVehicleItem &&
                        <Pressable style={styles.selectedVehicleBox}>
                            <Text style={styles.selectedVehicleText} numberOfLines={1} ellipsizeMode='tail'>{selectedVehicleItem?.vehicle_name}</Text>
                            <View style={styles.rotatedIcon}>
                                <Icons.chevronright width={15} height={15} fill={colors.greenBtnColor}/>
                            </View>
                        </Pressable>
                    }
                </View>
                {
                    (vehicleslist && vehicleslist.length!==0) ?
                    <>
                    {
                        selectedRecords && selectedRecords.length!==0 ?
                        <>
                        <View style={styles.contentContainerrecord}>
                        <FlashList
                            data={selectedRecords}
                            renderItem={({item, index})=>{
                                const isFirstIndex=index===0
                                return(
                                    <>
                                    {renderItem({item}, isFirstIndex)}
                                    </>
                                )
                            }}
                            keyExtractor={(item)=>item.id.toString()}
                            showsVerticalScrollIndicator={false}
                            estimatedItemSize={60}
                            contentContainerStyle={{paddingBottom:100}}
                        />
                        </View>
                        </>
                        :
                        <>
                            <View style={[styles.innercontainer]}>
                                <Icons.cloud width={150} height={90}/>
                                <Text style={styles.nofuleingRecordText}>No fueling records yet!</Text>
                                <Text style={styles.descText}>Add a record using the + button below to begin your wealthcare journey</Text>
                            </View>
                        </>
                    }
                    <Pressable style={styles.addRecordBtn} onPress={handleNavigateAddRefueling}>
                        <Icons.plusIcon width={20} height={20} fill="white"/>
                    </Pressable>
                    </>
                    :
                    <>
                    <View style={styles.innercontainer}>
                        <Icons.Milestone width={100} height={100}/>
                        <Text style={styles.descTextForNovehicle}>Add vehicle to start tracking its refuelling and performance</Text>
                        <Pressable style={styles.addvehicleBtn} onPress={handleNavigateaddvehicles}>
                            <Text style={styles.addVehicleText}>Add vehicles</Text>
                            <Icons.arrowright width={14} height={14} fill={"white"}/>
                        </Pressable>
                    </View>
                    </>
                }
            </View>
        </View>
    )
}