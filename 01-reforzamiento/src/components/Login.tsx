import { useReducer, useEffect } from "react";

// Cuando se usa el hook Reducer, se recomienda usar interfaces para definir el tipado del estado inicial
interface AuthState {
  validando: boolean;
  token: string | null;
  userName: string;
  name: string;
}

const initialState: AuthState = {
  validando: true,
  token: null,
  userName: "",
  name: "",
};

type authAction = { type: "logout" };
const authReducer = (state: AuthState, action: authAction): AuthState => {
  switch (action.type) {
    case "logout":
      return {
        validando: false,
        token: null,
        userName: "",
        name: "",
      };
    default:
      return state;
  }
};
export const Login = () => {
  const [state, dispatch] = useReducer(authReducer, initialState);

  useEffect(() => {
    setInterval(() => {
      dispatch({ type: "logout" });
    }, 1500);
  }, []);

  if (state.validando) {
    return <div className="alert alert-info">Validando...</div>;
  }
  return (
    <>
      <h3>Login</h3>
      <div className="alert alert-danger">No autenticado</div>
      <div className="alert alert-success">Autenticado</div>
      <button className="btn btn-primary">Login</button>
      <button className="btn btn-danger">Logout</button>
    </>
  );
};
