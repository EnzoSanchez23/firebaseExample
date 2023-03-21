import {StyleSheet} from 'react-native'

export const styles = StyleSheet.create({
  container: {
    width: '80%',
    height: '80%',
    justifyContent: 'center',
  },
  camera: {
    flex: 1,
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