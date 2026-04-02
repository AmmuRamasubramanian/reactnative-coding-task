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
    innercontainer: {
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flex: 0.9,
        marginHorizontal: 15
    },
    nofuleingRecordText: {
        color: colors.greenBtnColor,
        fontSize: normalize(13),
        marginTop: 10,
        fontFamily: "inter_semibold"
    },
    descText: {
        color: "#9DB1BC",
        fontSize: normalize(13),
        marginTop: 15,
        textAlign: "center",
        lineHeight: 24,
        fontFamily: "inter_medium",
        marginHorizontal: 10
    },
    descTextForNovehicle: {
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
    titleDiv: {
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
    title: {
        color: colors.greenBtnColor,
        fontSize: normalize(17),
        textAlign: "center",
        fontFamily: "inter_semibold"
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
    },
    ///refueling list-------------------------------------
    selectedVehicleBox:{
        backgroundColor:"#C6E8E9",
        height:46,
        minHeight:46,
        display:"flex",
        alignItems:"center",
        justifyContent:"space-between",
        flexDirection:"row",
        paddingHorizontal:15,
        borderRadius:8,
        width:"80%",
        alignSelf:"center",
        marginTop:20,
        marginBottom:10
    },
    selectedVehicleText:{
        color:colors.greenBtnColor,
        fontFamily:"inter_medium",
        fontSize:normalize(15),
        textAlign:"center",
        marginRight:10,
        maxWidth:"90%"
    },
    rotatedIcon:{
        transform:[{rotate:"90deg"}]
    },
    contentContainerrecord:{
        flex:1,
        marginTop:10,
        marginHorizontal:15
    },
    recordItem:{
        display:"flex",
        alignItems:"center",
        paddingHorizontal:14,
        paddingVertical:8,  
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
    recordInnerflex:{
        display:"flex",
        flexDirection:"row",
        alignItems:"center",
    }
})