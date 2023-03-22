import React from 'react';
import {StyleSheet, View, Text} from 'react-native';

export const FlexScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.caja1}>Caja 1</Text>
      <Text style={styles.caja2}>Caja 2</Text>
      <Text style={styles.caja3}>Caja 3</Text>
      {/* <Text style={styles.caja4}>Caja 4</Text> */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#28C4D9',
    // flexDirection: 'row',
    // alignItems: 'flex-end',
    // justifyContent: 'flex-end',
    // flexWrap: 'wrap'
  },
  caja1: {
    // flex: 5,
    width: 100,
    height: 100,
    borderWidth: 3,
    borderColor: 'black',
    fontSize: 30,
  },
  caja2: {
    // flex: 1,
    borderWidth: 3,
    borderColor: 'black',
    fontSize: 30,
    width: 100,
    height: 100,
  },
  caja3: {
    // flex: 2,
    borderWidth: 3,
    borderColor: 'black',
    fontSize: 30,
    width: 100,
    height: 100,
  },
  caja4: {
    flex: 2,
    borderWidth: 3,
    borderColor: 'black',
    fontSize: 30,
    width: 100,
    height: 100,
  },
});
