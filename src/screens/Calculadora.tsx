import React from 'react';
import {Text, View} from 'react-native';
import BotonCalc from '../componentes/BotonCalc';
import {styles} from '../theme/appTheme';

export default function Calculadora() {
  return (
    <View style={styles.calculadoraConteiner}>
      <Text style={styles.resultadoPequeno}>Calculadora</Text>
      <Text style={styles.resultado}>Calculadora</Text>

      <View style={styles.fila}>
        <BotonCalc texto="C" color="#9B9B9B" />
        <BotonCalc texto="+/-" color="#9B9B9B" />
        <BotonCalc texto="del" color="#9B9B9B" />
        <BotonCalc texto="/" color="#FF9427" />
      </View>
    </View>
  );
}
