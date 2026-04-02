import { memo } from 'react'
import styles from './RecordDeleteConfirmPopup_styles'
import { Modal, Pressable, TouchableWithoutFeedback } from 'react-native'
import { View, Text } from 'react-native'
import colors from '../../colors'

const RecordDeleteConfirmPopup=memo(({onClose, onPressDelete})=>{

    return(
        <Modal
            animationType='fade'
            transparent
            onRequestClose={onClose}
        >
            <TouchableWithoutFeedback onPress={onClose}>
            <View style={styles.overlay}>
                <TouchableWithoutFeedback onPress={()=>{}}>
                    <View style={styles.modalInnerContainer}>
                        <Text style={styles.confirmText}>Are you sure you want to delete this refuelling record?</Text>
                        <View style={styles.btnflexcontainer}>
                            <Pressable style={[styles.cancelBtn]} onPress={onClose}>
                                <Text style={[styles.btnText]}>No</Text>
                            </Pressable>
                            <View style={{marginLeft:10}}/>
                            <Pressable onPress={onPressDelete} style={[styles.cancelBtn, {backgroundColor:colors.greenBtnColor}]}>
                                <Text style={[styles.btnText, {color:"white"}]}>Yes</Text>
                            </Pressable>
                        </View>
                    </View>
                </TouchableWithoutFeedback>
            </View>
            </TouchableWithoutFeedback>
        </Modal>
    )
})

export default RecordDeleteConfirmPopup