import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  useWindowDimensions,
} from 'react-native';
// Estas dimensiones no cambian con la rotacion de la pantalla
// const {width, height} = Dimensions.get('window');

export const DimensionsScreen = () => {
  // Mediante este Hook, las dimensiones se actualizan cuando se cambia la rotacion de la pantalla
  const {width, height} = useWindowDimensions();
  return (
    <View>
      <View style={styles.container}>
        <View
          style={{
            ...styles.cajaMorada,
            width: width * 0.7,
          }}
        />
        <View style={styles.cajaNaranja} />
      </View>
      <Text style={styles.title}>
        Width: {width.toFixed(2)} - Height: {height.toFixed(2)}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'red',
    height: 500,
  },
  cajaMorada: {
    backgroundColor: 'purple',
    //width: width * 0.5,
    height: 100,
  },
  cajaNaranja: {
    backgroundColor: 'orange',
    width: '75%',
    height: '20%',
    //height: height * 0.2,
  },
  title: {
    fontSize: 30,
  },
});
