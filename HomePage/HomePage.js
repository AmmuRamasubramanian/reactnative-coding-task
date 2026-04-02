import { LinearGradient } from "expo-linear-gradient";
import { View , Text, Pressable} from "react-native";
import styles from './HomePageStyles'
import { useSafeAreaInsets } from "react-native-safe-area-context";
import Icons from "../Icons";
import { useNavigation } from "@react-navigation/native";

export default function HomePage(){

    const safeAreaInsets=useSafeAreaInsets()
    const navigation=useNavigation()

    const handleNavigateVehicles=()=>{
        navigation.navigate('Vehicles')
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
                <Text style={styles.title}>Hi Snack Muncher</Text>
                <Text style={styles.subTitle}>Track your miles towards a prosperous financial journey!</Text>
                <View style={styles.vertGap}/>
                <View style={styles.innercontainer}>
                <Icons.Milestone width={100} height={100}/>
                <Text style={styles.descText}>Add vehicle to start tracking its refuelling and performance</Text>
                <Pressable style={styles.addvehicleBtn} onPress={handleNavigateVehicles}>
                    <Text style={styles.addVehicleText}>Add vehicles</Text>
                </Pressable>
                </View>
            </View>
        </View>
    )
}