import { StyleSheet } from "react-native";
import colors from "../../colors";
import { normalize } from "../../helperfunctions";

export default StyleSheet.create({
    container: {
        marginHorizontal: 15
    },
    title: {
        color: colors.greenBtnColor,
        fontFamily: "inter_semibold",
        fontSize: normalize(17),
        textAlign: "center"
    },
    vehicleItem:{
        height:45,
        minHeight:45,
        display:"flex",
        alignItems:"center",
        paddingHorizontal:14,
        borderRadius:6,
        backgroundColor:"white",
        flexDirection:"row",
        justifyContent:"space-between",
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
        elevation: 3,
    },
    vehicleNameInPopup: {
        color: colors.greenBtnColor,
        fontSize: normalize(13),
        fontFamily: "inter_medium"
    }
})