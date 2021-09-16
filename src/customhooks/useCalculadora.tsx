import {useState, useRef} from 'react';
enum Operadores {
  sumar,
  restar,
  multiplicar,
  dividir,
}

export default function useCalculadora() {
  const [numero, setNumero] = useState('0');
  const [numeroAnterior, setNumeroAnterior] = useState('0');
  const ultimaOperacion = useRef<Operadores>();

  const limpiar = () => {
    setNumero('0');
    setNumeroAnterior('0');
  };
  const armarNumero = (numeroTexto: string) => {
    //no aceptar doble punto
    if (numero.includes('.') && numeroTexto === '.') {
      return;
    }
    if (numero.startsWith('0') || numero.startsWith('-0')) {
      //Punto decimal
      if (numeroTexto === '.') {
        setNumero(numero + numeroTexto);
      }
      //Evaluar si es otro cero y hay un punto
      else if (numeroTexto === '0' && numero.includes('.')) {
        setNumero(numero + numeroTexto);
      }
      // evaluar si es diferente de cero y no tiene un punto
      else if (numeroTexto !== '0' && !numero.includes('.')) {
        setNumero(numeroTexto);
      }
      //evitar el 0000.0
      else if (numeroTexto === '0' && !numero.includes('.')) {
        setNumero(numero);
      } else {
        setNumero(numero + numeroAnterior);
      }
    } else {
      setNumero(numero + numeroTexto);
    }
  };

  const positivoNegativo = () => {
    if (numero.includes('-')) {
      setNumero(numero.replace('-', ' '));
    } else {
      setNumero(numero.replace('', '-'));
    }
  };

  const btnDelete = () => {
    let numeroTemp = numero;
    if (numeroTemp.length > 1) {
      setNumero(numeroTemp.slice(0, -1));
    } else {
      setNumero('0');
    }
  };

  const cambiarNumPorAnterior = () => {
    if (numero.endsWith('.')) {
      setNumeroAnterior(numero.slice(0, -1));
    } else {
      setNumeroAnterior(numero);
    }
    setNumero('0');
  };

  const btnDividir = () => {
    cambiarNumPorAnterior();
    ultimaOperacion.current = Operadores.dividir;
  };

  const btnMultiplicar = () => {
    cambiarNumPorAnterior();
    ultimaOperacion.current = Operadores.multiplicar;
  };

  const btnRestar = () => {
    cambiarNumPorAnterior();
    ultimaOperacion.current = Operadores.restar;
  };

  const btnSumar = () => {
    cambiarNumPorAnterior();
    ultimaOperacion.current = Operadores.sumar;
  };

  const calcular = () => {
    const num1 = Number(numero);
    const num2 = Number(numeroAnterior);

    if (ultimaOperacion.current === Operadores.sumar) {
      setNumero(`${num1 + num2}`);
    } else if (ultimaOperacion.current === Operadores.restar) {
      setNumero(`${num2 - num1}`);
    } else if (ultimaOperacion.current === Operadores.multiplicar) {
      setNumero(`${num1 * num2}`);
    } else if (ultimaOperacion.current === Operadores.dividir) {
      setNumero(`${num2 / num1}`);
    }

    setNumeroAnterior('0');
  };
  return {
    numero,
    numeroAnterior,
    limpiar,
    armarNumero,
    positivoNegativo,
    btnDelete,
    cambiarNumPorAnterior,
    btnDividir,
    btnMultiplicar,
    btnRestar,
    btnSumar,
    calcular,
  };
}