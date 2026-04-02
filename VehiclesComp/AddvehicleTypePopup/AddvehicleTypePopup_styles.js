import { StyleSheet } from "react-native";
import colors from "../../colors";
import { normalize } from "../../helperfunctions";

export default StyleSheet.create({
    container:{
        position:"absolute",
        top:120,
        right:0,
        width:180,
        minWidth:180,
        backgroundColor:"white",
        zIndex:99,
        borderRadius:4,
        overflow:"hidden"
    },
    addVehicleItem:{
        height:40,
        minHeight:40,
        display:"flex",
        alignItems:"center",
        paddingHorizontal:12,
        flexDirection:"row"
    },
    addVehicleText:{
        color:colors.greenBtnColor,
        fontSize:normalize(13),
        fontFamily:"inter_medium"
    }
})