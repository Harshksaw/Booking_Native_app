import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import {  createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { Entypo } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';


const StackNavigation = () => {

  const Stack = createNativeStackNavigator();
  const Tab = createBottomTabNavigator();

  function BottomTabs(){
    return(
    <Tab.Navigator>
      <Tab.Screen screen="Home" component = {HomeScreen} options={{tabBarLabel:"Home" ,
       headerShown: false, 
    tapBarIcon: ({focused}) => focused ? (
      <Entypo name="home" size={24} color="black" />
    ) : (
      <AntDesign name="home" size ={24} color="black"/>
    ) 
    }}/>

    </Tab.Navigator>

    // Savedscreen
    <Tab.Navigator>
      <Tab.Screen screen="Home" component = {SavedScreen} options={{tabBarLabel:"Home" ,
       headerShown: false, 
    tapBarIcon: ({focused}) => focused ? (
      <Entypo name="home" size={24} color="black" />
    ) : (
      <AntDesign name="home" size ={24} color="black"/>
    ) 
    }}/>

    </Tab.Navigator>
    <Tab.Navigator>
      <Tab.Screen screen="Home" component = {HomeScreen} options={{tabBarLabel:"Home" ,
       headerShown: false, 
    tapBarIcon: ({focused}) => focused ? (
      <Entypo name="home" size={24} color="black" />
    ) : (
      <AntDesign name="home" size ={24} color="black"/>
    ) 
    }}/>

    </Tab.Navigator>
    )
  }


  return (
    <View>
      <Text>StackNavigation</Text>
    </View>
  )
}

export default StackNavigation

const styles = StyleSheet.create({})