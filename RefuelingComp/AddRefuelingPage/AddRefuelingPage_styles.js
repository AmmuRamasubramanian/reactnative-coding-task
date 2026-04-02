import { StyleSheet } from "react-native";
import colors from "../../colors";
import { normalize } from "../../helperfunctions";

export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#F0F2F2"
    },
    title: {
        color: colors.greenBtnColor,
        fontSize: normalize(17),
        textAlign: "center",
        marginTop:15
    },
    inputBox: {
        height: 50,
        minHeight: 50,
        display: "flex",
        alignItems: "center",
        flexDirection: "row",
        paddingHorizontal: 12,
        borderRadius: 8,
        borderWidth: 0.8,
        borderColor:colors.greenBtnColor,
        borderStyle: "solid",
        backgroundColor: "white",
    },
    inputText: {
        color: "black",
        fontSize: normalize(12),
    },
    contentcontainer:{
        marginHorizontal:15
    },
    inputGap:{
        marginTop:15
    },
    vehicleName:{
        color:colors.greenBtnColor,
        fontSize:normalize(12),
    },
    inputTitle:{
        color:colors.greenBtnColor,
        fontSize:normalize(12),
    },
    flexcontainerOfBtns:{
        display:"flex",
        alignItems:"center",
        flexDirection:"row",
        marginTop:10
    }
})