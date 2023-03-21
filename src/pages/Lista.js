import React, { useState, useEffect, useCallback } from 'react';
import { View, TouchableOpacity, Text, StyleSheet, ScrollView } from 'react-native';
import { useNavigation, useFocusEffect } from '@react-navigation/native';
import {db} from '../../config/configFirebase'
import {useAuth} from '../hooks/useAuth'

export function Lista() {
  const [dataList, setDataList] = useState([])
  const Nav = useNavigation();
  const {user} = useAuth()

  useFocusEffect(useCallback(()=>{
    console.log("find ", user.uid)
    db.ref('/listaCompras')
      .orderByChild("User")
      .equalTo(user.uid)
      .once(
        'value',
        snapshot=>{
          let data = snapshot.val();
          let dados = Object.values(data);
          setDataList(dados);
          console.log(dados);
        }
      )
  },[])
  )

  return (
    <ScrollView>
    <View style={estilo.mainView}>
      {dataList.map((item) => {
        return (
            <View style={estilo.viewTouchOpc}>

              <TouchableOpacity onPress={() => Nav.navigate('DetalheProd', {nome:item.Nome, desc:item.Descricao, qtd:item.Quantidade, img: item.Img})} style={estilo.touchOpaOpc}>
                <Text style={estilo.txtItemName}>{item.Nome}</Text>
                <Text style={estilo.txtQtd}> Quantidade: {item.Quantidade}</Text>
              </TouchableOpacity>
            
            </View>
        );
      })}
    </View>
    </ScrollView>
  );
}

const estilo = StyleSheet.create({ 
  mainView:{
    flex: 1,
    backgroundColor: 'transparent',
    paddingTop: 10,
  },
  viewTouchOpc:{
    marginBottom: 5,
    backgroundColor: 'lightblue',
    marginLeft: 30,
    borderWidth: 2,
    borderRadius: 10,
    marginRight: 30,
    minHeight: 80
  },
  touchOpaOpc: {
    backgroundColor: 'transparent',
    borderRadius: 10,
    flex:1
  },
  txtItemName:{
    fontSize: 25,
    paddingLeft: 35,
  },
  txtQtd:{
    fontSize: 20,
    paddingLeft: 170,
  },
})