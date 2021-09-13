import React from 'react';
import {SafeAreaView, StatusBar} from 'react-native';
import Calculadora from './src/screens/Calculadora';
import {styles} from './src/theme/appTheme';

export default function App() {
  return (
    <SafeAreaView style={styles.fondo}>
      <StatusBar backgroundColor="black" />
      <Calculadora />
    </SafeAreaView>
  );
}
