import { LinearGradient } from "expo-linear-gradient";
import { View , Text, Pressable, Dimensions} from "react-native";
import styles from './HomePageStyles'
import { useSafeAreaInsets } from "react-native-safe-area-context";
import Icons from "../Icons";
import { useNavigation } from "@react-navigation/native";
import { useMileageAppStore } from "../store";
import { useEffect, useRef, useState } from "react";
import colors from "../colors";
import { Image } from "expo-image";
import BottomSheetWithDynamicFlatList from "../ReusableRootComps/BottomsheetWithDynamicList";
import VehicleListPopup from "../VehiclesComp/VehicleListPopup/VehicleListPopup";

const SCREEN_HEIGHT=Dimensions.get("window").height

export default function HomePage(){

    const safeAreaInsets=useSafeAreaInsets()
    const navigation=useNavigation()
    const vehiclelistRef=useRef(null)
    const vehicleslist=useMileageAppStore((state)=>state.vehicles)

    const [selectedVehicleItem, setSelectedVehicleitem]=useState(null)
    const truncatedName = selectedVehicleItem?.vehicle_name.length > 12 ? selectedVehicleItem?.vehicle_name.slice(0, 12) + "..." : selectedVehicleItem?.vehicle_name

    useEffect(()=>{
        if(vehicleslist && vehicleslist.length!==0){
            setSelectedVehicleitem(vehicleslist[0])
        }else{
            setSelectedVehicleitem(null)
        }
    },[vehicleslist])

    const handleNavigateVehicles=()=>{
        navigation.navigate('Vehicles')
    }

    const handleNavigateRefuelling=()=>{
       navigation.navigate("Refueling", {
        screen: "AddRefuelingPage",
        initial:false,
        params:{isEdit:false}
        });
    }

    const handleOpenVehicleList=()=>{
        vehiclelistRef.current?.present()
    }

    const handleCloseVehicleList=()=>{
        vehiclelistRef.current?.dismiss()
    }

    const handleSelectVehicleItem=(item)=>{
        setSelectedVehicleitem(item)
        handleCloseVehicleList()
    }

    return(
        <View style={[styles.container, {paddingTop:safeAreaInsets.top, paddingBottom:safeAreaInsets.bottom, paddingLeft:safeAreaInsets.left, paddingRight:safeAreaInsets.right}]}>
            <LinearGradient
                colors={['#D0EAEA', '#F6F6EC']}
                style={styles.background}
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 1 }}
            />
            <View style={styles.contentContainer}>
                <View style={styles.userAbsDiv}>
                        <Icons.user width={20} height={20} fill={"black"}/>
                    </View>
                <View style={styles.headerOfHome}>
                    <Icons.Union width={34} height={34}/>
                </View>
                <Text style={styles.title}>Hi Snack Muncher</Text>
                {
                vehicleslist && vehicleslist.length!==0 && selectedVehicleItem ?
                <>
                <View style={styles.vehicleWithItemsDiv}>
                    <Text style={styles.subtitleWithVehicle}>Here is everything about your</Text>
                    <Pressable style={styles.vehicleItemdiv} onPress={handleOpenVehicleList}>
                        <Text style={styles.vehicleText} numberOfLines={1} ellipsizeMode="tail">{truncatedName}</Text>
                        <View style={{transform:[{rotate:"90deg"}]}}>
                        <Icons.chevronright width={14} height={14} fill={colors.greenBtnColor}/>
                        </View>
                    </Pressable>
                    <View style={styles.avatarOuter}>
                        {
                            !selectedVehicleItem?.avatar ?
                            <>
                            <Image
                                source={selectedVehicleItem.vehicle_type==="4 Wheeler" ? Icons.noImgFor4wheelVehicle : Icons.noImgForVehicle}
                                style={styles.avatarStyle}
                            />
                            </>   
                            :
                            <>
                            <Image
                                source={selectedVehicleItem.avatar}
                                style={styles.avatarStyle}
                            />
                            </>
                        }
                    </View>
                    <View style={{marginTop:26}}/>
                    <Icons.cloud width={150} height={90}/>
                    <Text style={styles.addRefuellingText}>It’s time to add the refuelling details to get more insights</Text>
                    <Pressable style={styles.addvehicleBtn} onPress={handleNavigateRefuelling}>
                        <Text style={styles.addVehicleText}>Add Refuelling</Text>
                        <Icons.arrowright width={14} height={14} fill={"white"}/>
                    </Pressable>
                </View>
                </>
                :
                <>
                <Text style={styles.subTitle}>Track your miles towards a prosperous financial journey!</Text>
                <View style={styles.vertGap}/>
                <View style={styles.innercontainer}>
                <Icons.Milestone width={100} height={100}/>
                <Text style={styles.descText}>Add vehicle to start tracking its refuelling and performance</Text>
                <Pressable style={styles.addvehicleBtn} onPress={handleNavigateVehicles}>
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
        </View>
    )
}