import { useState } from "react";

export const useContador = (initialValue: number = 10) => {
  const [valor, setValor] = useState(initialValue);
  const acumular = (numero: number) => {
    setValor(valor + numero);
  };

  return { valor, acumular };
};
