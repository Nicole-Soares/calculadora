import React, {useState} from 'react';
import {Text, View} from 'react-native';
import BotonCalc from '../componentes/BotonCalc';
import {styles} from '../theme/appTheme';

export default function Calculadora() {
  const [numero, setNumero] = useState('100');
  const [numeroAnterior, setNumeroAnterior] = useState('0');

  const limpiar = () => {
    setNumero('0');
  };
  const armarNumero = (numeroTexto: string) => {
    setNumero(numero + numeroTexto);
  };
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
          accion={limpiar}
        />
        <BotonCalc
          texto="del"
          color="#9B9B9B"
          colorTexto="black"
          accion={limpiar}
        />
        <BotonCalc
          texto="/"
          color="#FF9427"
          colorTexto="black"
          accion={limpiar}
        />
      </View>
      <View style={styles.fila}>
        <BotonCalc texto="7" colorTexto="white" accion={armarNumero} />
        <BotonCalc texto="8" colorTexto="white" accion={armarNumero} />
        <BotonCalc texto="9" colorTexto="white" accion={armarNumero} />
        <BotonCalc texto="X" colorTexto="white" accion={limpiar} />
      </View>
      <View style={styles.fila}>
        <BotonCalc texto="4" colorTexto="white" accion={armarNumero} />
        <BotonCalc texto="5" colorTexto="white" accion={armarNumero} />
        <BotonCalc texto="6" colorTexto="white" accion={armarNumero} />
        <BotonCalc texto="-" colorTexto="white" accion={limpiar} />
      </View>
      <View style={styles.fila}>
        <BotonCalc texto="1" colorTexto="white" accion={armarNumero} />
        <BotonCalc texto="2" colorTexto="white" accion={armarNumero} />
        <BotonCalc texto="3" colorTexto="white" accion={armarNumero} />
        <BotonCalc texto="+" colorTexto="white" accion={limpiar} />
      </View>
      <View style={styles.fila}>
        <BotonCalc texto="0" colorTexto="white" ancho accion={armarNumero} />
        <BotonCalc texto="." colorTexto="white" accion={armarNumero} />
        <BotonCalc texto="=" colorTexto="white" accion={limpiar} />
      </View>
    </View>
  );
}
