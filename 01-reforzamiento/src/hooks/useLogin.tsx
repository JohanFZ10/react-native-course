import { useReducer, useEffect } from 'react';

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
  
  type LoginActionPayload = { name: string; userName: string };
  
  type authAction =
    | { type: "logout" }
    | { type: "login"; payload: LoginActionPayload };
  
  const authReducer = (state: AuthState, action: authAction): AuthState => {
    switch (action.type) {
      case "logout":
        return {
          validando: false,
          token: null,
          userName: "",
          name: "",
        };
      case "login":
        const { name, userName } = action.payload;
        return {
          validando: false,
          token: "ABCD1234",
          userName,
          name,
        };
      default:
        return state;
    }
  };

const useLogin = () => {
    const [{validando, token, name}, dispatch] = useReducer(
        authReducer,
        initialState
      );
      const loginAction = () => {
        dispatch({
          type: "login",
          payload: {
            userName: "JohanFZ10",
            name: "Johan",
          },
        });
      };
    
      const logoutAction = () => {
        dispatch({
          type: "logout"
        });
      };
    
      useEffect(() => {
        setTimeout(() => {
          console.log("Action: Logout");
          logoutAction()
        }, 1500);
      }, []);

      return {
        validando, 
        token, 
        name,
        loginAction,
        logoutAction
      }
}

export default useLogin
