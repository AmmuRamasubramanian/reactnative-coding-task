import { memo, useCallback } from 'react'
import styles from './VehicleListPopup_styles'
import { View, Text, Pressable } from 'react-native'
import { useMileageAppStore } from '../../store'
import { BottomSheetFlashList, BottomSheetFlatList } from '@gorhom/bottom-sheet'
import isEqual from 'lodash.isequal'

const VehicleListPopup=memo(({handleSelectVehicleItem})=>{

     const vehicleslist=useMileageAppStore((state)=>state.vehicles)

    const MemoizedRenderItem=memo(({item, isFirstIndex})=>{
        return(
            <Pressable onPress={()=>handleSelectVehicleItem(item)} style={[styles.vehicleItem, !isFirstIndex && {marginTop:15}]}>
                <Text style={styles.vehicleNameInPopup}>{item.vehicle_name}</Text>
            </Pressable>
        )
    },(r1, r2)=>{
        return isEqual(r1.item, r2.item) && r1.isFirstIndex===r2.isFirstIndex
    })
    
    const renderItem=useCallback(({item}, isFirstIndex)=>{
        return <MemoizedRenderItem item={item} isFirstIndex={isFirstIndex}/>
    },[])

    return(
        <View style={styles.container}>
            <Text style={styles.title}>Vehicle list</Text>
            <BottomSheetFlatList
                data={vehicleslist}
                renderItem={({item, index})=>{
                    const isFirstIndex=index===0
                    return(
                        <>
                        {renderItem({item}, isFirstIndex)}
                        </>
                    )
                }}
                keyExtractor={(item)=>item.id.toString()}
                contentContainerStyle={{paddingBottom:100, paddingTop:15}}
                showsVerticalScrollIndicator={false}
                estimatedItemSize={45}
            />
        </View>
    )
})

export default VehicleListPopup