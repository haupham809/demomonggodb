import React, { Component } from "react";
import {
    View, Text, Image,
    ImageBackground, TextInput,
    TouchableHighlight, Platform, ActivityIndicator
} from "react-native";
import stylelogin from "../style/style";
import notifi from 'notification-react-native';
import { realm } from "../../database/database";




export default class login extends Component {
    constructor(props) {
        super(props);
        background = require("../../../src/img/imglogin.png");

        iconfb = require("../../../src/img/fb.jpg");
        icontwiter = require("../../../src/img/tw.png");
        icongoogle = require("../../../src/img/gg.png");

        this.state = {
            name:'',
            username: "",
            pass: "",
            confirmpass: "",
            hidedisplay:"none",
            errorname:"",
            errornumber:"",
            errorpass:"",
            errorconfirmpass:"",


        };
    }
    _setname(user) {
        this.setState({ name: user });
    }
    _setphonenumber(user) {
        this.setState({ username: user });
    }
    _setpass(user) {
        this.setState({ pass: user });
    }
    _setconfirmpass(user) {
        this.setState({ confirmpass: user });
    }
    _seterrorname(user) {
        this.setState({ errorname: user });
    }
    _seterrornumber(user) {
        this.setState({ errornumber: user });
    }
    _seterrorpass(user) {
        this.setState({ errorpass: user });
    }
    _seterrorconfirmpass(user) {
        this.setState({ errorconfirmpass: user });
    }



    _checkregister() {

       // this.props.navigation.navigate("REGISTER")
       if(this.state.name.length==0 ){
        this._seterrorname('');
        this._seterrornumber('');
        this._seterrorpass('');
        this._seterrorconfirmpass('');
        this._seterrorname('Vui lòng nhập tên');

       }
       else if(this.state.username.length==0 ){
        this._seterrorname('');
        this._seterrornumber('');
        this._seterrorpass('');
        this._seterrorconfirmpass('');
        this._seterrornumber('Vui lòng nhập số điện thoại');

       }
       else if(this.state.pass.length==0){
        this._seterrorname('');
        this._seterrornumber('');
        this._seterrorpass('');
        this._seterrorconfirmpass('');
        this._seterrorpass('Vui lòng nhập mật khẩu');
       }
       else if(this.state.pass.length==0){
        this._seterrorname('');
        this._seterrornumber('');
        this._seterrorpass('');
        this._seterrorconfirmpass('');
        this._seterrorconfirmpass('Vui lòng nhập xác nhận mật khẩu');
       }
       else if(this.state.pass!== this.state.confirmpass){
        this._seterrorname('');
        this._seterrornumber('');
        this._seterrorpass('');
        this._seterrorconfirmpass('');
           this._seterrorconfirmpass('Nhập sai mật khẩu vui lòng nhập lại');
           
       }
       else {
        
        
        
        realm.then((realm) => {
          if(realm.objects("accountlogin").filtered(' phone = "'+this.state.username+'"').length<=0){
            this.props.navigation.navigate("CONFIRMNUMBERPHONE",{name:this.state.name,username:this.state.username,pass:this.state.pass,number:Math.floor(Math.random() * 1000000) + 1 })
          }
          else {
            this._seterrorname('');
            this._seterrornumber('');
            this._seterrorpass('');
            this._seterrorconfirmpass('');
            this._seterrornumber('Số điện thoại đã được đăng ký ');


          }
         
         
          
        })
        
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

                        <Text style={stylelogin.textlabel} >Name</Text>
                            <TextInput onChangeText={this._setname.bind(this)}  placeholder={"name"} placeholderTextColor={"white"} style={stylelogin.textinput}></TextInput>
                            <Text style={stylelogin.texterror} >{this.state.errorname}</Text>

                            <Text style={stylelogin.textlabel} >Phone number</Text>
                            <TextInput onChangeText={this._setphonenumber.bind(this)} keyboardType="numeric"  placeholder={"Phone number"} placeholderTextColor={"white"} style={stylelogin.textinput}></TextInput>
                            <Text style={stylelogin.texterror} >{this.state.errornumber}</Text>

                            <Text style={stylelogin.textlabel} >Password</Text>
                            <TextInput onChangeText={this._setpass.bind(this)} placeholder={"password"} placeholderTextColor={"white"} style={stylelogin.textinput} secureTextEntry={true}></TextInput>
                            <Text style={stylelogin.texterror} >{this.state.errorpass}</Text>

                            <Text style={stylelogin.textlabel} >Confirm Password</Text>
                            <TextInput onChangeText={this._setconfirmpass.bind(this)} placeholder={"Confirm Password"} placeholderTextColor={"white"} style={stylelogin.textinput} secureTextEntry={true}></TextInput>
                            <Text style={stylelogin.texterror} >{this.state.errorconfirmpass}</Text>

                            <Text onPress={this._checkregister.bind(this)} style={stylelogin.textlogin}>REGISTER</Text>

                        </View>


                    </View>
                </View>
            </ImageBackground>
        );
    }
}
