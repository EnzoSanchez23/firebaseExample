import React, {useState} from 'react';
import { Text, View, StyleSheet, Button, TouchableOpacity } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer, useNavigation } from '@react-navigation/native'

import {Lista} from '../pages/Lista'
import {DetalhesProd} from '../pages/DetalhesProd'

const NavegacaoStack = createStackNavigator();

export function routeLista(){
  return(
    <NavegacaoStack.Navigator>
      <NavegacaoStack.Screen name="Lista" component={Lista}/>
      <NavegacaoStack.Screen name="DetalheProd" component={DetalhesProd}/>      
    </NavegacaoStack.Navigator>

  )
}