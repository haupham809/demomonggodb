import React, { Component } from 'react';
import { Text, View,Image,StyleSheet, Button } from 'react-native';
import contact from './contact';
import account from './account';
import addcontact from './addcontact';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { useEffect } from 'react';
const Tab = createBottomTabNavigator();
export default class home extends Component {
    constructor({route,props}) {
      
       
        super(props);
        this.state = {
            phone:route.params.phone
}
       

        
    }
    


    render() {
        return (
          
            <Tab.Navigator screenOptions={{
             
                tabBarStyle:{
                    position:'absolute',
                    bottom:10,
                    left:20,
                    right:20,
                    elevation:20,
                    backgroundColor:'#ffffff',
                    borderRadius:15,
                    height:60,
                    
                } }}  
                
                 >
            <Tab.Screen name="Contact"  initialParams={{phone:this.state.phone}} options={
                {
                    unmountOnBlur:true,
                tabBarLabel:"Contact",
               tabBarIcon:({forcused})=>(

                   <View style={StyleSheet.create({alignItems:'center',justifyContent:'center'})}>
                      
                <Image source={require("../../../src/img/icons8-contact-48.png")} style={StyleSheet.create({width:30,height:30})}></Image></View>
               )
            
            }
                }  component={contact} ro />
            <Tab.Screen name="Infor Contact" initialParams={{phone:this.state.phone}}   options={
                { unmountOnBlur:true,
                    headerRight:({forcused})=>(
                        <View style={StyleSheet.create({alignItems:'center',justifyContent:'center',marginRight:40})} onStartShouldSetResponder={()=>{ this.props.navigation.navigate("SEARCH",{phone:this.state.phone});}} >
                      
                        <Image source={require("../../../src/img/icons8-search-contacts-48.png")} style={StyleSheet.create({width:30,height:30})} ></Image></View>

                    ),
                   
                tabBarLabel:"Infor Contact",
               tabBarIcon:({forcused})=>(

                   <View style={StyleSheet.create({alignItems:'center',justifyContent:'center'})}>
                      
                <Image source={require("../../../src/img/icons8-search-contacts-48.png")} style={StyleSheet.create({width:30,height:30})}></Image></View>
               )
            
            }
                }  component={addcontact} />
            <Tab.Screen name="Account" initialParams={{phone:this.state.phone}}  options={
                { unmountOnBlur:true,
                    headerRight:({forcused})=>(
                        <View style={StyleSheet.create({alignItems:'center',justifyContent:'center',marginRight:40})} onStartShouldSetResponder={()=>{ this.props.navigation.navigate("LOGIN");}} >
                      
                        <Image source={require("../../../src/img/icons8-log-out-32.png")} style={StyleSheet.create({width:30,height:30})} ></Image></View>

                    ),
                tabBarLabel:"Account",
               tabBarIcon:({forcused})=>(

                   <View style={StyleSheet.create({alignItems:'center',justifyContent:'center'})}>
                      
                <Image source={require("../../../src/img/icons8-contact-48.png")} style={StyleSheet.create({width:30,height:30})}></Image></View>
               )
            
            }
                }  component={account} />
          </Tab.Navigator>
         
        )
    }
}
