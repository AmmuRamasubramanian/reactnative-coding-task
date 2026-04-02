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
                <View style={styles.headerOfHome}>
                    <Icons.Union width={34} height={34}/>
                    <View style={styles.userAbsDiv}>
                        <Icons.user width={20} height={20} fill={"black"}/>
                    </View>
                </View>
                <Text style={styles.title}>Hi Snack Muncher</Text>
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
            </View>
        </View>
    )
}