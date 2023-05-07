// definir como luce o que informacion tendre aqui 

import { Children, createContext, useReducer } from "react";
import { authReducer } from "./authReducer";

export interface AuthState {
    isLoggedIn: boolean;
    username?: string;
    faavoriteIcon?: string;
}

// Estado inicial 
export const authInitialState: AuthState = {
    isLoggedIn: false,
    username: undefined,
    faavoriteIcon: undefined,
}


// lo usaremos para decirle a react  como luce y que expone el context

export interface AuthContextProps {
    authState: AuthState;
    signIn: () => void;
}

// crear contexto

export const AuthContext = createContext( {} as AuthContextProps );

// proveedor del estado 

export const AuthProvider = ({ children }: any ) => {

    const [ authState, dispatch ] = useReducer( authReducer, authInitialState );

    const signIn = () => {
        dispatch({ type: "signIn" });
    }

    return (
        <AuthContext.Provider value={{
            authState,
            signIn
        }}>
            { children }
        </AuthContext.Provider>
    )
}







