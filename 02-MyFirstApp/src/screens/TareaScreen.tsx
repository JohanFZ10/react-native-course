import React from 'react';
import {StyleSheet, View} from 'react-native';

export const TareaScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.cajaMorada} />
      <View style={styles.cajaNaranja} />
      <View style={styles.cajaAzul} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#28425B',
   flexDirection: 'row',
   justifyContent: 'center',
   alignItems: 'center',
  },
  cajaMorada: {
    width: 100,
    height: 100,
    backgroundColor: '#5856D6',
    borderWidth: 5,
    borderColor: '#ccc',
  },
  cajaNaranja: {
    top: 50,
    width: 100,
    height: 100,
    backgroundColor: '#F0A23B',
    borderWidth: 5,
    borderColor: '#ccc',
  },
  cajaAzul: {
    width: 100,
    height: 100,
    backgroundColor: '#28C4D9',
    borderWidth: 5,
    borderColor: '#ccc',
  },
});
