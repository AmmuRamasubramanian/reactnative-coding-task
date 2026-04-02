import { View, Text, Pressable } from 'react-native'
import styles from './AddvehicleTypePopup_styles'
import React, { memo } from 'react'
import { TouchableWithoutFeedback } from 'react-native'

const AddvehicleTypePopup=memo(({vehicleType, handleChangeVehicleType})=>{

    const arr=["2 Wheeler", "3 Wheeler", "4 Wheeler", "Other"]

    return(
        <>
        <TouchableWithoutFeedback onPress={()=>{}}>
        <View style={styles.container}>
            {
                arr.map((item, index)=>{
                    return(
                        <React.Fragment key={index}>
                            <Pressable onPress={()=>handleChangeVehicleType(item)} style={styles.addVehicleItem}>
                            <Text style={styles.addVehicleText}>{item}</Text>
                            </Pressable>
                        </React.Fragment>
                    )
                })
            }
        </View>
        </TouchableWithoutFeedback>
        </>
    )
})

export default AddvehicleTypePopup