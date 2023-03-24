import {StyleSheet} from 'react-native';

export const colors = {
   black: 'black',
   white: 'white',
   darkGray: '#2D2D2D',
   mainOrange: '#FF9427',
   lightGray: '#9B9B9B'
}

export const theme = StyleSheet.create({
  fondoNegro: {
    flex: 1,
    backgroundColor: 'black',
    justifyContent: 'flex-end',
  },
  resultTextM: {
    color: 'white',
    fontSize: 50,
    fontWeight: 'bold',
    alignSelf: 'flex-end',
  },
  resultTextm:{
    alignSelf: 'flex-end',
    color: 'rgba(255,255,255,0.5)',
    fontSize: 25,
  },
  keysRow:{
    flexDirection: 'row',
    justifyContent: 'space-around',
  }
});
