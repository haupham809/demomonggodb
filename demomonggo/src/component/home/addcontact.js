import React, { Component } from 'react';
import { TextInput, View, StyleSheet ,FlatList,Image ,Text, ScrollView} from 'react-native';
import { BSON } from 'realm';
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
            var gData=realm.objects("addcontact").filtered(' status = "false" and  ( (mycontact =  "' + this.state.phone + '") ||  ( yourcontact =  "' + this.state.phone + '" ) )');
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
    _addcontact(use1,use2){
      
        realm.then((realm) => {
            var gData=realm.objects("addcontact").filtered(' status = "false"  and  ( (mycontact = "' + use1 + '" and yourcontact = "'+ use2 + '" ) or ( mycontact = "' + use2 + '" and yourcontact = "'+ use1 + '"  ) )')
            realm.write(() => {   
                gData.update('status','true')
               });
               createcontact(use1,use2)
               this._getdata();

        })
    }
    _deletecontact(use1,use2){
      
        realm.then((realm) => {
            var gData=realm.objects("addcontact").filtered(' status = "false"  and  ( (mycontact = "' + use1 + '" and yourcontact = "'+ use2 + '" ) or ( mycontact = "' + use2 + '" and yourcontact = "'+ use1 + '"  ) )')
            realm.write(() => {   
                gData.update('status','xoa')
               });
              
               this._getdata();

        })
    }
    componentDidMount(){
        this._getdata();
    }

    render() {
        return (
            
                
            
                <View style={style.viewfriend} >

                    <View style={style.viewaddfriend} >

<ScrollView>
                    <FlatList data={this.state.dataaddfriend} renderItem={({ item }) => (
                    <View style={style.viewlist} >
                        <View style={style.imagelist}>
                        <Image source={require("../../../src/img/icons8-man-blond-hair-48.png")}  ></Image></View>
                        <View style={style.viewinfor}>
                            <Text style={style.textname} >{item.name}</Text>
                            <Text style={style.textname} >{item.phone}</Text>
                            </View>
                            <View  style={style.Viewaddcontact} onStartShouldSetResponder={this._addcontact.bind(this,this.state.phone,item.phone)}>
                            <Image source={require("../../../src/img/icons8-add-30.png")} style={StyleSheet.create({width:30,height:30})}></Image>
                            </View>
                            <View  style={style.Viewdeletecontact} onStartShouldSetResponder={this._deletecontact.bind(this,this.state.phone,item.phone)}>
                            <Image source={require("../../../src/img/icons8-delete-24.png")} style={StyleSheet.create({width:30,height:30})}></Image>
                                
                            </View>
                    </View>
                )

                }></FlatList>
                </ScrollView>

                    </View>
                    

                </View>

        );
    }
}
const style = StyleSheet.create({
    viewlist: {
        backgroundColor: "rgba(0,0,0,0.3)",
        margin:4,
        flex: 1,
        flexDirection: 'row',
        padding:10,

        borderRadius: 10
    },
    imagelist:{
        flex:1

    },
    viewinfor: {
        
        marginLeft:10,
        flex: 6,
        flexDirection: 'column',
        borderRadius: 10
    },
    viewaddcontact: {
        
        flex: 2,
        borderRadius: 10
        
    },
    Viewdeletecontact:{
       
        flex: 1,
        borderRadius: 10
    },
   
    viewaddfriend: {
      
        margin:5,
        padding:10,
        borderRadius: 20
    },
    textname:{
        fontSize:18

    }




})

export default addcontact;