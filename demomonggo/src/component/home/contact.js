
import React, { Component } from 'react';
import { View, Image, StyleSheet, FlatList, Text } from 'react-native';
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

    render() {

        return (
            <View>
                <FlatList data={this.state.data} renderItem={({ item }) => (
                    <View style={style.viewlist} >
                        <Image source={require("../../../src/img/icons8-man-blond-hair-48.png")} style={style.imagelist} ></Image>
                        <View style={style.viewinfor}>
                            <Text style={style.textname} >{item.name}</Text>
                            <Text style={style.textname} >{item.phone}</Text></View>
                    </View>
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