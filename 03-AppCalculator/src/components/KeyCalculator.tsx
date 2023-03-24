import React from 'react';
import {StyleSheet, View, Text, TouchableOpacity} from 'react-native';
import {SharedKeysProps} from '../constants/types/SharedComponetsProps';
import {colors} from '../constants/theme/appTheme';

export const KeyCalculator = ({
  color = colors.darkGray,
  text,
  stretch = false,
  action,
}: SharedKeysProps) => {
  return (
    <TouchableOpacity onPress={() => action(text)}>
      <View
        style={{
          ...styles.keyButton,
          backgroundColor: color,
          width: stretch ? 180 : 80,
        }}>
        <Text
          style={{
            ...styles.keyText,
            color: color === colors.lightGray ? colors.darkGray : colors.white,
          }}>
          {text}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  keyButton: {
    width: 80,
    height: 80,
    borderRadius: 100,
    backgroundColor: 'rgba(255,255,255,0.7)',
    justifyContent: 'center',
    marginVertical: 5,
  },
  keyText: {
    fontSize: 25,
    fontWeight: 'bold',
    color: '#333',
    alignSelf: 'center',
  },
});
