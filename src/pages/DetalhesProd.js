import React, {useState, useEffect} from 'react'
import {View, TouchableOpacity, Text, StyleSheet, Image, ImageBackground, Animated} from 'react-native'
import { storage } from '../../config/configFirebase'


export function DetalhesProd({route}){
const [opac, setOpac] = useState(new Animated.Value(0));
const [Img,setImg] = useState("");


  useEffect(()=>{
    
    Animated.timing(opac,{
      toValue: 1,
      duration: 2000,
    }).start();

    showImage();

  },[opac]);


  function removeItem(){
    alert("Item Removido")
  }

  async function showImage(){
    
    const url = await storage.ref().child(route.params.img).getDownloadURL();
    console.log("url", url);
    setImg(url);
  }

  return(
    <View name='MainView' style={estilo.mainView}>
      

      <View name='ViewTextos' style={estilo.viewTxts}>
      <View style={estilo.imgContainer}>
        <ImageBackground source={{url: Img}} style={estilo.img}/>
        
      </View>
        <Animated.Text style={{...estilo.txtNome, opacity: opac}}>Produto:</Animated.Text>
        <Animated.Text style={{...estilo.txt, opacity: opac}}>{route.params.nome}</Animated.Text>

        <Animated.Text style={{...estilo.txtQtd, opacity: opac}}>QTD:</Animated.Text>
        <Animated.Text style={{...estilo.txt, opacity: opac}}>{route.params.qtd}</Animated.Text>
        
        <Animated.Text style={{...estilo.txtDesc, opacity: opac}}>Descrição:</Animated.Text>
        <Animated.Text style={{...estilo.txt, opacity: opac}}>{route.params.desc}</Animated.Text>
      
      </View>

      <View name='ViewBntRemove'style={estilo.viewTouchOpa}>
      
        <TouchableOpacity onPress={removeItem}>
          <Text style={estilo.txtRemove}>REMOVER ITEM</Text>
        </TouchableOpacity>
      
      </View>

      
    </View>

  )
}

const estilo = StyleSheet.create({
  mainView:{
    flex: 1,
    backgroundColor: 'peachpuff',
  },
  imgContainer:{
    height: '40%',
    width: '60%',
    marginLeft:80,
    marginTop:10,
  },
  img:{

    height: '100%',
    width: '100%',
    borderWidth: 4,
    objectFit: "contain",
    flex:1
  },
  viewTouchOpa:{
    backgroundColor: 'lightblue',
    height: '10%',
    width: '50%',
    borderWidth: 4,
    marginLeft: 100,
    marginTop: 15,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
  },
  viewTxts:{
    backgroundColor: 'transparent',
    height: '85%',
  },
  txtNome:{
    fontWeight: 'bold',
    color: 'navy',
    paddingLeft: 70,
    textDecorationLine: 'underline',
    marginTop: 15,
    fontSize: 25,
  },
  txtQtd:{
    color: 'navy',
    fontWeight: 'bold',
    textDecorationLine: 'underline',
    paddingLeft: 70,
    fontSize: 25,
  },
  txtDesc:{
    color: 'navy',
    fontWeight: 'bold',
    textDecorationLine: 'underline',
    paddingLeft: 70,
    fontSize: 25,
  },
  txtRemove:{
    fontSize: 20,
    fontWeight: 'bold',
  },
  txt:{
    paddingLeft: 70,
    marginBottom: 10,
    fontSize: 30,
  }
})