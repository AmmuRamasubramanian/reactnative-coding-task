import { StyleSheet } from "react-native";
import colors from "../../colors";
import { normalize } from "../../helperfunctions";

export default StyleSheet.create({
    overlay:{
        backgroundColor:"rgba(0, 0, 0, 0.5)",
        flex:1,
        display:"flex",
        alignItems:"center",
        justifyContent:"center"
    },
    modalInnerContainer:{
        width:"80%",
        backgroundColor:"white",
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
        elevation: 3,
        paddingHorizontal:15,
        paddingVertical:15,
        borderRadius:10
    },
    confirmText:{
        color:colors.greenBtnColor,
        fontFamily:"inter_medium",
        fontSize:normalize(13),
        lineHeight:21
    },
    btnflexcontainer:{
        display:"flex",
        flexDirection:"row",
        alignItems:"center",
        marginTop:12
    },
    cancelBtn:{
        height:45,
        minHeight:45,
        display:"flex",
        alignItems:"center",
        justifyContent:"center",
        width:"48.5%",
        minWidth:"48.5%",
        borderWidth:0.8,
        borderColor:colors.greenBtnColor,
        borderStyle:"solid",
        borderRadius:8
    },
    btnText:{
        color:colors.greenBtnColor,
        fontFamily:"inter_medium",
        fontSize:normalize(13.5)
    }
})