import React, { Component } from 'react';
import { View, StyleSheet, Image, TextInput, Text, TouchableHighlight } from 'react-native';
import {realm }  from "../../database/database";

class editpass extends Component {
    constructor({route,props}) {
        super(props);
        this.state={
            phone:route.params.phone,
            name:'',
            pass:'',
            newpass:'',
            confirmnewpass:'',
            data: [],

            errorname:'',
            errorpass:'',
            errornewpass:'',
            errorconfirmnewpass:'',
            

        }

        realm.then((realm) => {
           
            const data = realm.objects("accountlogin").filtered(' phone = "' + this.state.phone + '"');
            this._setstate( 1,data[0].name);
            this._setstate( 5,data);
            console.log(this.state.data)
            console.log(this.state.name)
            

        })

    }
    
    _setstate(type,user){
      
        if(type==1){
            this.setState({name:user})

        }
        
        else  if(type==2){
            this.setState({ pass:user})
        }
        else  if(type==3){
            this.setState({
                newpass:user})
        }
        else  if(type==4){
            this.setState({
                confirmnewpass:user})
        }
        else  if(type==5){
            this.setState({
                data:user})
        }
        

    }
    _seterrorstate(user,type){
        
          if(type==5){
            this.setState({
                errorname:user})
        }
        else  if(type==6){
            this.setState({
                errorpass:user})
        }
        else  if(type==7){
            this.setState({
                errornewpass:user})
        }
        else  if(type==8){
            this.setState({
                errorconfirmnewpass:user})
        }

    }
    _ressetstate(){
        this._seterrorstate('',5)
        this._seterrorstate('',6)
        this._seterrorstate('',7)
        this._seterrorstate('',8)
    }
    _chcekupdate(){
        if(this.state.name.length<=0){
            this._ressetstate();
            this._seterrorstate('Vui lòng nhập tên',5)
        }
        else {
            this._ressetstate();
            if(this.state.pass.length<=0 && this.state.newpass.length<=0 && this.state.confirmnewpass.length<=0 ){
            //    up date ten
           
            realm.then((realm) => {
                const  data = realm.objects("accountlogin").filtered(' phone = "' + this.state.phone + '"');
               
                realm.write(() => {
                   
                   data.update('name',this.state.name)
                  });
              
             
    
            })
            
            
            

            }
            else {
                
                if(this.state.pass.length<=0){
                    
                    this._seterrorstate('Vui lòng mật khẩu cũ',6)
                }
                else if(this.state.newpass.length<=0){
                    
                    this._seterrorstate('Vui lòng mật khẩu mới',7)
                }
                else if(this.state.confirmnewpass.length<=0){
                    
                    this._seterrorstate('Vui lòng xác nhận  mật khẩu mới',8)
                }
                else if(this.state.confirmnewpass != this.state.newpass){
                    
                    this._seterrorstate('Xác nhận mật khẩu không đúng',8)
                }
                else {
                    if(this.state.pass!=this.state.data[0].password){
                        this._seterrorstate('Mật khẩu cũ không đúng',6)
                    }
                    else {

                        
                        realm.then((realm) => {
                            const  data = realm.objects("accountlogin").filtered(' phone = "' + this.state.phone + '"');
                            realm.write(() => {
                               
                               data.update('password',this.state.newpass)
                              });
                              this.props.navigation.navigate('LOGIN')
                          console.log(realm.objects("accountlogin"))
                         
                
                        })
                    }
                    
                   // update accpunt
                }
                

            }
        }
        


    }
    render() {
        return (
            <View style={style.viewhome}>
                <View viewimage>
                    
                    <Text>Name</Text>
                    <TextInput style={style.textinput} onChangeText={this._setstate.bind(this,1)} value={this.state.name}></TextInput>
                    <Text style={style.texterror} >{this.state.errorname}</Text>

                </View>
                <View viewedit>
                    <Text>Password</Text>
                    <TextInput style={style.textinput} onChangeText={this._setstate.bind(this,2)} ></TextInput><Text style={style.texterror} >{this.state.errorpass}</Text>
                    
                    <Text>New Password</Text>
                    <TextInput style={style.textinput} onChangeText={this._setstate.bind(this,3)}></TextInput><Text style={style.texterror} >{this.state.errornewpass}</Text>

                    <Text>Confirm New Password</Text>
                    <TextInput style={style.textinput} onChangeText={this._setstate.bind(this,4)}></TextInput><Text style={style.texterror} >{this.state.errorconfirmnewpass}</Text>

                    <Text style={style.textupdate} onPress={this._chcekupdate.bind(this)}>Update</Text>

                </View>
            </View>
        );
    }
}


const style = StyleSheet.create({
    viewhome: {
        margin:20

    },
    viewimage: {

    },
    viewedit: {

    },
    textinput:{
        backgroundColor:"rgba(0,0,0,0.5)",
        marginTop:10,
        borderRadius:4,
        color:"white",
        width:330,
    },
    textupdate:{
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
    texterror:{
        fontStyle:"italic",
        alignSelf:"flex-start",
        fontSize:20,
        color:"red"

    },




})


export default editpass;