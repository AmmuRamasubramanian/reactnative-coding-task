import { LinearGradient } from "expo-linear-gradient";
import { View , Text, Pressable, Dimensions, ScrollView} from "react-native";
import styles from './HomePageStyles'
import { useSafeAreaInsets } from "react-native-safe-area-context";
import Icons from "../Icons";
import { useNavigation } from "@react-navigation/native";
import { useMileageAppStore } from "../store";
import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import colors from "../colors";
import { Image } from "expo-image";
import BottomSheetWithDynamicFlatList from "../ReusableRootComps/BottomsheetWithDynamicList";
import VehicleListPopup from "../VehiclesComp/VehicleListPopup/VehicleListPopup";
import React from "react";
import isEqual from "lodash.isequal";
import { memo } from "react";
import moment from "moment";

const SCREEN_HEIGHT=Dimensions.get("window").height

export default function HomePage(){

    const safeAreaInsets=useSafeAreaInsets()
    const navigation=useNavigation()
    const vehiclelistRef=useRef(null)
    const vehicleslist=useMileageAppStore((state)=>state.vehicles)
    const recordslist=useMileageAppStore((state)=>state.records)

    const [selectedVehicleItem, setSelectedVehicleitem]=useState(null)
    const truncatedName = selectedVehicleItem?.vehicle_name.length > 12 ? selectedVehicleItem?.vehicle_name.slice(0, 12) + "..." : selectedVehicleItem?.vehicle_name

    const allRecordsOfSelected = useMemo(() => {
        if (!selectedVehicleItem) return []

        const allRecords = recordslist[selectedVehicleItem?.id] || []  // ← add fallback

        return allRecords
            .sort((a, b) => new Date(b.date) - new Date(a.date))
            .slice(0, 5)

    }, [selectedVehicleItem, recordslist])

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

    const handleNavigateAddRefuelling=()=>{
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

    const handleNavigateRefuelling=()=>{
        navigation.navigate('Refueling')
    }

    const MemoizedRenderItem=memo(({item, isFirstIndex})=>{

        const dateText=moment(item.date, "YYYY-MM-DD").format("ddd, DD MMM ‘YY")

        return(
            <View style={[styles.recordItem, !isFirstIndex && {marginTop:15}]}>
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
        <View style={[styles.container, {paddingTop:safeAreaInsets.top, paddingBottom:safeAreaInsets.bottom, paddingLeft:safeAreaInsets.left, paddingRight:safeAreaInsets.right}]}>
            <LinearGradient
                colors={['#ACDADB', '#F0F0E0']}
                style={styles.background}
                start={{ x: 0.2, y: 0.2 }}
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
                (vehicleslist && vehicleslist.length!==0 && selectedVehicleItem) ?
                <>
                <ScrollView showsVerticalScrollIndicator={false}>
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
                    {
                    allRecordsOfSelected && allRecordsOfSelected.length!==0 ?
                    <>
                    <View style={styles.contentOfRefuellingdata}>
                    <View style={styles.subHeaderdiv}>
                        <Text style={styles.subHeaderText}>Refuelling History</Text>
                        <Pressable style={styles.subHeaderInnerflex} onPress={handleNavigateRefuelling}>
                            <Text style={styles.seeallText}>See all</Text>
                            <Icons.chevronright width={12} height={12} fill={colors.red_3}/>
                        </Pressable>
                    </View>
                    <View style={styles.contentOfRefulleingHist}>
                        {
                            allRecordsOfSelected.map((item, index)=>{
                                return(
                                    <React.Fragment key={item.id}>
                                        {renderItem({item}, index===0)}
                                    </React.Fragment>
                                )
                            })
                        }
                    </View>
                    </View>
                    </>
                    :
                    <>
                    <View style={{marginTop:30}}/>
                    <Icons.cloud width={150} height={90}/>
                    <Text style={styles.addRefuellingText}>It’s time to add the refuelling details to get more insights</Text>
                    <Pressable style={styles.addvehicleBtn} onPress={handleNavigateAddRefuelling}>
                        <Text style={styles.addVehicleText}>Add Refuelling</Text>
                        <Icons.arrowright width={14} height={14} fill={"white"}/>
                    </Pressable>
                    </>
                    }
                </View>
                </ScrollView>
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