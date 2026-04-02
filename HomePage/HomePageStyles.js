import { StyleSheet } from "react-native";
import { normalize } from "../helperfunctions";

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
    contentContainer:{
        flex:1,
        marginHorizontal:15
    },
    title:{
        color:"red",
        textAlign:"center",
        fontSize:normalize(19),
        marginTop:10
    },
    subTitle:{
        color:"#0B3C58",
        fontSize:normalize(13),
        marginTop:10,
        textAlign:"center"
    },
    descText:{
        color:"#0B3C58",
        fontSize:normalize(13),
        marginTop:15,
        textAlign:"center",
        lineHeight:20
    },
    addvehicleBtn:{
        backgroundColor:"#0B3C58",
        height:40,
        minHeight:40,
        display:"flex",
        alignItems:"center",
        justifyContent:"center",
        borderRadius:10,
        marginTop:15,
        alignSelf:"center",
        paddingHorizontal:15
    },
    addVehicleText:{
        color:"white",
        fontSize:normalize(14),
    },
    vertGap:{
        marginTop:"35%"
    },
    innercontainer:{
        display:"flex",
        alignItems:"center",
        justifyContent:"center"
    }
})