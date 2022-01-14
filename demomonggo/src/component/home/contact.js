
import React, { Component } from 'react';
import { View, Image, StyleSheet, FlatList, Text, TouchableHighlight } from 'react-native';
import {realm }  from "../../database/database";

//xong


class contact extends Component {
    constructor({route,props}) {
        super(props);
       
        

      
       this.state = {
           data:[],
           phone:route.params.phone,
       }
       this._getdata();

    }
    setdata(user) {
        this.setState({
            data: user
        })
        
       
    }
    
    _getdata() {

        
      
        realm.then((realm) => {
            
            var sdata=[]
            var gData=realm.objects("contact").filtered(' mycontact =  "' + this.state.phone + '"');
            
             if(gData.length >0){


                
             for(var i=0;i < gData.length;i++){
               var data1 = realm.objects("accountlogin").filtered(' phone = "' + gData[i].yourcontact + '"');
               sdata.push(data1[0])
               
             }
             this.setdata(sdata)
             
            }
            else {
               this.setdata(sdata)
              
            }
            
            
            




        })
       



    }
   
    _longclick(use){
        alert(use)
        realm.then((realm) => {
        const  data = realm.objects("contact").filtered(' (mycontact = "' + this.state.phone + '" and yourcontact = "' + use + '" ) or ( mycontact = "' + use + '" and yourcontact = "' + this.state.phone + '" )' );
        const  data1 = realm.objects("addcontact").filtered(' (mycontact = "' + this.state.phone + '" and yourcontact = "' + use + '" ) or ( mycontact = "' + use + '" and yourcontact = "' + this.state.phone + '" )' );
        
            realm.write(() => {
               
               realm.delete(data)
               data1.update("status","xoa")
              });
              this._getdata();

        })
        
       

    }
    render() {

        return (
            <View>
                <FlatList data={this.state.data} renderItem={({ item }) => (
                    <TouchableHighlight underlayColor={"white"} onLongPress={this._longclick.bind(this,item.phone)}>
                    <View style={style.viewlist}   >
                        <Image source={require("../../../src/img/icons8-man-blond-hair-48.png")} style={style.imagelist} ></Image>
                        <View style={style.viewinfor}>
                            <Text style={style.textname} >{item.name}</Text>
                            <Text style={style.textname} >{item.phone}</Text></View>
                    </View></TouchableHighlight>
                )

                }></FlatList>

            </View>
        );
    }
}
const style = StyleSheet.create({
    viewlist: {
        margin:5,
        padding:10,
        flex: 1,
        flexDirection: 'row',

        backgroundColor:"rgba(0,0,0,0.3)",
        borderRadius: 10
    },
    viewinfor: {
        marginLeft:10,
        flex: 6,
    },
    textname:{
        fontSize:18

    }

})
export default contact;