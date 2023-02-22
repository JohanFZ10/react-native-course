import useForm from '../hooks/useForm';
const Formularios = () => {
  const {formulario, email, password, age, onChangeHandler}=useForm({
    email: "john@example.com",
    password: "1234",
    age: 15
  })
  return (
    <>
      <h3>Formularios</h3>
      <input 
        type="text" 
        placeholder="email" 
        value={email}
        onChange={({target})=>{onChangeHandler(target.value, "email")}} 
      />
      <input 
        type="password" 
        placeholder="password" 
        value={password} 
        onChange={({target})=>{onChangeHandler(target.value, "password")}} 
      />
      <input 
        type="text" 
        placeholder="age" 
        value={age} 
        onChange={({target})=>{onChangeHandler(target.value, "age")}} 
      />
      <code>
        <pre>
          {JSON.stringify(formulario, null, 2)}
        </pre>
      </code>
    </>
  );
};

export default Formularios;
