import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {styles} from '../theme/appTheme';

interface Props {
  texto: string;
  color?: string;
  colorTexto?: string;
  ancho?: boolean;
}

//AL PONER COLOR = "#2D2D2D", le estamos diciendo que si no se manda el color tome ese
export default function BotonCalc({
  texto,
  color = '#2D2D2D',
  colorTexto = 'white',
  ancho = false,
}: Props) {
  return (
    <TouchableOpacity>
      <View
        style={{
          ...styles.boton,
          backgroundColor: color,
          width: ancho ? 180 : 80,
        }}>
        <Text style={{...styles.botonTexto, color: colorTexto}}>{texto}</Text>
      </View>
    </TouchableOpacity>
  );
}
