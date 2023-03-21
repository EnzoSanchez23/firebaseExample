import React, { View, Text} from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import {SignInScreen} from '../pages/SignIn'

const NavegacaoLogin = createStackNavigator()

export function AuthRoutes(){
  return(
    <NavegacaoLogin.Navigator
      screenOptions={{ headerShown:false }}
    >
      <NavegacaoLogin.Screen
        name='SignIn'
        component={SignInScreen}
      />

    </NavegacaoLogin.Navigator>
  )
}