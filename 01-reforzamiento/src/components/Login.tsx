import useLogin from '../hooks/useLogin';


export const Login = () => {
  const {validando, token, name, loginAction, logoutAction} = useLogin()
  
  if (validando) {
    return <div className="alert alert-info">Validando...</div>;
  }
  return (
    <>
      <h3>Login</h3>
      {token ? (
        <>
          <div className="alert alert-success">Autenticado como: {name} </div>
          <button className="btn btn-danger" onClick={logoutAction}>Logout</button>
        </>
      ) : (
        <>
          <div className="alert alert-danger">No autenticado</div>
          <button className="btn btn-primary" onClick={loginAction}>
            Login
          </button>
        </>
      )}
    </>
  );
};
