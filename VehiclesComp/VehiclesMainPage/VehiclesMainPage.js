import { View , Pressable, Text} from 'react-native'
import styles from './VehiclesMainPage_styles'
import { useMileageAppStore } from '../../store'
import { LinearGradient } from "expo-linear-gradient";
import Icons from '../../Icons';
import { useNavigation } from '@react-navigation/native';

export default function VehiclesMainPage(){
    const navigation=useNavigation()
    const vehicleslist=useMileageAppStore((state)=>state.vehicles)

    const handleNavigateaddvehicles=()=>{
        navigation.navigate('AddVehiclesPage')
    }

    return(
        <View style={styles.container}>
            <LinearGradient
                colors={['#D0EAEA', '#F6F6EC']}
                style={styles.background}
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 1 }}
            />
            <View style={styles.contentcontainer}>
                {
                    vehicleslist && vehicleslist.length!==0 ?
                    <>
                    <Text></Text>
                    </>
                    :
                    <View style={styles.innercontainer}>
                    <Icons.Milestone width={100} height={100}/>
                    <Text style={styles.descText}>Add vehicle to start tracking its refuelling and performance</Text>
                    <Pressable style={styles.addvehicleBtn} onPress={handleNavigateaddvehicles}>
                        <Text style={styles.addVehicleText}>Add vehicles</Text>
                    </Pressable>
                    </View>
                }
                </View>
        </View>
    )
}