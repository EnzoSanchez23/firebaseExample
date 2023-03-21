import React, {useState} from 'react';
import { Text, View, StyleSheet, Button, TouchableOpacity } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer, useNavigation } from '@react-navigation/native'


import {Cadastro} from '../pages/Cadastro'
import {Foto} from '../pages/Foto'


const NavegacaoStack = createStackNavigator();
export function routeCadastro(){
  return(
    <NavegacaoStack.Navigator>
      <NavegacaoStack.Screen name="Cadastro" component={Cadastro}/>
      <NavegacaoStack.Screen name="Foto" component={Foto}/>      
    </NavegacaoStack.Navigator>

  )
}