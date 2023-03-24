import React from 'react';
import {SafeAreaView, StatusBar} from 'react-native';
import {theme} from './src/constants/theme/appTheme';
import {CalculatorScreen} from './src/screens/CalculatorScreen';

const App = () => {
  return (
    <SafeAreaView style={theme.fondoNegro}>
      <StatusBar backgroundColor="black" barStyle="light-content" />
      <CalculatorScreen />
    </SafeAreaView>
  );
};
export default App;
