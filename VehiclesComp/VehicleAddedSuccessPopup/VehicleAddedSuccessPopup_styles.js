import { StyleSheet } from "react-native";
import colors from "../../colors";
import { normalize } from "../../helperfunctions";

export default StyleSheet.create({
    overlay:{
        flex: 1,
    },
    background: {
        position: 'absolute',
        left: 0,
        right: 0,
        top: 0,
        height: "100%",
    },
    innercontentcontainer:{
        flex:1,
        marginTop:"36%",
        display:"flex",
        alignItems:"center",
        flexDirection:"column",
        marginHorizontal:15
    },
    confetti:{
        height:260,
        minHeight:260,
        width:260,
        minWidth:260,
        position:"absolute",
        top:-70
    },
    avatarImg:{
        height:130,
        minHeight:130,
        width:130,
        minWidth:130,
        borderRadius:150
    },
    vehicleName:{
        color:colors.greenBtnColor,
        fontFamily:"inter_medium",
        fontSize:normalize(22),
        marginTop:50
    },
    vehicleAddedText:{
        color:colors.greenBtnColor,
        fontFamily:"inter_medium",
        fontSize:normalize(29),
        marginTop:20
    },
    onboardingscreen:{
        width:"100%",
        minWidth:"100%",
        height:200,
        minHeight:200,
        position:"absolute",
        bottom:0
    }
})