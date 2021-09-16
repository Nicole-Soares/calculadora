import React from 'react';
import {Text, View} from 'react-native';
import BotonCalc from '../componentes/BotonCalc';
import {styles} from '../theme/appTheme';
import useCalculadora from '../customhooks/useCalculadora';

export default function Calculadora() {
  const {
    numero,
    numeroAnterior,
    limpiar,
    armarNumero,
    positivoNegativo,
    btnDelete,
    btnDividir,
    btnMultiplicar,
    btnRestar,
    btnSumar,
    calcular,
  } = useCalculadora();
  return (
    <View style={styles.calculadoraConteiner}>
      <Text style={styles.resultadoPequeno}>{numeroAnterior}</Text>
      <Text style={styles.resultado} numberOfLines={1} adjustsFontSizeToFit>
        {numero}
      </Text>

      <View style={styles.fila}>
        <BotonCalc
          texto="C"
          color="#9B9B9B"
          colorTexto="black"
          accion={limpiar}
        />
        <BotonCalc
          texto="+/-"
          color="#9B9B9B"
          colorTexto="black"
          accion={positivoNegativo}
        />
        <BotonCalc
          texto="del"
          color="#9B9B9B"
          colorTexto="black"
          accion={btnDelete}
        />
        <BotonCalc
          texto="/"
          color="#FF9427"
          colorTexto="black"
          accion={btnDividir}
        />
      </View>
      <View style={styles.fila}>
        <BotonCalc texto="7" colorTexto="white" accion={armarNumero} />
        <BotonCalc texto="8" colorTexto="white" accion={armarNumero} />
        <BotonCalc texto="9" colorTexto="white" accion={armarNumero} />
        <BotonCalc texto="X" colorTexto="white" accion={btnMultiplicar} />
      </View>
      <View style={styles.fila}>
        <BotonCalc texto="4" colorTexto="white" accion={armarNumero} />
        <BotonCalc texto="5" colorTexto="white" accion={armarNumero} />
        <BotonCalc texto="6" colorTexto="white" accion={armarNumero} />
        <BotonCalc texto="-" colorTexto="white" accion={btnRestar} />
      </View>
      <View style={styles.fila}>
        <BotonCalc texto="1" colorTexto="white" accion={armarNumero} />
        <BotonCalc texto="2" colorTexto="white" accion={armarNumero} />
        <BotonCalc texto="3" colorTexto="white" accion={armarNumero} />
        <BotonCalc texto="+" colorTexto="white" accion={btnSumar} />
      </View>
      <View style={styles.fila}>
        <BotonCalc texto="0" colorTexto="white" ancho accion={armarNumero} />
        <BotonCalc texto="." colorTexto="white" accion={armarNumero} />
        <BotonCalc texto="=" colorTexto="white" accion={calcular} />
      </View>
    </View>
  );
}
