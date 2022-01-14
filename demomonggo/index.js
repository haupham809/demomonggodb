/**
 * @format
 */

 import {AppRegistry, BackHandler} from 'react-native';
 import login from './src/component/login/login';
 import register from './src/component/register/register';
 import confirmregister from './src/component/register/confirmregister';
 import home from './src/component/home/home'
 import searchcontact from './src/component/home/search'
 import message from './src/component/home/message'
 import {name as appName} from './app.json';
 import React,{ Component } from 'react';
 import { NavigationContainer } from '@react-navigation/native';
 
import 'react-native-get-random-values'
 import { createNativeStackNavigator } from '@react-navigation/native-stack';
  const Stack=createNativeStackNavigator();
 class APP extends Component {
     _onpress(route,navigator){
         alert(route.name)
 
     }
  
     render() {
         return (
 <NavigationContainer >
 
 <Stack.Navigator initialRouteName={"LOGIN"} >
     <Stack.Group>
         <Stack.Screen name="LOGIN" component={login} options={{headerShown:false}}/>
        <Stack.Screen name={"REGISTER"} component={register} />
        <Stack.Screen name={"CONFIRMNUMBERPHONE"} component={confirmregister} />
        </Stack.Group>
        <Stack.Screen name={"HOME"} options={{headerShown:false}} component={home} />
        <Stack.Screen name={"SEARCH"} component={searchcontact} />
        <Stack.Screen name={"MESSAGE"}  component={message} />
       </Stack.Navigator>
 
           </NavigationContainer>
         )
     }
 
 }
 AppRegistry.registerComponent(appName, () => APP);
 