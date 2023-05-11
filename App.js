import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import DrawerNavigator from "./navigation/DrawerNavigator";
import {createStackNavigator} from "@react-navigation/stack";
import LoginScreen from "./screens/LoginScreen";
import RegisterScreen from "./screens/Register";
import * as firebase from "firebase";
import { firebaseConfig } from "./config";
import StackNavigator from "./navigation/StackNavigator";

if(!firebase.apps.length){
  firebase.initializeApp(firebaseConfig);
}else{
  firebase.app();
}
const Stack = createStackNavigator();
const StackNavi = ()=>{
  return(
    <Stack.Navigator initialRoteName = "login" screenOptions = {{headerShown: false, gestureEnabled: false}}>
      <Stack.Screen name = "login" conponent = {LoginScreen}/>
      <Stack.Screen name = "registrar" conponent = {RegisterScreen}/>
      <Stack.Screen name = "dashBoard" conponent = {DrawerNavigator}/>
    </Stack.Navigator>
  )
}
export default function App() {
  return (
    <NavigationContainer>
      <StackNavi/>
    </NavigationContainer>
  );
}