import React from 'react';
import { SafeAreaView } from 'react-native';
// import { FlexScreen } from './src/screens/FlexScreen';
// import { PositionScreen } from './src/screens/PositionScreen';
// import { BoxObjetcModelScreen } from './src/screens/BoxObjetcModelScreen';
// import { DimensionsScreen } from './src/screens/DimensionsScreen';

// import {HolaMundoScreen} from './src/screens/HolaMundoScreen';
// import {ContadorScreen} from './src/screens/ContadorScreen';
import { TareaScreen } from './src/screens/TareaScreen';

const App = () => {
  return (
    <SafeAreaView style={{flex:1}}>
      {/* <ContadorScreen />; */}
      {/* <BoxObjetcModelScreen /> */}
      {/* <DimensionsScreen /> */}
      {/* <PositionScreen /> */}
      {/* <FlexScreen /> */}
      <TareaScreen />
    </SafeAreaView>
  )
};

export default App;



