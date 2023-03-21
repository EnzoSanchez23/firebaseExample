import React, {useState} from 'react';
import { Text, View, StyleSheet, Button, TouchableOpacity } from 'react-native';
import { NavigationContainer, useNavigation } from '@react-navigation/native'

import {Routes} from './src/routes/index'
import {AuthContextProvider} from './src/hooks/useAuth'


export default function App(){
  return (
  <AuthContextProvider>
    <View style={{flex: 1}}><Routes/></View>
  </AuthContextProvider>
  );
}












