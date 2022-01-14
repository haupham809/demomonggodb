import React, { Component } from 'react';
import { TextInput, View, StyleSheet ,FlatList,Image ,Text} from 'react-native';
import {realm ,createcontact}  from "../../database/database";

class addcontact extends Component {
    constructor({route,props}) {
        super(props);
        //createcontact('1','2')
        this.state = {
            dataaddfriend:[],
            datasendfriend:[],
            phone:route.params.phone,
        }

        this._getdata();
    }
    setdataaddfriend(user) {
        this.setState({
            dataaddfriend: user
        })
        
       
    }
    setdatasendfriend(user) {
        this.setState({
            datasendfriend: user
        })
        
       
    }

    _getdata() {

        
      
        realm.then((realm) => {
            
            var sdata=[]
            var gData=realm.objects("addcontact").filtered(' mycontact =  "' + this.state.phone + '"');
            console.log(gData)
             if(gData.length >0){


                
             for(var i=0;i < gData.length;i++){
               var data1 = realm.objects("accountlogin").filtered(' phone = "' + gData[i].yourcontact + '"');
               sdata.push(data1[0])

             }
             this.setdataaddfriend(sdata)
            
            }
            else {
               this.setdataaddfriend(sdata)
            }
            
            
            




        })
       



    }
    _addcontact(){

    }
    _deletecontact(){
        
    }

    render() {
        return (
            
                
            
                <View style={style.viewfriend}>

                    <View style={style.viewaddfriend}>

                    <FlatList data={this.state.dataaddfriend} renderItem={({ item }) => (
                    <View style={style.viewlist} >
                        <View style={style.imagelist}>
                        <Image source={require("../../../src/img/icons8-man-blond-hair-48.png")}  ></Image></View>
                        <View style={style.viewinfor}>
                            <Text style={style.textname} >{item.name}</Text>
                            <Text style={style.textname} >{item.phone}</Text>
                            </View>
                            <View  style={style.Viewaddcontact} onStartShouldSetResponder={this._addcontact.bind(this,item.phone)}>
                                <Text>V</Text>
                                
                            </View>
                            <View  style={style.Viewdeletecontact} onStartShouldSetResponder={this._deletecontact.bind(this,item.phone)}>
                                <Text>   X</Text>
                                
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
    viewlist: {
        
        margin:4,
        flex: 1,
        flexDirection: 'row',

        borderRadius: 10
    },
    imagelist:{
        flex:1

    },
    viewinfor: {
        
        marginLeft:10,
        flex: 7,
        flexDirection: 'column',

        borderRadius: 10
    },
    viewaddcontact: {
        backgroundColor: "rgba(0,0,0,0.5)",
        flex: 1,
        borderRadius: 10
        
    },
    Viewdeletecontact:{
        backgroundColor: "rgba(0,0,0,0.3)",
        flex: 1,
        borderRadius: 10
    },
   
    viewaddfriend: {
        backgroundColor: "rgba(0,0,0,0.3)",
        margin:5,
        padding:10,
        borderRadius: 20
    },
    textname:{
        fontSize:18

    }




})

export default addcontact;