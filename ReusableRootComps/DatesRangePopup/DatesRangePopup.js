import { memo, useCallback } from 'react'
import styles from './DatesRangePopup_styles'
import { View , Text, Pressable} from 'react-native'
import { BottomSheetFlatList } from '@gorhom/bottom-sheet'
import isEqual from 'lodash.isequal'

const DatesRangePopup=memo(({selectedRange, handleSelectRange})=>{

    const arr=[7, 30, 60, 90, 120, 360, null]

    const MemoizedRenderItem=memo(({item, isFirstIndex, isSelected})=>{
        return(
            <Pressable 
                onPress={()=>handleSelectRange(item)} 
                style={[styles.dateItem, !isFirstIndex && {marginTop:15}, isSelected && {backgroundColor:"#D9F0F1"}]}
            >
                <Text style={styles.dateText}>{item ? `Last ${item} days` : "Show all"}</Text>
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
            <Text style={styles.title}>Select Range</Text>
            <BottomSheetFlatList
                data={arr}
                renderItem={({item, index})=>{
                    const isFirstIndex=index===0
                    const isSelected=selectedRange==item
                    return(
                        <>
                        {renderItem({item}, isFirstIndex, isSelected)}
                        </>
                    )
                }}
                keyExtractor={(item, index)=>index.toString()}
                contentContainerStyle={{paddingBottom:100, paddingTop:15}}
                showsVerticalScrollIndicator={false}
                estimatedItemSize={45}
            />
        </View>
    )
})

export default DatesRangePopup