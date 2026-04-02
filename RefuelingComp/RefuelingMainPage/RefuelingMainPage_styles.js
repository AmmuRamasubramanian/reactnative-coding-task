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
        flex: 1,
        marginHorizontal:15
    },
    nofuleingRecordText:{
         color: colors.greenBtnColor,
        fontSize: normalize(13),
        fontWeight:"bold",
        marginTop:10
    },
    descText: {
        color: colors.greenBtnColor,
        fontSize: normalize(13),
        marginTop: 15,
        textAlign: "center",
        lineHeight: 20
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
        paddingHorizontal: 15
    },
    addVehicleText: {
        color: "white",
        fontSize: normalize(14),
    },
    titleDiv:{
        display:"flex",
        alignItems:"center",
        justifyContent:"center",
        borderBottomWidth:0.8,
        borderBottomStyle:"solid",
        borderBottomColor:colors.greenBtnColor,
        width:"100%",
        paddingBottom:10,
        marginTop:15
    },
    title:{
        color:colors.greenBtnColor,
        fontSize:normalize(17),
        textAlign:"center"
    },
    addRecordBtn:{
        height:50,
        minHeight:50,
        width:50,
        minWidth:50,
        borderRadius:50,
        display:"flex",
        alignItems:"center",
        justifyContent:"center",
        backgroundColor:colors.greenBtnColor,
        position:"absolute",
        bottom:10,
        right:10
    }
})