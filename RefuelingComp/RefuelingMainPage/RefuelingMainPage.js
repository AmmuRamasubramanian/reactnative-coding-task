import { View , Text, Pressable} from 'react-native'
import styles from './RefuelingMainPage_styles'
import { useMileageAppStore } from '../../store'
import { LinearGradient } from 'expo-linear-gradient'
import Icons from '../../Icons'
import { useNavigation } from '@react-navigation/native'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import colors from '../../colors'

export default function RefuelingMainPage(){

    const navigation=useNavigation()
    const safeAreaInsets=useSafeAreaInsets()
    const vehicleslist=useMileageAppStore((state)=>state.vehicles)
    const records=useMileageAppStore((state)=>state.records)

    const handleNavigateaddvehicles=()=>{
        navigation.navigate('Vehicles', {screen:"AddVehiclesPage"})
    }

    const handleNavigateAddRefueling=()=>{
        navigation.navigate('AddRefuelingPage')
    }

    return(
        <View style={[styles.container, {paddingTop:safeAreaInsets.top, paddingLeft:safeAreaInsets.left, paddingRight:safeAreaInsets.right}]}>
            {
                !(vehicleslist && vehicleslist.length!==0) ?
                <>
                {
                    records && records.length!==0 ?
                    <>
                    
                    </>
                    :
                    <>
                    <View style={{flex:1, backgroundColor:colors.lightWhitish, width:"100%"}}>
                        <View style={styles.titleDiv}>
                            <Text style={styles.title}>Refuelling</Text>
                        </View>
                        <View style={[styles.innercontainer]}>
                            <Icons.cloud width={150} height={90}/>
                            <Text style={styles.nofuleingRecordText}>No fueling records yet!</Text>
                            <Text style={styles.descText}>Add a record using the + button below to begin your wealthcare journey</Text>
                        </View>
                        <Pressable style={styles.addRecordBtn} onPress={handleNavigateAddRefueling}>
                            <Icons.plusIcon width={20} height={20} fill="white"/>
                        </Pressable>
                    </View>
                    </>
                }
                </>
                :
                <>
                <View style={{flex:1, backgroundColor:colors.lightWhitish, width:"100%"}}>
                <View style={styles.titleDiv}>
                    <Text style={styles.title}>Refuelling</Text>
                </View>
                <View style={styles.innercontainer}>
                    <Icons.Milestone width={100} height={100}/>
                    <Text style={styles.descTextForNovehicle}>Add vehicle to start tracking its refuelling and performance</Text>
                    <Pressable style={styles.addvehicleBtn} onPress={handleNavigateaddvehicles}>
                        <Text style={styles.addVehicleText}>Add vehicles</Text>
                        <Icons.arrowright width={14} height={14} fill={"white"}/>
                    </Pressable>
                </View>
                </View>
                </>
            }
        </View>
    )
}