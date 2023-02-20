import { useState } from "react";

const Contador = () => {
  const [valor, setValor] = useState(0);
  const acumular = (numero: number) => {
    setValor(valor + numero);
  };

  return (
    <>
      <h3>
        Contador <span>{valor}</span>
      </h3>
      <button className="btn btn-danger" onClick={() => acumular(+1)}>
        +1
      </button>
      <button className="btn btn-danger" onClick={() => acumular(-1)}>
        -1
      </button>
    </>
  );
};

export default Contador;
