import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

export const BoxObjetcModelScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Box Object Model</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'red'
  },
  title:{
    fontSize: 24,
    textAlign: 'center',
    fontWeight: 'bold',
    borderWidth: 4,
    margin: 5,
    padding: 5,
  }
});
