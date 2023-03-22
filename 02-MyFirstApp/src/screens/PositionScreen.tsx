import React from 'react';
import {StyleSheet, useWindowDimensions, Dimensions, View} from 'react-native';
const {width, height} = Dimensions.get('window');
export const PositionScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.cajaFull}></View>
      <View style={styles.cajaMorada}></View>
      <View style={styles.cajaNaranja}></View>
      <View style={styles.cajaRoja}></View>
      <View style={styles.cajaNegra}></View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#28C4D9',
  },
  cajaMorada: {
    backgroundColor: '#5856D6',
    width: 100,
    height: 100,
    borderWidth: 5,
    borderColor: 'white',
    top: 650,
    left: width - 150,
  },
  cajaNaranja: {
    backgroundColor: '#F0A23B',
    width: 100,
    height: 100,
    borderWidth: 5,
    borderColor: 'white',
    top: 550,
    left: 50,
  },
  cajaRoja:{
    backgroundColor: 'red',
    width: 100,
    height: 100,
    borderWidth: 5,
    borderColor: 'white',
    position: 'absolute',
    top: 0,
    right: 50,
  },
  cajaNegra:{
    backgroundColor: 'black',
    width: 100,
    height: 100,
    borderWidth: 5,
    borderColor: 'white',
    position: 'absolute',
    top: 0,
    left: 50,
  },
  cajaFull:{
    backgroundColor: 'green',
    // position: 'absolute',
    // top: 0,
    // bottom: 0,
    // left: 0,
    // rigth: 0,
    ...StyleSheet.absoluteFillObject
  }
});
