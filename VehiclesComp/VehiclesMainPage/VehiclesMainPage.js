import { View , Pressable, Text, FlatList, Dimensions} from 'react-native'
import styles from './VehiclesMainPage_styles'
import { useMileageAppStore } from '../../store'
import { LinearGradient } from "expo-linear-gradient";
import Icons from '../../Icons';
import { useNavigation } from '@react-navigation/native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { memo, useCallback } from 'react';
import isEqual from 'lodash.isequal';
import { Image } from 'expo-image';

const SCREEN_WIDTH=Dimensions.get('window').width

export default function VehiclesMainPage(){
    const navigation=useNavigation()
    const safeAreaInsets=useSafeAreaInsets()

    const vehicleslist=useMileageAppStore((state)=>state.vehicles)

    const handleNavigateaddvehicles=()=>{
        navigation.navigate('AddVehiclesPage')
    }

    const MemoizedRenderItem=memo(({item})=>{
        return(
            <View>
                <Image
                    source={require('../../assets/svgicons/bikeImg.png')}
                />
                <View style={styles.bottomflexcontainer}>
                    <View>
                        <Text style={styles.vehicleName}>{item.vehicle_name}</Text>
                        <Text  style={styles.vehicleType}>{item.vehicle_type}</Text>
                    </View>
                    <Text style={styles.vehicleEngineCC}>{item.engineCC}</Text>
                </View>
            </View>
        )
    },(r1, r2)=>{
        return isEqual(r1.item, r2.item)
    })

    const renderItem=useCallback(({item, index})=>{
        return <MemoizedRenderItem item={item}/>
    },[])

    return(
        <View style={[styles.container, {paddingTop:safeAreaInsets.top, paddingLeft:safeAreaInsets.left, paddingRight:safeAreaInsets.right}]}>
            <LinearGradient
                colors={['#D0EAEA', '#F6F6EC']}
                style={styles.background}
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 1 }}
            />
            {
                !(vehicleslist && vehicleslist.length!==0) &&
                <View style={styles.mainTitleDiv}>
                    <Text style={styles.mainTitle}>Vehicles</Text>
                </View>
            }
            <View style={styles.contentcontainer}>
                {
                    vehicleslist && vehicleslist.length!==0 ?
                    <>
                    <Text style={styles.mainTitle}>Vehicles</Text>
                    <FlatList
                        data={vehicleslist}
                        renderItem={renderItem}
                        showsVerticalScrollIndicator={false}
                        keyExtractor={(item)=>item.id.toString()}
                    />
                    <Pressable style={styles.addRecordBtn} onPress={handleNavigateaddvehicles}>
                        <Icons.plusIcon width={20} height={20} fill="white"/>
                    </Pressable>
                    </>
                    :
                    <>
                    <View style={styles.innercontainer}>
                    <Icons.Milestone width={100} height={100}/>
                    <Text style={styles.descText}>Add vehicle to start tracking its refuelling and performance</Text>
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