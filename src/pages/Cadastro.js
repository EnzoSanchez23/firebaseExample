import React, {useState} from 'react'
import {StyleSheet, View, Text, ScrollView, TextInput, TouchableOpacity} from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { db, storage } from '../../config/configFirebase'
import uuid from 'react-uuid';
import * as FileSystem from 'expo-file-system';
//Qualquer <Text> aleatoria é apenas referencia de espaço
import {useAuth} from '../hooks/useAuth'

export function Cadastro(){
  
  const Nav = useNavigation();
  const {signOut, user} = useAuth()
  const[nome, setNome]=useState("");
  const[quantidade, setQuantidade]=useState(0);
  const[desc, setDesc]=useState("");
  const[img, setImg]=useState("");
  
  
  var metadata = {
    contentType: 'image/jpg',
  };

  async function salvarDado(){

    if(nome != "" && quantidade != 0 && desc!=""){
      const saveUrl = `/imagens/${uuid()}.jpg`;
      const uri = img;
      const response = await fetch(uri);
      const blob = await response.blob();

      const ref = storage.ref().child(saveUrl);
      const snapshot = await ref.put(blob);
      
    
      db.ref('/listaCompras').push({
        Nome: nome,
        Quantidade: quantidade,
        Descricao: desc,
        Img: saveUrl,
        User: user.uid
      })

      alert("Item Salvo!")
    }
    else{
      alert("Preenchimento Invalido!")
    }
    

  }


  return(

    <ScrollView style={estilo.main}>
      <View style={estilo.viewTxtInput}>
        <Text style={estilo.txtTitle}>CADASTRO DO ITEM</Text>
        
        <Text style={estilo.textoTxtInput}>Nome:</Text>
        <TextInput placeholder="Nome" style={estilo.txtInput} onChangeText={(name)=>setNome(name)} />

        <Text style={estilo.textoTxtInput}>Quantidade:</Text>
        <TextInput keyboardType="numeric" placeholder="Quantidade" style={estilo.txtInput} onChangeText={(qtde)=>setQuantidade(qtde)} />

        <Text style={estilo.textoTxtInput}>Descrição:  </Text>
        <TextInput placeholder="Descrição" style={estilo.txtInput} onChangeText={(desc)=>setDesc(desc)} />
      </View>
      
      <View style={estilo.viewBtn}>
        <Text></Text>

        <TouchableOpacity onPress={()=> Nav.navigate('Foto',{setFoto:setImg})} style={estilo.touchOp}>
          <Text style={estilo.txt}>Foto</Text>
        </TouchableOpacity>

        
        <TouchableOpacity style={estilo.touchOp} onPress={salvarDado} >
          <Text style={estilo.txt}>Salvar Item</Text>
        </TouchableOpacity>

        <TouchableOpacity style={estilo.touchOp} onPress={()=>signOut()} >
          <Text style={estilo.txt}>Sair</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>

    

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