import React from 'react';
import {SafeAreaView, StatusBar} from 'react-native';
import {styles} from './src/theme/appTheme';
import Calculadora from './src/screens/calculadora';
export default function App() {
  return (
    <SafeAreaView style={styles.fondo}>
      <StatusBar backgroundColor="black" />
      <Calculadora />
    </SafeAreaView>
  );
}
