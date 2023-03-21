import React, {useState} from 'react'
import {StyleSheet, View, Text, TextInput, TouchableOpacity, ActivityIndicator} from 'react-native'
import {useAuth} from '../hooks/useAuth'

export function SignInScreen(){
  
  const { signIn, isLoadingUserData } = useAuth()
  const[email, setEmail]=useState("");
  const[pass, setPass]=useState("");

  async function handleLogin(){
    console.log('handleLogin')
    signIn({email, pass});
  }

  return(

    <View style={estilo.main}>
      <View style={estilo.viewTxtInput}>
        <Text style={estilo.txtTitle}>Login</Text>
        
        <Text style={estilo.textoTxtInput}>Email:</Text>
        <TextInput
          placeholder="Email"
          style={estilo.txtInput} 
          onChangeText={(email)=>setEmail(email)} 
        />

        <Text style={estilo.textoTxtInput}>Senha:  </Text>
        <TextInput 
          placeholder="Senha"
          style={estilo.txtInput}
          onChangeText={(pass)=>setPass(pass)}
          />
      </View>
      
      <View style={estilo.viewBtn}>

        {!isLoadingUserData ?
          <TouchableOpacity style={estilo.touchOp} onPress={handleLogin} >
            <Text style={estilo.txt}>Login</Text>
          </TouchableOpacity>
        :
          <ActivityIndicator/>
        }
      </View>
    </View>

    

  )
}

const estilo = StyleSheet.create({
  main: {
    flex: 1,
    backgroundColor: 'transparent'
  },
  
  viewTxtInput: {
    height: '70%',
    backgroundColor: 'transparent',
    justifyContent: 'center',
    paddingLeft: 90,

  },
  viewBtn: {
    height: '30%',
    backgroundColor: 'transparent',
    alignItems: 'center',
    
  },
  touchOp: {
    borderRadius: '15',
    borderWidth: '2',
    backgroundColor: 'lightblue',
    alignContent: 'center',
    alignItems: 'center',
    width: '70%',
    marginBottom: 35,
  },
  txt:{
    fontSize: 30,
  },
  textoTxtInput:{
    fontSize: 20,
  },
  txtInput:{
    borderWidth: 2,
    borderRadius: 5,
    width: '70%',
    alignItems: 'center',
    height: 50,
    
  },
  txtTitle:{
    paddingRight: 20,
    fontWeight: 'bold',
    fontSize: 20,
    textDecorationLine: 'underline',
  }
});