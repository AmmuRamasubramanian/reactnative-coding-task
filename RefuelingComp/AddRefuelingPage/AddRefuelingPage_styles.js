import { StyleSheet } from "react-native";
import colors from "../../colors";
import { normalize } from "../../helperfunctions";

export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.lightWhitish
    },
    topHeaderStyle: {
        position: "absolute",
        top: 0,
        width: "100%",
        height: 120
    },
    arrowLeftIcon: {
        position: "absolute",
        top: 0,
        left: 0
    },
    title: {
        color: colors.greenBtnColor,
        fontSize: normalize(19),
        textAlign: "center",
        fontFamily: "inter_medium",
        marginTop: 40,
    },
    inputBox: {
        height: 50,
        minHeight: 50,
        display: "flex",
        alignItems: "center",
        flexDirection: "row",
        paddingHorizontal: 12,
        borderRadius: 8,
        backgroundColor: "white",
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
        elevation: 3,
    },
    inputText: {
        color: colors.greenBtnColor,
        fontSize: normalize(13),
        fontFamily: "inter_medium",
        flex: 1
    },
    contentcontainer: {
        marginHorizontal: 15,
        flex: 1
    },
    inputGap: {
        marginTop: 20
    },
    vehicleName: {
        color: colors.greenBtnColor,
        fontSize: normalize(12),
        fontFamily: "inter_medium",
        flex:1
    },
    inputTitle: {
        color: colors.greenBtnColor,
        fontSize: normalize(12),
        fontFamily: "inter_medium"
    },
    flexcontainerOfBtns: {
        display: "flex",
        alignItems: "center",
        flexDirection: "row",
        marginTop: 10
    },
    btnflexcontainer: {
        flexDirection: "row",
        display: "flex",
        alignItems: "center",
        marginBottom: 10,
        marginHorizontal: 15
    },
    cancelBtn: {
        width: "48%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 8,
        borderWidth: 0.8,
        borderColor: colors.greenBtnColor,
        borderStyle: "solid",
        height: 45,
        minHeight: 45
    },
    addBtn: {
        width: "48%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 8,
        backgroundColor: colors.greenBtnColor,
        height: 45,
        minHeight: 45
    },
    btnText: {
        color: colors.greenBtnColor,
        fontSize: normalize(13),
        fontFamily: "inter_medium"
    },
    //sheet popup--------------------------------------------------------
    contentContainerOfBackdrop: {
        flex: 1
    },
    vehiclelistDiv: {
        marginBottom: 30,
        marginHorizontal: 15,
        marginTop: 10
    },
    vehiclelistTitle: {
        color: colors.greenBtnColor,
        fontFamily: "inter_semibold",
        textAlign: "center",
        fontSize: normalize(16),
        marginBottom: 10
    },
    vehicleItemInPopup: {
        height: 40,
        minHeight: 40,
        display: "flex",
        alignItems: "center",
        flexDirection: "row",
        paddingHorizontal: 12,
        borderRadius: 8,
        backgroundColor: "#D9F0F1"
    },
    vehicleNameInPopup: {
        color: colors.greenBtnColor,
        fontSize: normalize(12),
        fontFamily: "inter_medium"
    }
})