import { memo } from 'react'
import styles from './VehicleListPopup_styles'
import { View, Text } from 'react-native'
import { useMileageAppStore } from '../../store'

const VehicleListPopup=memo(({handleSelectVehicleItem})=>{

     const vehicleslist=useMileageAppStore((state)=>state.vehicles)

    return(
        <View style={styles.container}>
            <Text styles={styles.title}>Vehicle list</Text>
        </View>
    )
})

export default VehicleListPopup