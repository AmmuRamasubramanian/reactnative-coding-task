import { StyleSheet } from "react-native";
import { normalize } from "../../helperfunctions";
import colors from "../../colors";

export default StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:"#F0F2F2"
    },
    background: {
        position: 'absolute',
        left: 0,
        right: 0,
        top: 0,
        height: "100%",
    },
    contentContainer:{
        flex:1,
        marginHorizontal:15
    },
    inputBox:{
        height:50,
        minHeight:50,
        display:"flex",
        alignItems:"center",
        flexDirection:"row",
        paddingHorizontal:12,
        borderRadius:8,
        borderWidth:0.8,
        borderColor:"#0B3C58",
        borderStyle:"solid",
        backgroundColor:"white"
    },
    inputText:{
        color:colors.greenBtnColor,
        fontSize:normalize(12),
        fontFamily:"inter_medium",
        flex:1
    },
    inputGap:{
        marginTop:15
    },
    btnflexcontainer:{
        flexDirection:"row",
        display:"flex",
        alignItems:"center",
        marginBottom:10
    },
    cancelBtn:{
        width:"48%",
        display:"flex",
        alignItems:"center",
        justifyContent:"center",
        borderRadius:8,
        borderWidth:0.8,
        borderColor:"black",
        borderStyle:"solid",
        height:45,
        minHeight:45
    },
    addBtn:{
         width:"48%",
        display:"flex",
        alignItems:"center",
        justifyContent:"center",
        borderRadius:8,
        borderWidth:0.8,
        backgroundColor:colors.greenBtnColor,
        borderStyle:"solid",
        height:45,
        minHeight:45
    },
    btnText:{
        color:"black",
        fontSize:normalize(13),
        fontFamily:"inter_medium"
    },
    title:{
        color:colors.greenBtnColor,
        fontSize:normalize(17),
        textAlign:"center",
        fontFamily:"inter_medium",
        marginTop:15
    }
})