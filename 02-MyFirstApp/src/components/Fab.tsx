import React from 'react';
import {TouchableOpacity, View, StyleSheet, Text, Platform} from 'react-native';

interface ButtonsProps {
  title: string;
  location?: 'br' | 'bl';
  onPress: () => void;
}

export const Fab = ({title, location, onPress}: ButtonsProps) => {
  // Platform-specific code
  const ios = () => {
    return (
      <TouchableOpacity
        style={[
          styles.fabLocation,
          location === 'br' ? styles.fabRight : styles.fabLeft,
        ]}
        onPress={onPress}>
        <View style={styles.fab}>
          <Text style={styles.buttonText}>{title}</Text>
        </View>
      </TouchableOpacity>
    );
  };
  const android = () => {
    return (
      <TouchableOpacity
        style={[
          styles.fabLocation,
          location === 'br' ? styles.fabRight : styles.fabLeft,
        ]}
        onPress={onPress}>
        <View style={styles.fab}>
          <Text style={styles.buttonText}>{title}</Text>
        </View>
      </TouchableOpacity>
    );
  };

  return Platform.OS === 'ios' ? ios() : android();
};

const styles = StyleSheet.create({
  fabLocation: {
    position: 'absolute',
    bottom: 30,
  },
  fabLeft: {
    left: 20,
  },
  fabRight: {
    right: 20,
  },
  fab: {
    backgroundColor: '#5856D6',
    width: 50,
    height: 50,
    borderRadius: 50,
    justifyContent: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.3,
    shadowRadius: 4.65,
    elevation: 8,
  },
  buttonText: {
    fontSize: 25,
    color: 'white',
    fontWeight: 'bold',
    alignSelf: 'center',
  },
});
