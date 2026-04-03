import { Dimensions, StyleSheet } from "react-native";
import { normalize } from "../helperfunctions";
import colors from "../colors";

const SCREEN_HEIGHT = Dimensions.get("window").height

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
    headerOfHome: {
        display: "flex",
        alignItems: "center",
        flexDirection: "row",
        justifyContent: "center",
        marginTop: 15,
    },
    userAbsDiv: {
        position: "absolute",
        top: 20,
        left: 15,
        width: "100%",
    },
    contentContainer: {
        flex: 1,
        marginHorizontal: 15,
        width: "100%"
    },
    title: {
        color: colors.red_3,
        textAlign: "center",
        fontSize: normalize(19),
        marginTop: 15,
        fontFamily: "inter_semibold"
    },
    subTitle: {
        color: colors.greenBtnColor,
        fontSize: normalize(15),
        marginTop: 10,
        textAlign: "center",
        fontFamily: "inter_medium",
        lineHeight: 23,
        marginHorizontal:15
    },
    subtitleWithVehicle: {
        color: colors.greenBtnColor,
        fontSize: normalize(15),
        marginTop: 10,
        textAlign: "center",
        fontFamily: "inter_medium",
        lineHeight: 22,
    },
    descText: {
        color: colors.greenBtnColor,
        fontSize: normalize(13),
        marginTop: 15,
        textAlign: "center",
        lineHeight: 20,
        fontFamily: "inter_medium",
        marginHorizontal: 15
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
    vertGap: {
        marginTop: "35%"
    },
    innercontainer: {
        display: "flex",
        alignItems: "center",
        justifyContent: "center"
    },
    vehicleWithItemsDiv: {
        display: "flex",
        alignItems: "center",
        marginHorizontal: 15
    },
    vehicleText: {
        color: colors.greenBtnColor,
        fontFamily: "inter_medium",
        fontSize: normalize(14),
        marginRight: 10
    },
    vehicleItemdiv: {
        display: "flex",
        alignItems: "center",
        backgroundColor: "white",
        paddingHorizontal: 10,
        borderRadius: 7,
        height: 40,
        minHeight: 40,
        marginTop: 15,
        flexDirection: "row",
        marginRight: 10,
        padding: 10
    },
    avatarOuter: {
        width: "100%",
        minWidth: "100%",
        borderRadius: 9,
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
        elevation: 3,
        backgroundColor: "white",
        marginTop: 20,
        padding: 8,
        overflow: "hidden"
    },
    avatarStyle: {
        height: 160,
        minHeight: 160,
        width: "100%",
        minWidth: "100%",
        borderRadius: 6
    },
    addRefuellingText: {
        color: colors.greenBtnColor,
        fontSize: normalize(14),
        marginTop: 10,
        textAlign: "center",
        fontFamily: "inter_medium",
        lineHeight: 22,
    },
    contentOfRefuellingdata: {
        width: "100%",
        display: "flex",
        flexDirection: "column",
    },
    subHeaderdiv: {
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        marginTop: 35,
    },
    subHeaderText: {
        color: colors.greenBtnColor,
        fontFamily: "inter_semibold",
        fontSize: normalize(14),
    },
    seeallText: {
        color: colors.red_3,
        fontFamily: "inter_semibold",
        fontSize: normalize(13),
        marginRight: 8
    },
    subHeaderInnerflex: {
        display: "flex",
        flexDirection: "row",
        alignItems: "center"
    },
    contentOfRefulleingHist: {
        backgroundColor: colors.lightWhitish,
        padding:15,
        marginTop:10,
        borderRadius:10
    },
    //refuelling data item-----------------------------------------------
    recordItem: {
        display: "flex",
        alignItems: "center",
        paddingRight: 14,
        paddingLeft: 10,
        paddingVertical: 12,
        borderRadius: 6,
        backgroundColor: "white",
        flexDirection: "row",
        justifyContent: "space-between",
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
        elevation: 3,
    },
    recordInnerflex: {
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
    },
    dateTextOfRecord: {
        color: colors.greenBtnColor,
        fontFamily: "inter_medium",
        fontSize: normalize(13)
    },
    fuelText: {
        color: colors.greenBtnColor,
        fontFamily: "inter_reg",
        fontSize: normalize(11),
        marginTop: 5
    },
    priceText: {
        color: colors.greenBtnColor,
        fontFamily: "inter_medium",
        fontSize: normalize(13),
        marginTop: 5
    },
    //fuel insight--------------------------------------
    fuelInsightsFlex:{
        display:"flex",
        flexDirection:"row",
        alignItems:"center",
        width:"100%",
        backgroundColor: colors.lightWhitish,
        padding:12,
        marginTop:10,
        borderRadius:10
    },
    fuelBox:{
        width:"46%",
        minWidth:"46%",
        height:120,
        minHeight:120,
        backgroundColor:"white",
        justifyContent:"space-between",
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
        elevation: 3,
        borderRadius:6,
        padding:12,
        flexDirection:"column"
    },
    fuelTitle:{
        color:colors.greenBtnColor,
        fontFamily:"inter_medium",
        fontSize:normalize(15),
        lineHeight:22
    },
    fuelConsumpValue:{
        color:colors.greenBtnColor,
        fontFamily:"inter_medium",
        fontSize:normalize(15),
        lineHeight:22,
    }
})