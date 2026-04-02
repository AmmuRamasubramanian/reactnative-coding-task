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
        marginHorizontal: 15
    },
    subTitle: {
        color: "#0B3C58",
        fontSize: normalize(13),
        marginTop: 10,
        textAlign: "center"
    },
    descText: {
        color: "#0B3C58",
        fontSize: normalize(13),
        marginTop: 15,
        textAlign: "center",
        lineHeight: 20
    },
    addvehicleBtn: {
        backgroundColor: "#0B3C58",
        height: 40,
        minHeight: 40,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 10,
        marginTop: 15,
        alignSelf: "center",
        paddingHorizontal: 15
    },
    addVehicleText: {
        color: "white",
        fontSize: normalize(14),
    },
    innercontainer: {
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flex:1
    },
    mainTitle:{
        color:colors.greenBtnColor,
        fontSize:normalize(17),
        textAlign:"center",
        marginTop:15
    },
    vehicleName:{
        color:colors.greenBtnColor,
        fontSize:normalize(12)
    },
    vehicleType:{
        color:colors.greenBtnColor,
        fontSize:normalize(12)
    },
    vehicleEngineCC:{
         color:colors.greenBtnColor,
        fontSize:normalize(12)
    },
    bottomflexcontainer:{
        display:"flex",
        alignItems:"center",
        justifyContent:"space-between",
        flexDirection:"row"
    }
})