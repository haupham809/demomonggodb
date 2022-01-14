import React, { Component } from 'react';
import { View, StyleSheet,FlatList, Image, TextInput, Text } from 'react-native';
import { contactmodel, addcontactmodel, messagemodel, accountmodel }  from "../../database/model";
import {realm ,createaddcontact }  from "../../database/database";
//xong

class search extends Component {
    constructor({route,props}) {
        super(props);
        // this.props.navigation.setOptions({
        //     headerRight:({forcused})=>(
        //         <View style={StyleSheet.create({alignItems:'center',justifyContent:'center',marginRight:40})}>
        //       <TextInput style={style.inputsearch}></TextInput>
        //         </View>

        //     ), tabBarLabel:,}

        //     )
    
        console.log(route.params.phone)
        this.state = {
            keysearch: '',
            data: [],
            phone:route.params.phone

        };

    }
    setkeysearch(user) {
        this.setState({
            keysearch: user
        })
       
        
        this._getdata(this);
    }
    setdata(user) {
        this.setState({
            data: user
        })
        
       
    }


    _getdata() {

        
      
        realm.then((realm) => {
            console.log(this.state.keysearch)
            
            if( (realm.objects("addcontact").filtered(' (status = "true" or status = "false" ) and  mycontact = "' + this.state.keysearch + '" and yourcontact = "'+ this.state.phone + '"').length!=0 ) && (realm.objects("addcontact").filtered(' (status = "true" or status = "false" ) and  mycontact = "' + this.state.phone + '" and yourcontact = "'+ this.state.keysearch + '"').length!=0 )  ){
                const data = realm.objects("accountlogin").filtered(' phone = "' + this.state.keysearch + '"');
         
                console.log('helooooo')
                if(this.state.keysearch!=this.state.phone){
                 console.log((realm.objects("addcontact").filtered(' (status = "true" or status = "false" ) and  mycontact = "' + this.state.keysearch + '" and yourcontact = "'+ this.state.phone + '"').length!=0 ))
                 this.setdata(data); 
                }
            }
            else {
                this.setdata([])
            }
            
            
            




        })
       



    }
    _addcontact(use){
        console.log(this.state.phone)
        console.log(use)
        createaddcontact(this.state.phone,use);
        this._getdata();
    }



    render() {
        return (
            <View style={style.viewhome}>


                <View style={style.viewsearch}>
                    <TextInput style={style.inputsearch}  keyboardType="numeric" placeholder='phone number' onChangeText={this.setkeysearch.bind(this)}></TextInput>
                   
                </View>
                <View style={style.viewdata} >
                <FlatList data={this.state.data} renderItem={({ item }) => (
                    <View style={style.viewlist} >
                        <Image source={require("../../../src/img/icons8-man-blond-hair-48.png")} style={style.imagelist} ></Image>
                        <View style={style.viewinfor}>
                            <Text style={style.textname} >{item.name}</Text>
                            <Text style={style.textname} >{item.phone}</Text></View>
                            <View  style={style.Viewaddcontact} onStartShouldSetResponder={this._addcontact.bind(this,item.phone)}>
                                <Text>V</Text>
                                
                            </View>
                    </View>
                )

                }></FlatList>

                </View>



            </View>

        );
    }
}
const style = StyleSheet.create({

    viewhome: {

    },
    viewdata: {

    },
    viewsearch: {

        flexDirection: 'row',
        alignItems: 'center', justifyContent: 'center',
        marginLeft: 10,
        marginRight: 10

    },
    inputsearch: {
        flex: 8,
        backgroundColor: "rgba(0,0,0,0.2)",
        marginTop: 10,
        borderRadius: 4,
        color: "black",

    },
    buttonsearch: {
        resizeMode: 'contain',
        flex: 2, width: 50,
        height: 50

    },
    viewlist: {
        
        margin:4,
        flex: 1,
        flexDirection: 'row',

        backgroundColor:"rgba(0,0,0,0.1)",
        borderRadius: 10
    },
    imagelist: {
        flex: 2,
        width: 40,
        height: 40,
        borderRadius: 200,
        resizeMode:'contain'

    },
    viewinfor: {
        marginLeft:10,
        flex: 7,
    },
     Viewaddcontact:{
        alignItems: 'center', justifyContent: 'center',
        backgroundColor:"rgba(0,0,0,0.5)",
        flex: 1
    }

})
export default search;