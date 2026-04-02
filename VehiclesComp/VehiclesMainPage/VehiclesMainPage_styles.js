import { StyleSheet } from "react-native";
import { normalize } from "../../helperfunctions";
import colors from "../../colors";

export default StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    background: {
        position: 'absolute',
        left: 0,
        right: 0,
        top: 0,
        height: "100%",
    },
    contentcontainer: {
        flex: 1,
        marginHorizontal: 15,
        width: "100%"
    },
    subTitle: {
        color: colors.greenBtnColor,
        fontSize: normalize(13),
        marginTop: 10,
        textAlign: "center"
    },
    descText: {
        color: colors.greenBtnColor,
        fontSize: normalize(13),
        marginTop: 15,
        textAlign: "center",
        lineHeight: 20,
        fontFamily: "inter_reg"
    },
    addvehicleBtn: {
        backgroundColor: colors.greenBtnColor,
        height: 40,
        minHeight: 40,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 10,
        marginTop: 15,
        alignSelf: "center",
        paddingHorizontal: 15,
        flexDirection: "row"
    },
    addVehicleText: {
        color: "white",
        fontSize: normalize(14),
        marginRight: 10,
        fontFamily: "inter_medium"
    },
    innercontainer: {
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flex: 0.9
    },
    mainTitle: {
        color: colors.greenBtnColor,
        fontSize: normalize(17),
        textAlign: "center",
        marginTop: 15,
        fontFamily: "inter_semibold"
    },
    mainTitleDiv: {
        width: "100%",
        paddingBottom: 15,
        borderBottomColor: colors.greenBtnColor,
        borderBottomStyle: "solid",
        borderBottomWidth: 0.8,
        display: "flex",
        alignItems: "center",
    },
    vehicleName: {
        color: colors.greenBtnColor,
        fontSize: normalize(12)
    },
    vehicleType: {
        color: colors.greenBtnColor,
        fontSize: normalize(12)
    },
    vehicleEngineCC: {
        color: colors.greenBtnColor,
        fontSize: normalize(12)
    },
    bottomflexcontainer: {
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        flexDirection: "row"
    },
    addRecordBtn: {
        height: 50,
        minHeight: 50,
        width: 50,
        minWidth: 50,
        borderRadius: 50,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: colors.greenBtnColor,
        position: "absolute",
        bottom: 10,
        right: 10
    }
})