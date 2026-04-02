import { memo } from 'react'
import styles from './VehicleAddedSuccessPopup_styles'
import { Modal } from 'react-native'
import { LinearGradient } from 'expo-linear-gradient'
import { View, Text } from 'react-native'
import { Image } from 'expo-image'
import Icons from '../../Icons'
import { useSafeAreaInsets } from 'react-native-safe-area-context'

const VehicleAddedSuccessPopup=memo(({showSuccess, vehicleName, avatar, vehicleType})=>{

    const safeAreaInsets=useSafeAreaInsets()

    return(
        <Modal visible={showSuccess} transparent animationType="fade">
            <View style={[styles.overlay]}>
                <LinearGradient
                    colors={['#ACDADB', '#F0F0E0']}
                    style={styles.background}
                    start={{ x: 0.2, y: 0.2 }}
                    end={{ x: 1, y: 1 }}
                />
                <View style={styles.innercontentcontainer}>
                    <Image source={Icons.confetti} style={styles.confetti}/>
                    {
                        avatar?
                        <Image source={avatar} style={styles.avatarImg}/>
                        :
                        <Image source={vehicleType==="4 Wheeler" ? Icons.noImgFor4wheelVehicle : Icons.noImgForVehicle} style={styles.avatarImg}/>
                    }
                    <Text style={styles.vehicleName} numberOfLines={1} ellipsizeMode='tail'>{vehicleName}</Text>
                    <Text style={styles.vehicleAddedText}>Vehicle Added!</Text>
                </View>
            </View>
            <Image source={Icons.Onboardingscreen} style={styles.onboardingscreen}/>
        </Modal>
    )
})

export default VehicleAddedSuccessPopup