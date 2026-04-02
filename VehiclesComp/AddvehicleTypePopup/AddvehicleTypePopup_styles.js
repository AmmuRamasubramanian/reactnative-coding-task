import { StyleSheet } from "react-native";
import colors from "../../colors";
import { normalize } from "../../helperfunctions";

export default StyleSheet.create({
    container:{
        position:"absolute",
        top:120,
        right:0,
        width:140,
        minWidth:140,
        backgroundColor:"white",
        borderWidth:0.8,
        borderColor:"black",
        borderStyle:"solid",
        zIndex:99,
        borderRadius:8,
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
        fontSize:normalize(13)
    }
})