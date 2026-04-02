import { StyleSheet } from "react-native";
import colors from "../../colors";
import { normalize } from "../../helperfunctions";

export default StyleSheet.create({
    container:{
        flex:1,
        marginHorizontal:15
    },
    title:{
        color:colors.greenBtnColor,
        fontFamily:"inter_medium",
        fontSize:normalize(17),
        textAlign:"center"
    }
})