import { View , Text, TextInput, Pressable, TouchableWithoutFeedback} from 'react-native'
import styles from './AddVehiclesPage_styles'
import { useMemo, useState } from 'react'
import { LinearGradient } from 'react-native-svg'
import { useNavigation } from '@react-navigation/native'
import colors from '../../colors'
import AddvehicleTypePopup from '../AddvehicleTypePopup/AddvehicleTypePopup'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import { useMileageAppStore } from '../../store'
import Icons from '../../Icons'
import * as ImagePicker from 'expo-image-picker'
import { Image } from 'expo-image'

export default function AddVehiclesPage(){

    const navigation=useNavigation()
    const safeAreaInsets=useSafeAreaInsets()

    const addVehicles=useMileageAppStore((state)=>state.addVehicles)

    const [vehicleName, setVehicleName]=useState('')
    const [vehicleType, setVehicleType]=useState(null)
    const [engineCC, setEngineCC]=useState('')
    const [showvehicleType, setshowvehicleType]=useState(false)
    const [avatar, setAvatar]=useState(null)

    const handleChangeVehicleName=(text)=>{
        setVehicleName(text)
    }

     const handleChangeengineCC=(text)=>{
        setEngineCC(text)
    }

    const handleGoBack=()=>{
        navigation.goBack()
    }

    const handleToggleShowVehicleType=()=>{
        setshowvehicleType(!showvehicleType)
    }

    const handleCloseShowVehicleType=()=>{
        setshowvehicleType(false)
    }

    const handleAddVehicle=()=>{
        const vehicleObj={
            "id":Date.now().toString(),
            "vehicle_name":vehicleName,
            "vehicle_type":vehicleType,
            "engineCC":engineCC,
            "avatar":avatar
        }
        addVehicles(vehicleObj)
        navigation.goBack()
    }

    const isAddBtnEnabled=useMemo(()=>{
        return vehicleName && vehicleName.length!==0 && vehicleType && engineCC && engineCC.length!==0
    },[vehicleName, vehicleType, engineCC])

    const handleChangeVehicleType=(type)=>{
        setVehicleType(type)
    }

    const handleAddAvatarForVehicle=async()=>{
        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ['images'],
            allowsEditing: true,
            quality: 1,
            aspect: [1, 1]
        });
        if (!result.canceled) {
            setAvatar(result.assets[0].uri)
        }
    }

    return(
        <View style={[styles.container, {paddingTop:safeAreaInsets.top, paddingLeft:safeAreaInsets.left, paddingRight:safeAreaInsets.right,  paddingBottom:safeAreaInsets.bottom}]}>
            <TouchableWithoutFeedback style={{flex:1}} onPress={handleCloseShowVehicleType}>
                <View style={{flex:1}}>
                <Text style={styles.title}>Add Vehicles</Text>
                <Pressable style={styles.avatarOuter} onPress={handleAddAvatarForVehicle}>
                {
                avatar ?
                <>
                    <Image
                        source={avatar}
                        style={styles.avatarStyle}
                    />
                </>
                :
                <View style={[styles.avatarEmptyOuter]}>
                    <Icons.camera width={20} height={20} fill="white"/>
                </View>
                }
                </Pressable>
                <View style={styles.contentContainer}>
                <View style={{flex:1, marginTop:25}}>
                    <View style={styles.inputBox}>
                        <TextInput
                            value={vehicleName}
                            onChangeText={handleChangeVehicleName}
                            autoCapitalize='none'
                            autoCorrect={false}
                            selectionColor={"black"}
                            placeholder='Vehicle name'
                            placeholderTextColor={colors.greenBtnColor}
                            style={styles.inputText}
                        />
                    </View>
                    <View style={styles.inputGap}/>
                    <Pressable style={styles.inputBox} onPress={handleToggleShowVehicleType}>
                        <Text style={[styles.inputText, {color:colors.greenBtnColor}]}>{vehicleType && vehicleType.length!==0 ? vehicleType : "Vehicle Type"}</Text>
                    </Pressable>
                    <View style={styles.inputGap}/>
                    <View style={styles.inputBox}>
                        <TextInput
                            value={engineCC}
                            onChangeText={handleChangeengineCC}
                            autoCapitalize='none'
                            autoCorrect={false}
                            selectionColor={"black"}
                            placeholder='Engine CC'
                            placeholderTextColor={colors.greenBtnColor}
                            style={styles.inputText}
                            keyboardAppearance='numeric'
                        />
                    </View>
                    {
                        showvehicleType &&
                        <AddvehicleTypePopup handleChangeVehicleType={handleChangeVehicleType} vehicleType={vehicleType}/>
                    }
                </View>
                <View style={styles.btnflexcontainer}>
                    <Pressable style={styles.cancelBtn} onPress={handleGoBack}>
                        <Text style={styles.btnText}>Cancel</Text>
                    </Pressable>
                    <View style={{marginLeft:10}}/>
                    {
                    isAddBtnEnabled ?
                    <Pressable style={styles.addBtn} onPress={handleAddVehicle}>
                        <Text style={[styles.btnText, {color:"white"}]}>Add</Text>
                    </Pressable>
                    :
                    <View style={[styles.addBtn, {backgroundColor:"#B0B0B0"}]}>
                        <Text style={[styles.btnText, {color:"black"}]}>Add</Text>
                    </View>
                    }
                </View>
                </View>
                </View>
            </TouchableWithoutFeedback>
        </View>
    )
}
