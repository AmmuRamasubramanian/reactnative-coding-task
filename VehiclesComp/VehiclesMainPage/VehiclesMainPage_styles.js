import { Dimensions, StyleSheet } from "react-native";
import { normalize } from "../../helperfunctions";
import colors from "../../colors";

const SCREEN_HEIGHT=Dimensions.get("window").height

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
        height: SCREEN_HEIGHT,
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
        fontFamily: "inter_medium"
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
        flex: 0.9,
        marginHorizontal: 15
    },
    mainTitle: {
        color: colors.greenBtnColor,
        fontSize: normalize(17),
        textAlign: "center",
        fontFamily: "inter_semibold"
    },
    mainTitleDiv: {
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        borderBottomWidth: 0.8,
        borderBottomStyle: "solid",
        borderBottomColor: colors.greenBtnColor,
        width: "100%",
        paddingBottom: 10,
        marginTop: 15
    },
    vehicleItem:{
        backgroundColor: "white",
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
        elevation: 3,
        borderRadius:7,
        overflow:"hidden"
    },
    vehicleName: {
        color: colors.greenBtnColor,
        fontSize: normalize(13.5),
        fontFamily:"inter_semibold"
    },
    vehicleType: {
        color: colors.greenBtnColor,
        fontSize: normalize(11.5),
        fontFamily:"inter_reg",
        marginTop:5
    },
    vehicleEngineCC: {
        color: colors.greenBtnColor,
        fontSize: normalize(13.5),
        fontFamily:"inter_semibold"
    },
    vehicleAvatarStyle:{
        width:"100%",
        height:170,
        minHeight:170,
        objectFit:"cover"
    },
    bottomflexcontainer: {
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        flexDirection: "row",
        paddingHorizontal:14,
        paddingVertical:10
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