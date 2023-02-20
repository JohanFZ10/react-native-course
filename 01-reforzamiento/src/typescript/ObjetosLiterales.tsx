// Las interfaces se usan para definir las reglas de validacion de los datos, es decir, para definir como quiero que lusca un dato, los nombres de las interfaces, deben cumplir con el estandar PascalCase
interface Person {
    name: string;
    age: number;
    direction: Direction;
}

interface Direction {
    country: string;
    home: number;
}

export const ObjetosLiterales = () => {
  const person: Person = {
    name: "John",
    age: 34,
    direction: {
      country: "colombia",
      home: 54,
    }
  };
  return (
    <>
      <h3>Objetos Literales</h3>
      <code>
        <pre>
            {JSON.stringify(person, null, 2 )}
        </pre>
      </code>
    </>
  );
};
