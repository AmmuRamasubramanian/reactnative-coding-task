import { memo, useCallback } from 'react'
import styles from './VehicleListPopup_styles'
import { View, Text, Pressable } from 'react-native'
import { useMileageAppStore } from '../../store'
import { BottomSheetFlashList, BottomSheetFlatList } from '@gorhom/bottom-sheet'
import isEqual from 'lodash.isequal'

const VehicleListPopup=memo(({handleSelectVehicleItem, vehicleItem})=>{

     const vehicleslist=useMileageAppStore((state)=>state.vehicles)

    const MemoizedRenderItem=memo(({item, isFirstIndex, isSelected})=>{
        return(
            <Pressable 
                onPress={()=>handleSelectVehicleItem(item)} 
                style={[styles.vehicleItem, !isFirstIndex && {marginTop:15}, isSelected && {backgroundColor:"#D9F0F1"}]}
            >
                <Text style={styles.vehicleNameInPopup}>{item.vehicle_name}</Text>
            </Pressable>
        )
    },(r1, r2)=>{
        return isEqual(r1.item, r2.item) && r1.isFirstIndex===r2.isFirstIndex
        && r1.isSelected===r2.isSelected
    })
    
    const renderItem=useCallback(({item}, isFirstIndex, isSelected)=>{
        return <MemoizedRenderItem item={item} isFirstIndex={isFirstIndex} isSelected={isSelected}/>
    },[])

    return(
        <View style={styles.container}>
            <Text style={styles.title}>Vehicle list</Text>
            <View style={{flex:1}}>
            <BottomSheetFlatList
                data={vehicleslist}
                renderItem={({item, index})=>{
                    const isFirstIndex=index===0
                    const isSelected=vehicleItem && vehicleItem.id===item.id
                    return(
                        <>
                        {renderItem({item}, isFirstIndex, isSelected)}
                        </>
                    )
                }}
                keyExtractor={(item, index)=>item.id.toString()}
                contentContainerStyle={{paddingBottom:100, paddingTop:15}}
                showsVerticalScrollIndicator={false}
                estimatedItemSize={45}
            />
            </View>
        </View>
    )
})

export default VehicleListPopup