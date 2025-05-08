import React from 'react'
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"

import HomeNavigator from './HomeNavigator';
import Feather from '@expo/vector-icons/Feather';
import {TouchableOpacity} from "react-native"
import FontAwesome from '@expo/vector-icons/FontAwesome';
import Fontisto from '@expo/vector-icons/Fontisto';


const Tab = createBottomTabNavigator()

function RootNavigator() {

const CustomTabBarButton= ({}) => {
  return(
    <TouchableOpacity
    style={{
      position:'absolute',
      width:58,
      height:58,
      backgroundColor:'#195b94',
      justifyContent:'center',
      alignSelf:'center',
      alignItems:'center',
      borderRadius:30,
      marginTop:-8,
      borderWidth:2,
      borderColor:'white',
    }}>
 <Fontisto name="nav-icon-list-a" size={24} color="black" />
    </TouchableOpacity>
  )
}



  return (
    <Tab.Navigator
  initialRouteName="Home Page"
  screenOptions={({ route }) => ({
    tabBarHideOnKeyboard: true,
    tabBarShowLabel: false,
    tabBarActiveTintColor: "#ee0e51",
    tabBarInactiveTintColor: "#a7bcb9",
    headerShown: false,
    
  })}
>
      <Tab.Screen

        name="Home Page"
        component={HomeNavigator}
        options={{
          tabBarIcon: ({ color }) => (
            <FontAwesome name="home" size={24} color={color} />
          )
        }}

      />


      <Tab.Screen

        name="Search"
        component={HomeNavigator}
        options={{
          tabBarIcon: ({ color }) => (
            <Feather name="search" size={24} color={color} />
          )
        }}

      />

<Tab.Screen

name="list"
component={HomeNavigator}
options={{
  tabBarButton : (props)=> <CustomTabBarButton {...props}/>
}}

/>
      <Tab.Screen

        name="User"
        component={HomeNavigator}
        options={{
          tabBarIcon: ({ color }) => (
            <FontAwesome name="user" size={24} color={color} />
          )
        }}

      />

      <Tab.Screen

        name="Gift"
        component={HomeNavigator}
        options={{
          tabBarIcon: ({ color }) => (
            <FontAwesome name="gift" size={24} color={color} />
          )
        }}

      />



    </Tab.Navigator>
  )
}

export default RootNavigator