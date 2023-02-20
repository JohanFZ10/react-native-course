import { useContador } from '../hooks/useContador';

const ContadorConHook = () => {
  const {valor, acumular} = useContador(5)
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

export default ContadorConHook;
