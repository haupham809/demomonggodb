import {StyleSheet} from "react-native";
import { Colors } from "react-native/Libraries/NewAppScreen";


const stylelogin=StyleSheet.create({
    container:{
        flex:1,
        justifyContent:"center",
        alignItems:"center",
        width:null,
        height:null,
        resizeMode:"center",
        

    },
    containerlogin:{
        backgroundColor:"rgba(0,0,0,0.5)",
        flex:1,
        flexDirection:"row",
        justifyContent:"center",
        alignItems:"center",
        
    },
    containerlogo:{
        flex:1,
        resizeMode:"contain"

    },
    containerregit:{
       marginLeft:20,
        flex:2,
        flexDirection:"row",
        justifyContent:"center",
        alignItems:"center",
    },

    containerinput:{
        flex:2
    },
    textinput:{
        backgroundColor:"rgba(0,0,0,0.5)",
        marginTop:10,
        borderRadius:4,
        color:"white",
        width:330,
        
    },
    textlabel:{
        fontStyle:"italic",
        alignSelf:"flex-start",
        fontSize:20,
        color:"white"

    },
    texterror:{
        fontStyle:"italic",
        alignSelf:"flex-start",
        fontSize:20,
        color:"red"

    },
    textregit:{
        fontStyle:"italic",
        alignSelf:"center",
        borderRadius:5,
        paddingLeft:40,
        paddingRight:40,
        paddingBottom:5,
        paddingTop:5,
        backgroundColor:"white",
        color:"black",
        marginTop:8

    },
    textlogin:{
        fontStyle:"italic",
        alignSelf:"center",
        borderRadius:5,
        paddingLeft:40,
        paddingRight:40,
        paddingBottom:5,
        paddingTop:5,
        backgroundColor:"blue",
        color:"white",
        marginTop:8
        


    },
    row:{
        flexDirection:"row",
        flex:0,
        justifyContent:"center",
        alignItems:"center",
    },
    line:{
        height:2,flex:1,
        backgroundColor:"rgba(0,0,0,0.2)"
    },

    connet:{
        flex:1,
        flexDirection:"row",
        backgroundColor:"rgba(0,0,0,0)",

    },
    imageicon:{
        flex:1,
        backgroundColor:"rgba(0,0,0,0)",
        alignItems:"center",
        width:40,
        height:40,
        resizeMode:"contain",


    },
    
});
export default stylelogin;