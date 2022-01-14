import React, { Component } from "react";
import {
    View, Text, Image,
    ImageBackground, TextInput,
    TouchableHighlight, Platform, ActivityIndicator
} from "react-native";
import stylelogin from "../style/style";
import notifi from 'notification-react-native';

import { addaccount  } from "../../database/database";





export default class login extends Component {
    constructor({route,props}) {
        
       const { name, username,pass,number } = route.params;
       console.log(route.params.number)
        super(props);
        background = require("../../../src/img/imglogin.png");

        iconfb = require("../../../src/img/fb.jpg");
        icontwiter = require("../../../src/img/tw.png");
        icongoogle = require("../../../src/img/gg.png");

        this.state = {
            name:name,
            username:username,
            pass:pass,
            number:number,
            confirmnumber: "",
            errornumber:"",
            hidedisplay:"none"


        };
    }
    
    _setconfirmnumber(user) {
        this.setState({ confirmnumber: user });
    }
    _seterrornumber(user) {
        this.setState({ errornumber: user });
    }



    _checkregister() {
        

       if(this.state.number !=this.state.confirmnumber){
         
        this._seterrornumber('Mã xác nhận không đúng');
       }
       else{

        addaccount(this.state.username,this.state.name,this.state.pass)
        this.props.navigation.navigate("LOGIN");
       }

    }
    render() {
        return (
            <ImageBackground source={background} style={stylelogin.container}>


                <View style={{ zIndex: 1, justifyContent: "center", position: "absolute", backgroundColor: "rgba(0,0,0,0.5)", width: 1000, height: 1000, display: this.state.hidedisplay }} >
                    <ActivityIndicator animating={true} size={70} />
                </View>
                <View style={stylelogin.containerlogin}>

                    <View style={stylelogin.containerregit}>
                        <View style={stylelogin.containerinput}>
                            
                            <TextInput onChangeText={this._setconfirmnumber.bind(this)} placeholder={"Number"} placeholderTextColor={"white"} style={stylelogin.textinput} ></TextInput>
                            <Text style={stylelogin.texterror} >{this.state.errornumber}</Text>

                            <Text onPress={this._checkregister.bind(this)} style={stylelogin.textlogin}>confirm</Text>

                        </View>


                    </View>
                </View>
            </ImageBackground>
        );
    }
}
