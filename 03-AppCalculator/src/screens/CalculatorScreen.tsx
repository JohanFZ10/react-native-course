import React from 'react';
import {Text, View} from 'react-native';
import {theme, colors} from '../constants/theme/appTheme';
import {KeyCalculator} from '../components/KeyCalculator';
import {useCalculator} from '../hooks/useCalculator';

export const CalculatorScreen = () => {
  const {
    numero,
    numeroAnt,
    clearNumber,
    addNumber,
    signChange,
    keyAdd,
    keySub,
    keyMult,
    keyDiv,
    keyDel,
    calcular,
  } = useCalculator();

  return (
    <View>
      {numeroAnt !== '0' && <Text style={theme.resultTextm}>{numeroAnt}</Text>}
      <Text style={theme.resultTextM} numberOfLines={1} adjustsFontSizeToFit>
        {numero}
      </Text>
      {/* fila 1 */}
      <View style={theme.keysRow}>
        <KeyCalculator text="C" color={colors.lightGray} action={clearNumber} />
        <KeyCalculator
          text="+/-"
          color={colors.lightGray}
          action={signChange}
        />
        <KeyCalculator text="del" color={colors.lightGray} action={keyDel} />
        <KeyCalculator text="/" color={colors.mainOrange} action={keyDiv} />
      </View>
      {/* fila 2 */}
      <View style={theme.keysRow}>
        <KeyCalculator text="7" action={addNumber} />
        <KeyCalculator text="8" action={addNumber} />
        <KeyCalculator text="9" action={addNumber} />
        <KeyCalculator text="X" color={colors.mainOrange} action={keyMult} />
      </View>
      {/* fila 3 */}
      <View style={theme.keysRow}>
        <KeyCalculator text="4" action={addNumber} />
        <KeyCalculator text="5" action={addNumber} />
        <KeyCalculator text="6" action={addNumber} />
        <KeyCalculator text="-" color={colors.mainOrange} action={keySub} />
      </View>
      {/* fila 4 */}
      <View style={theme.keysRow}>
        <KeyCalculator text="1" action={addNumber} />
        <KeyCalculator text="2" action={addNumber} />
        <KeyCalculator text="3" action={addNumber} />
        <KeyCalculator text="+" color={colors.mainOrange} action={keyAdd} />
      </View>
      {/* fila 5 */}
      <View style={theme.keysRow}>
        <KeyCalculator text="0" stretch action={addNumber} />
        <KeyCalculator text="." action={addNumber} />
        <KeyCalculator text="=" color={colors.mainOrange} action={calcular} />
      </View>
    </View>
  );
};
