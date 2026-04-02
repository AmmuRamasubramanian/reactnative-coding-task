import { StyleSheet } from "react-native";
import colors from "../../colors";
import { normalize } from "../../helperfunctions";

export default StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:colors.lightWhitish
    },
    contentContainer:{
        flex:1,
        marginHorizontal:15
    },
    editBtnDiv:{
        height:50,
        minHeight:50,
        display:"flex",
        alignItems:"center",
        justifyContent:"center",
        borderWidth:0.8,
        borderStyle:"solid",
        borderColor:colors.greenBtnColor,
        borderRadius:7,
        marginHorizontal:10
    },
    editBtnText:{
        color:colors.greenBtnColor,
        fontFamily:"inter_medium",
        fontSize:normalize(14)
    },
    detailsBox:{
        backgroundColor:"white",
        borderRadius: 8,
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
        elevation: 3,
        padding:14
    },
    detailItemDiv:{
        display:"flex",
        alignItems:"center",
        flexDirection:"row",
        justifyContent:"space-between"
    },
    detailsText:{
        color:colors.greenBtnColor,
        fontFamily:"inter_medium",
        fontSize:normalize(13)
    },
    detailGap:{
        marginTop:14
    }
})