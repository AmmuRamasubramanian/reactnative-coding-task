import { View , Text, Pressable, TextInput} from 'react-native'
import styles from './AddRefuelingPage_styles'
import { useState } from 'react'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import colors from '../../colors'

export default function AddRefuelingPage(){

    const safeAreaInsets=useSafeAreaInsets()

    const [vehicleName, setVehicleName]=useState("")
    const [refuellingdate, setRefuellingdate]=useState('')
    const [odometerstart, setOdometerstart]=useState('')
    const [odometerend, setOdometerEnd]=useState('')
    const [fuel, setFuel]=useState('')
    const [price, setPrice]=useState('')

    const handleOpenVehicleNamePopup=()=>{

    }

    const handleOpenRefuellingPopup=()=>{

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

    return(
        <View style={[styles.container, {paddingTop:safeAreaInsets.top, paddingLeft:safeAreaInsets.left, paddingRight:safeAreaInsets.right}]}>
            <View style={styles.contentcontainer}>
                <Text style={styles.title}>Add Refuelling Record</Text>
                <View style={{marginTop:30}}/>
                <Pressable style={styles.inputBox} onPress={handleOpenVehicleNamePopup}>
                    <Text style={styles.vehicleName}>{vehicleName && vehicleName.length!==0 ? vehicleName : "Select a vehicle name"}</Text>
                </Pressable>
                <View style={styles.inputGap}/>
                <Pressable style={styles.inputBox} onPress={handleOpenRefuellingPopup}>
                <Text style={styles.vehicleName}>{refuellingdate && refuellingdate.length!==0 ? refuellingdate : "Enter refuelling date"}</Text>
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
                        />
                    </View>
                </View>
            </View>
        </View>
    )
}