import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import {MaterialCommunityIcons} from '@expo/vector-icons'

import {routeCadastro} from './routeCadastro'
import {routeLista} from './routeLista'

const NavegacaoTabs = createBottomTabNavigator();

export function AppRoutes(){
  return (
    
      <NavegacaoTabs.Navigator>
        <NavegacaoTabs.Screen 
        name="Cadastrar Item" 
        component={routeCadastro} 
        options={{
          headerShown: false,
          tabBarIcon: ()=> <MaterialCommunityIcons 
          name = "plus-box-outline" size={30}/>
          }}
        />
        
        <NavegacaoTabs.Screen 
          name="Lista"
          component={routeLista}
          options={{
            headerShown: false,
            tabBarIcon: ()=>
              <MaterialCommunityIcons 
                  name = "format-list-bulleted" 
                  size={30}
              />
            }}
          />
      </NavegacaoTabs.Navigator>
    
  );
}