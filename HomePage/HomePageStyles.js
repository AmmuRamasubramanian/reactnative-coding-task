import { StyleSheet } from "react-native";
import { normalize } from "../helperfunctions";
import colors from "../colors";

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
    headerOfHome:{
        display:"flex",
        alignItems:"center",
        flexDirection:"row",
        justifyContent:"center",
        marginTop:15
    },
    userAbsDiv:{
        position:"absolute",
        top:10,
        left:0
    },
    contentContainer:{
        flex:1,
        marginHorizontal:15
    },
    title:{
        color:"#EB655F",
        textAlign:"center",
        fontSize:normalize(19),
        marginTop:15,
        fontFamily:"inter_semibold"
    },
    subTitle:{
        color:colors.greenBtnColor,
        fontSize:normalize(13),
        marginTop:10,
        textAlign:"center",
        fontFamily:"inter_medium",
        lineHeight:22
    },
    descText:{
        color:colors.greenBtnColor,
        fontSize:normalize(13),
        marginTop:15,
        textAlign:"center",
        lineHeight:20,
        fontFamily:"inter_reg"
    },
    addvehicleBtn:{
        backgroundColor:colors.greenBtnColor,
        height:40,
        minHeight:40,
        display:"flex",
        alignItems:"center",
        justifyContent:"center",
        borderRadius:10,
        marginTop:15,
        alignSelf:"center",
        paddingHorizontal:15,
        flexDirection:"row"
    },
    addVehicleText:{
        color:"white",
        fontSize:normalize(14),
        marginRight:10,
        fontFamily:"inter_medium"
    },
    vertGap:{
        marginTop:"40%"
    },
    innercontainer:{
        display:"flex",
        alignItems:"center",
        justifyContent:"center"
    }
})