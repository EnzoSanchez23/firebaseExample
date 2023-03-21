import {View} from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import {AppRoutes} from './appRoutes'
import {AuthRoutes} from './AuthRoutes'
import {useAuth} from '../hooks/useAuth'

export function Routes(){
  const { user } = useAuth()   
  return (
    <View style={{flex:1}}>
      <NavigationContainer>
        {user.uid ? <AppRoutes/> :<AuthRoutes/>}  
      </NavigationContainer>  
    </View>
    
  );
}