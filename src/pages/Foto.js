import React from 'react';
import { Camera } from 'expo-camera'; 
import { useState, useRef } from 'react';
import { Text, View, Button, StyleSheet, TouchableOpacity, Image } from 'react-native';
import * as MediaLibrary from 'expo-media-library';
import { useNavigation } from '@react-navigation/native'

export function Foto({route}) {

  const camRef = useRef(null);
  const [permission, requestPermission] = Camera.useCameraPermissions();
  const [uri, setUri] = useState('');
  const Nav = useNavigation();

  if (!permission) {
    return <View />;
  }
  if (!permission.granted) {
    return (
      <View style={{ justifyContent: 'center', flex: 1 }}>
        <Text style={{ textAlign: 'center' }}>
          Permissão para o acesso a camera!
        </Text>
        <Button onPress={requestPermission} title="Permitir uso da camera" />
      </View>
    );
  }

  async function takePic(){
    if(camRef){
      const data = await camRef.current.takePictureAsync();
      setUri(data.uri);
      console.log(data.uri)
      await MediaLibrary.saveToLibraryAsync(data.uri);
      route.params.setFoto(data.uri);
      alert("Foto tirada com sucesso e salvo na galeria!")
    }
  }

  function removePic(){
    setUri("")
  }

  function setPic(){
    if(uri != "")Nav.navigate("Cadastro");
  }

  return (
    <View style={{ justifyContent: 'center', flex: '1', alignItems: 'center' }}>
      <View style={styles.container}>
        {uri== ""?

        <Camera
          style={styles.camera}
          ref={camRef}></Camera>: <Image source={{uri:uri}} style={styles.camera}/>}

        <View style={styles.buttonContainer}>
          {uri== ""?
          <TouchableOpacity style={styles.touchOp} onPress={takePic}>
            <Text style={styles.text}>Tirar Foto</Text>
          </TouchableOpacity>:
<>
          <TouchableOpacity style={styles.touchOp} onPress={removePic}>
            <Text style={styles.text}>Tirar Nova Foto</Text>
          </TouchableOpacity>
          
          <TouchableOpacity style={styles.touchOp} onPress={setPic}>
            <Text style={styles.text}>Usar Foto</Text>
          </TouchableOpacity>
</>
          }

          
          
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '80%',
    height: '80%',
    justifyContent: 'center',
  },
  camera: {
    flex: 1,
    borderWidth: 4,
  },
  buttonContainer: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: 'transparent',
  },
  text: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'black',
  },
  touchOp: {
    flex: 1,
    backgroundColor: 'lightblue',
    borderRadius: 15,
    alignContent: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    margin: 5,
    borderWidth: 2,
  },
});
