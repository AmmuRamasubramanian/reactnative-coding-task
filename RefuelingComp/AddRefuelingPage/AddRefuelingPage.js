import { View , Text, Pressable, TextInput} from 'react-native'
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

export default function AddRefuelingPage(){

    const safeAreaInsets=useSafeAreaInsets()
    const caleRef=useRef(null)
    const sheetRef=useRef(null)
    const navigation=useNavigation()

     const vehicleslist=useMileageAppStore((state)=>state.vehicles)

    const [vehicleItem, setvehicleItem]=useState(null)
    const [refuellingdate, setRefuellingdate]=useState('')
    const [odometerstart, setOdometerstart]=useState('')
    const [odometerend, setOdometerEnd]=useState('')
    const [fuel, setFuel]=useState('')
    const [price, setPrice]=useState('')

    const snapPoints = useMemo(() => ["50%"], []);

    const handleOpenVehicleNamePopup=()=>{
        sheetRef.current?.snapToIndex(0)
    }

    const handleOpenRefuellingdatePopup=()=>{
        caleRef.current?.snapToIndex(0)
    }

    const handleCloseSheetPopup=()=>{
        caleRef.current?.close()
        sheetRef.current?.close()
    }

    const handleChangeOdometerStart=(text)=>{
        setOdometerstart(text)
    }

    const handleChangeOdometerEnd=(text)=>{
        setOdometerEnd(text)
    }

    const handleChangefuelConsump=(text)=>{
        setFuel(text)
    }

    const handleChangePrice=(text)=>{
        setPrice(text)
    }

    const renderBackdrop = useCallback(
		(props) => (
			<BottomSheetBackdrop
				{...props}
				disappearsOnIndex={-1}
				appearsOnIndex={0}
                pressBehavior={"close"}
                style={{backgroundColor:"rgba(0, 0, 0, 0.5)"}}
			/>
		),
		[]
	);

    const handleSelectVehicleItem=(item)=>{
        setvehicleItem(item)
        handleCloseSheetPopup()
    }

    const isAddenabled=useMemo(()=>{
        return vehicleItem && Object.keys(vehicleItem).length!==0 && odometerend && odometerend.length!==0 &&
            odometerstart && odometerstart.length!==0 && fuel && fuel.length!==0 && 
            refuellingdate && refuellingdate.length!==0 && price && price.length!==0
    },[vehicleItem, odometerend, odometerstart, fuel, price, refuellingdate])

    const handleGoBack=()=>{
        navigation.goBack()
    }

    const handleAddRefuelling=()=>{
        const obj={}
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
                    <Text style={styles.vehicleName}>{vehicleItem && Object.keys(vehicleItem).length!==0 ? vehicleItem.vehicle_name : "Select a vehicle name"}</Text>
                   <Icons.chevronright width={15} height={15} fill={colors.greenBtnColor}/>
                </Pressable>
                <View style={styles.inputGap}/>
                <Pressable style={styles.inputBox} onPress={handleOpenRefuellingdatePopup}>
                    <Text style={styles.vehicleName}>{refuellingdate && refuellingdate.length!==0 ? refuellingdate : "Enter refuelling date"}</Text>
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
                            value={fuel}
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

            <BottomSheet
                ref={sheetRef}
                snapPoints={snapPoints}
                enableDynamicSizing={true}
                index={-1}
                backdropComponent={renderBackdrop}
                enablePanDownToClose
            >
                <BottomSheetView style={styles.contentContainerOfBackdrop}>
                    <View style={styles.vehiclelistDiv}>
                    <Text style={styles.vehiclelistTitle}>Vehicle list</Text>
                    {
                        vehicleslist.map((item, index)=>{
                            return(
                                <Pressable key={item.id} style={styles.vehicleItemInPopup} onPress={()=>handleSelectVehicleItem(item)}>
                                    <Text style={styles.vehicleNameInPopup}>{item.vehicle_name}</Text>
                                </Pressable>
                            )
                        })
                    }
                    </View>
                </BottomSheetView>
            </BottomSheet>
            <BottomSheet
                ref={caleRef}
                snapPoints={snapPoints}
                enableDynamicSizing={true}
                index={-1}
                backdropComponent={renderBackdrop}
                enablePanDownToClose
                
            >
                <BottomSheetView style={styles.contentContainerOfBackdrop}>
                 <Calendar
                    onDayPress={(date)=>{
                        console.log(date)
                        setRefuellingdate(date.dateString)
                    }}
                    markedDates={{
                        [refuellingdate]: {marked: true}
                    }}
                />
                </BottomSheetView>
            </BottomSheet>
        </View>
    )
}