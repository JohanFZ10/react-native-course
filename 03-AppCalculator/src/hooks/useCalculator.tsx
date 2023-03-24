import {useRef, useState} from 'react';

enum Operaciones {
  sumar,
  restar,
  multiplicar,
  dividir,
}

export const useCalculator = () => {
  const [numero, setNumero] = useState('13');
  const [numeroAnt, setNumeroAnt] = useState('0');

  const ultimaOperacion = useRef<Operaciones>();
  const clearNumber = () => {
    setNumero('0');
    setNumeroAnt('0');
  };

  const addNumber = (number: string) => {
    if (numero.includes('.') && number === '.') {
      return;
    }
    if (numero === '0' && number !== '0') {
      setNumero(number);
      if (number === '.') {
        setNumero(numero + number);
      }
    } else if (numero !== '0' && number === '.') {
      setNumero(numero + number);
    } else if (numero !== '0' && number !== '.') {
      setNumero(numero + number);
    }
  };

  const signChange = () => {
    if (numero.includes('-')) {
      setNumero(numero.replace('-', ''));
    } else {
      setNumero('-' + numero);
    }
  };

  const keyDel = () => {
    let numeroTemp = numero;
    if (numero.includes('-')) {
      numeroTemp = numero.replace('-', '');
    }
    if (numeroTemp.length === 1) {
      setNumero('0');
    } else {
      setNumero(numero.slice(0, -1));
    }
  };

  const loadNumeroAnt = () => {
    if (numero.endsWith('.')) {
      setNumeroAnt(numero.slice(0, -1));
    } else {
      setNumeroAnt(numero);
    }
    setNumero('0');
  };

  const keyAdd = () => {
    loadNumeroAnt();
    ultimaOperacion.current = Operaciones.sumar;
  };
  const keySub = () => {
    loadNumeroAnt();
    ultimaOperacion.current = Operaciones.restar;
  };
  const keyMult = () => {
    loadNumeroAnt();
    ultimaOperacion.current = Operaciones.multiplicar;
  };
  const keyDiv = () => {
    loadNumeroAnt();
    ultimaOperacion.current = Operaciones.dividir;
  };

  const calcular = () => {
    const num1 = Number(numeroAnt);
    const num2 = Number(numero);

    switch (ultimaOperacion.current) {
      case Operaciones.sumar:
        setNumero(`${num1 + num2}`);
        break;
      case Operaciones.restar:
        setNumero(`${num1 - num2}`);
        break;
      case Operaciones.multiplicar:
        setNumero(`${num1 * num2}`);
        break;
      case Operaciones.dividir:
        if (num2 !== 0) {
          setNumero(`${num1 / num2}`);
        } else {
          setNumero('No es posible');
        }
        break;
    }

    setNumeroAnt('0');
  };
  return {
    numero,
    numeroAnt,
    clearNumber,
    addNumber,
    signChange,
    keyAdd,
    keySub,
    keyMult,
    keyDiv,
    keyDel,
    calcular,
  };
};
