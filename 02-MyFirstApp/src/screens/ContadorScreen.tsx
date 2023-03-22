import React, {useState} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {Fab} from '../components/Fab';

export const ContadorScreen = () => {
  const [contador, setContador] = useState(10);
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Contador: {contador}</Text>
      {/* <Button
        title="Click"
        onPress={() => {
          setContador(contador + 1);
        }}
      /> */}
      <Fab
        title="+1"
        location="br"
        onPress={() => {
          setContador(contador + 1);
        }}
      />
      <Fab
        title="-1"
        location="bl"
        onPress={() => {
          setContador(contador - 1);
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  title: {
    fontSize: 40,
    textAlign: 'center',
  },
});
