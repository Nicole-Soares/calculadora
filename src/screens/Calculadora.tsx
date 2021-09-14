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
        <BotonCalc texto="C" color="#9B9B9B" colorTexto="black" />
        <BotonCalc texto="+/-" color="#9B9B9B" colorTexto="black" />
        <BotonCalc texto="del" color="#9B9B9B" colorTexto="black" />
        <BotonCalc texto="/" color="#FF9427" colorTexto="black" />
      </View>
      <View style={styles.fila}>
        <BotonCalc texto="7" colorTexto="white" />
        <BotonCalc texto="8" colorTexto="white" />
        <BotonCalc texto="9" colorTexto="white" />
        <BotonCalc texto="X" colorTexto="white" />
      </View>
      <View style={styles.fila}>
        <BotonCalc texto="4" colorTexto="white" />
        <BotonCalc texto="5" colorTexto="white" />
        <BotonCalc texto="6" colorTexto="white" />
        <BotonCalc texto="-" colorTexto="white" />
      </View>
      <View style={styles.fila}>
        <BotonCalc texto="1" colorTexto="white" />
        <BotonCalc texto="2" colorTexto="white" />
        <BotonCalc texto="3" colorTexto="white" />
        <BotonCalc texto="+" colorTexto="white" />
      </View>
      <View style={styles.fila}>
        <BotonCalc texto="0" colorTexto="white" ancho />
        <BotonCalc texto="." colorTexto="white" />
        <BotonCalc texto="=" colorTexto="white" />
      </View>
    </View>
  );
}
