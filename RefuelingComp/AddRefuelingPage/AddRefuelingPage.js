import { View , Text, Pressable, TextInput, Dimensions} from 'react-native'
import styles from './AddRefuelingPage_styles'
import { useCallback, useMemo, useRef, useState } from 'react'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import colors from '../../colors'
import {Calendar, LocaleConfig} from 'react-native-calendars';
import BottomSheet, { BottomSheetBackdrop, BottomSheetView } from '@gorhom/bottom-sheet'
import { useMileageAppStore } from '../../store'
import { useNavigation } from '@react-navigation/native'
import Icons from '../../Icons'
import { Image } from 'expo-image'
import BottomSheetWithDynamicFlatList from '../../ReusableRootComps/BottomsheetWithDynamicList'
import VehicleListPopup from '../../VehiclesComp/VehicleListPopup/VehicleListPopup'
import BottomSheetWrapper from '../../ReusableRootComps/BottomSheetWrapper'

const SCREEN_HEIGHT=Dimensions.get("window").height

export default function AddRefuelingPage(){

    const safeAreaInsets=useSafeAreaInsets()
    const addRecordForVehicle=useMileageAppStore((state)=>state.addRecordForVehicles)

    const caleRef=useRef(null)
    const sheetRef=useRef(null)
    const navigation=useNavigation()

    const [vehicleItem, setvehicleItem]=useState(null)
    const [refuellingdate, setRefuellingdate]=useState('')
    const [odometerstart, setOdometerstart]=useState('')
    const [odometerend, setOdometerEnd]=useState('')
    const [fuelConsumption, setFuelConsumption]=useState('')
    const [price, setPrice]=useState('')

    const handleOpenVehicleNamePopup=()=>{
        sheetRef.current?.present()
    }

    const handleOpenRefuellingdatePopup=()=>{
        caleRef.current?.present(0)
    }

    const handleCloseSheetPopup=()=>{
        caleRef.current?.dismiss()
        sheetRef.current?.dismiss()
    }

    const handleChangeOdometerStart=(text)=>{
        setOdometerstart(text)
    }

    const handleChangeOdometerEnd=(text)=>{
        setOdometerEnd(text)
    }

    const handleChangefuelConsump=(text)=>{
        setFuelConsumption(text)
    }

    const handleChangePrice=(text)=>{
        setPrice(text)
    }

    const handleSelectVehicleItem=(item)=>{
        setvehicleItem(item)
        handleCloseSheetPopup()
    }

    const isAddenabled=useMemo(()=>{
        return vehicleItem && Object.keys(vehicleItem).length!==0 && odometerend && odometerend.length!==0 &&
            odometerstart && odometerstart.length!==0 && fuelConsumption && fuelConsumption.length!==0 && 
            refuellingdate && refuellingdate.length!==0 && price && price.length!==0
    },[vehicleItem, odometerend, odometerstart, fuelConsumption, price, refuellingdate])

    const handleGoBack=()=>{
        navigation.goBack()
    }

    const handleAddRefuelling=()=>{
        const obj={
            "price":price,
            "date":refuellingdate,
            "fuel_consumption":fuelConsumption,
            "odometer_start":odometerstart,
            "odometer_end":odometerend,
            "id":Date.now().toString(),
            "vehicle_name":vehicleItem.vehicle_name
        }
        addRecordForVehicle(vehicleItem.id, obj)
        navigation.goBack()
    }

    return(
        <View style={[styles.container, {paddingTop:safeAreaInsets.top, paddingLeft:safeAreaInsets.left, paddingRight:safeAreaInsets.right, paddingBottom:safeAreaInsets.bottom}]}>
            <Image
                source={Icons.topStyle}
                style={styles.topHeaderStyle}
            />
            <View style={styles.contentcontainer}>
                <Pressable onPress={handleGoBack} style={styles.arrowLeftIcon}>
                    <Icons.arrowleft width={25} height={25} fill={"white"}/>
                </Pressable>
                <Text style={styles.title}>Add Refuelling Record</Text>
                <View style={{marginTop:30}}/>
                <Pressable style={styles.inputBox} onPress={handleOpenVehicleNamePopup}>
                    <Text style={styles.vehicleName} numberOfLines={1} ellipsizeMode='tail'>{vehicleItem && Object.keys(vehicleItem).length!==0 ? vehicleItem.vehicle_name : "Select a vehicle name"}</Text>
                   <Icons.chevronright width={15} height={15} fill={colors.greenBtnColor}/>
                </Pressable>
                <View style={styles.inputGap}/>
                <Pressable style={styles.inputBox} onPress={handleOpenRefuellingdatePopup}>
                    <Text style={styles.vehicleName} numberOfLines={1} ellipsizeMode='tail'>{refuellingdate && refuellingdate.length!==0 ? refuellingdate : "Enter refuelling date"}</Text>
                    <Icons.calendar width={15} height={15} fill={colors.greenBtnColor}/>
                </Pressable>
                <View style={styles.inputGap}/>
                <Text style={styles.inputTitle}>Odometer</Text>
                <View style={styles.flexcontainerOfBtns}>
                    <View style={[styles.inputBox, {width:"48.5%"}]}>
                        <TextInput
                            autoCorrect={false}
                            autoCapitalize='none'
                            value={odometerstart}
                            onChangeText={handleChangeOdometerStart}
                            placeholder='Start reading'
                            placeholderTextColor={colors.greenBtnColor}
                            keyboardType='numeric'
                            style={styles.inputText}
                        />
                    </View>
                    <View style={{marginLeft:10}}/>
                    <View style={[styles.inputBox, {width:"48.5%"}]}>
                        <TextInput
                            autoCorrect={false}
                            autoCapitalize='none'
                            value={odometerend}
                            onChangeText={handleChangeOdometerEnd}
                            placeholder='End Reading'
                            placeholderTextColor={colors.greenBtnColor}
                            keyboardType='numeric'
                            style={styles.inputText}
                        />
                    </View>
                </View>
                <View style={styles.inputGap}/>
                <Text style={styles.inputTitle}>Fuel</Text>
                <View style={styles.flexcontainerOfBtns}>
                    <View style={[styles.inputBox, {width:"48.5%"}]}>
                        <TextInput
                            autoCorrect={false}
                            autoCapitalize='none'
                            value={fuelConsumption}
                            onChangeText={handleChangefuelConsump}
                            placeholder='Consumption (in L)'
                            placeholderTextColor={colors.greenBtnColor}
                            keyboardType='numeric'
                            style={styles.inputText}
                        />
                    </View>
                    <View style={{marginLeft:10}}/>
                    <View style={[styles.inputBox, {width:"48.5%"}]}>
                        <TextInput
                            autoCorrect={false}
                            autoCapitalize='none'
                            value={price}
                            onChangeText={handleChangePrice}
                            placeholder='Price (in $)'
                            placeholderTextColor={colors.greenBtnColor}
                            keyboardType='numeric'
                            style={styles.inputText}
                            maxLength={15}
                        />
                    </View>
                </View>
            </View>
            <View style={styles.btnflexcontainer}>
                <Pressable style={styles.cancelBtn} onPress={handleGoBack}>
                    <Text style={styles.btnText}>Cancel</Text>
                </Pressable>
                <View style={{marginLeft:10}}/>
                {
                isAddenabled ?
                <Pressable style={styles.addBtn} onPress={handleAddRefuelling}>
                    <Text style={[styles.btnText, {color:"white"}]}>Add</Text>
                </Pressable>
                :
                <View style={[styles.addBtn, {backgroundColor:"#B0B0B0"}]}>
                    <Text style={[styles.btnText, {color:"black"}]}>Add</Text>
                </View>
                }
            </View>

            <BottomSheetWithDynamicFlatList
                ref={sheetRef}
                maxHeight={SCREEN_HEIGHT*0.8}
                showSpace={true}
            >
                <VehicleListPopup
                    handleSelectVehicleItem={handleSelectVehicleItem}
                    vehicleItem={vehicleItem}
                />
            </BottomSheetWithDynamicFlatList>
            <BottomSheetWrapper
                ref={caleRef}
            >
                <View>
                 <Calendar
                    onDayPress={(date)=>{
                        console.log(date)
                        setRefuellingdate(date.dateString)
                    }}
                    markedDates={{
                        [refuellingdate]: {marked: true, selectedColor:colors.greenBtnColor}
                    }}
                    theme={{
                        textDayFontFamily: "inter_reg",
                        textMonthFontFamily: "inter_semibold",
                        textDayHeaderFontFamily: "inter_semibold",

                        textDayFontSize: 14,
                        textMonthFontSize: 16,
                        textDayHeaderFontSize: 13,
                    }}
                />
                </View>
            </BottomSheetWrapper>
        </View>
    )
}