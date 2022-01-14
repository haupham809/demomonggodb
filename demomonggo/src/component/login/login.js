import React, { Component } from "react";
import {
    View, Text, Image,
    ImageBackground, TextInput,
    TouchableHighlight, Platform, ActivityIndicator
} from "react-native";
import stylelogin from "../style/style";
import notifi from 'notification-react-native';
import { realm } from "../../database/database";


//xong


export default class login extends Component {

    constructor(props) {
        super(props);
        background = require("../../../src/img/imglogin.png");

        iconfb = require("../../../src/img/fb.jpg");
        icontwiter = require("../../../src/img/tw.png");
        icongoogle = require("../../../src/img/gg.png");

        
        
        this.state = {
            username: "",
            pass: "",
            hidedisplay: "none",
            erroraccount: ""

        };
    }
    _setusername(user) {
        this.setState({ username: user });
    }
    _setpass(user) {
        this.setState({ pass: user });
    }
    _setdisplay(user) {
        this.setState({ hidedisplay: user });
    }
    _seterroraccount(user) {
        this.setState({ erroraccount: user });
    }

    _checkusernamepassword() {
        
          realm.then((realm) => {
          
           const data=realm.objects("accountlogin").filtered(' phone = "' + this.state.username +'"'   ).filtered(' password =  "'+this.state.pass+'"') ;
         
          if (this.state.username.length == 0 || this.state.pass.length == 0) {
            this._seterroraccount('Vui lòng nhập tài khoản mật khẩu')
        }
        else if (data.length>0) {

            this.props.navigation.navigate("HOME",{phone:this.state.username})
        }
        else {
            this._seterroraccount('tai khoản mật khảu không đúng')

            this._setdisplay("none");

        }
       
      
      })


       
        


    }
    _register() {

        this.props.navigation.navigate("REGISTER")

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
                            <Text style={stylelogin.textlabel} >Username</Text>
                            <TextInput onChangeText={this._setusername.bind(this)} placeholder={"username"} placeholderTextColor={"white"} style={stylelogin.textinput}></TextInput>
                            <Text style={stylelogin.textlabel} >Password</Text>
                            <TextInput onChangeText={this._setpass.bind(this)} placeholder={"password"} placeholderTextColor={"white"} style={stylelogin.textinput} secureTextEntry={true}></TextInput>
                            <Text style={stylelogin.texterror} >{this.state.erroraccount}</Text>
                            <Text onPress={this._checkusernamepassword.bind(this)} style={stylelogin.textlogin}>LOGIN</Text>
                            <Text style={stylelogin.textregit} onPress={this._register.bind(this)} >REGISTER</Text>
                        </View>


                    </View>
                </View>
            </ImageBackground>
        );
    }
}
