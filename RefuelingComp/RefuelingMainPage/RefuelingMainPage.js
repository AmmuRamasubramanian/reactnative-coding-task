import { View , Text, Pressable, Dimensions} from 'react-native'
import styles from './RefuelingMainPage_styles'
import { useMileageAppStore } from '../../store'
import { LinearGradient } from 'expo-linear-gradient'
import Icons from '../../Icons'
import { useNavigation } from '@react-navigation/native'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import colors from '../../colors'
import { memo, useCallback, useEffect, useMemo, useRef, useState } from 'react'
import { FlashList } from '@shopify/flash-list'
import isEqual from 'lodash.isequal'
import moment from 'moment'
import VehicleListPopup from '../../VehiclesComp/VehicleListPopup/VehicleListPopup'
import BottomSheetWithDynamicFlatList from '../../ReusableRootComps/BottomsheetWithDynamicList'
import DatesRangePopup from '../../ReusableRootComps/DatesRangePopup/DatesRangePopup'

const SCREEN_HEIGHT=Dimensions.get("window").height

export default function RefuelingMainPage(){

    const navigation=useNavigation()
    const safeAreaInsets=useSafeAreaInsets()
    const vehiclelistRef=useRef(null)
    const rangeRef=useRef(null)
    const flatListRef=useRef(null)

    const vehicleslist=useMileageAppStore((state)=>state.vehicles)
    const recordslist=useMileageAppStore((state)=>state.records)
    const selectNewRecordItem=useMileageAppStore((state)=>state.selectNewRecordItem)

    const [selectedVehicleItem, setSelectedVehicleItem]=useState(null)
    const [selectedRange, setSelectedRange]=useState(30)

    const allRecordsOfSelected=useMemo(()=>{
        if(!selectedVehicleItem){
            return []
        }
        const allRecords= recordslist[selectedVehicleItem?.id]
        return allRecords  
    },[selectedVehicleItem, recordslist])

    const selectedRecords=useMemo(()=>{
        if(!selectedVehicleItem){
            return []
        }
        const allRecords= recordslist[selectedVehicleItem?.id]
        if (!selectedRange) return allRecords.sort((a, b) => new Date(b.date) - new Date(a.date))

        const cutoffDate = new Date()
        cutoffDate.setDate(cutoffDate.getDate() - selectedRange)
        cutoffDate.setHours(0, 0, 0, 0)
        if(allRecords &&allRecords.length!==0){

        return allRecords.filter(record => {
            const recordDate = new Date(record.date) 
            return recordDate >= cutoffDate
        }).sort((a, b) => new Date(b.date) - new Date(a.date))
        }
        return []
    },[recordslist, selectedVehicleItem, selectedRange])

    const formattedStartDate=useMemo(()=>{
        if(!selectedRange) return 
        const startDate = moment().subtract(30, 'days')
        return moment(startDate).format("Do MMM 'YY")
    },[selectedRange])

    const handleNavigateaddvehicles=()=>{
        navigation.navigate('Vehicles', {screen:"AddVehiclesPage", initial:false})
    }

    const handleNavigateAddRefueling=()=>{
        navigation.navigate('AddRefuelingPage', {isEdit:false})
    }

    useEffect(()=>{
        if(vehicleslist && vehicleslist.length!==0){
            setSelectedVehicleItem(vehicleslist[0])
        }else{
            setSelectedVehicleItem(null)
        }
    },[vehicleslist])

    const handleNavigateRecordItem=(item)=>{
        selectNewRecordItem({...item, "vehicle_name":item?.vehicle_name, "vehicle_id":item?.vehicle_id})
        navigation.navigate("RefuelingRecordDetailsPage")
    }

    const MemoizedRenderItem=memo(({item, isFirstIndex})=>{

        const dateText=moment(item.date, "YYYY-MM-DD").format("ddd, DD MMM ‘YY")

        return(
            <Pressable onPress={()=>handleNavigateRecordItem(item)} style={[styles.recordItem, {marginTop:15}]}>
                <View style={styles.recordInnerflex}>
                    <Icons.Rose width={28} height={28}/>
                    <View style={{marginLeft:10}}>
                        <Text style={styles.dateTextOfRecord} numberOfLines={1} ellipsizeMode='tail'>{dateText}</Text>
                        <Text style={styles.fuelText} numberOfLines={1} ellipsizeMode='tail'>{item.fuel_consumption}L</Text>
                    </View>
                </View>
                <Text style={styles.priceText} numberOfLines={1} ellipsizeMode='tail'>${item.price}</Text>
            </Pressable>
        )
    },(r1, r2)=>{
        return isEqual(r1.item, r2.item) && r1.isFirstIndex===r2.isFirstIndex
    })

    const renderItem=useCallback(({item}, isFirstIndex)=>{
        return <MemoizedRenderItem item={item} isFirstIndex={isFirstIndex}/>
    },[])


    const handleOpenVehicleList=()=>{
        vehiclelistRef.current?.present()
    }

    const handleClosevehicleList=()=>{
        vehiclelistRef.current?.dismiss()
    }

    const handleSelectVehicleItem=(item)=>{
        setSelectedVehicleItem(item)
        handleClosevehicleList()
    }

    const handleOpenRangePopup=()=>{
        rangeRef.current?.present()
    }

    const handleCloseRangePopup=()=>{
        rangeRef.current?.dismiss()
    }

    const handleSelectRange=(item)=>{
        handleCloseRangePopup()
        setSelectedRange(item)
    }

    return(
        <View style={[styles.container, {paddingTop:safeAreaInsets.top, paddingLeft:safeAreaInsets.left, paddingRight:safeAreaInsets.right}]}>
            <View style={{flex:1, backgroundColor:colors.lightWhitish, width:"100%"}}>
                <View style={styles.titleDiv}>
                    <Text style={styles.title}>Refuelling</Text>
                    {
                        ((allRecordsOfSelected && allRecordsOfSelected.length!==0) || (vehicleslist && vehicleslist.length!==0)) && selectedVehicleItem &&
                        <Pressable style={styles.selectedVehicleBox} onPress={handleOpenVehicleList}>
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
                        allRecordsOfSelected && allRecordsOfSelected.length!==0 ?
                        <>
                        <View style={styles.contentContainerrecord}>
                        <Pressable style={styles.rangeBox} onPress={handleOpenRangePopup}>
                            <Text style={styles.rangeText}>{selectedRange ? `Last ${selectedRange} days` : "All Records"}</Text>
                            <Icons.chevronright width={13} height={13} fill={colors.greenBtnColor}/>
                        </Pressable>
                        {
                        (selectedRecords && selectedRecords.length!==0) ?
                        <>
                        <View style={styles.numOfRecDiv}>
                            <Text style={styles.numberOfRecText}>{selectedRecords?.length} Records</Text>
                            <View style={styles.vertLineOfNumOfRec}/>
                            <Text style={styles.numberOfRecText}>{formattedStartDate} - Today</Text>
                        </View>
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
                            contentContainerStyle={{paddingBottom:100, paddingTop:5}}
                            onContentSizeChange={() => {
                                flatListRef.current?.scrollToOffset({ offset: 0, animated: true });
                            }}
                            ref={flatListRef}
                        />
                        </>
                        :
                        <>
                        <View style={[styles.innercontainer]}>
                            <Icons.cloud width={150} height={90}/>
                            <Text style={styles.nofuleingRecordText}>No fueling records in the last {selectedRange} days!</Text>
                        </View>
                        </>
                        } 
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
            <BottomSheetWithDynamicFlatList
                ref={vehiclelistRef}
                maxHeight={SCREEN_HEIGHT*0.8}
                showSpace={true}
            >
                <VehicleListPopup
                    handleSelectVehicleItem={handleSelectVehicleItem}
                    vehicleItem={selectedVehicleItem}
                />
            </BottomSheetWithDynamicFlatList>
            <BottomSheetWithDynamicFlatList 
                ref={rangeRef}
                maxHeight={SCREEN_HEIGHT*0.8}
                showSpace={true}
            >
                <DatesRangePopup
                    selectedRange={selectedRange}
                    handleSelectRange={handleSelectRange}

                />
            </BottomSheetWithDynamicFlatList>
        </View>
    )
}