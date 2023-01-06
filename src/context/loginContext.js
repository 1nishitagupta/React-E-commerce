import { useReducer } from "react";
import { useContext } from "react";
import { createContext } from "react";
import reducer from '../reducer/loginReducer'

const LoginContext = createContext();

const initialState = {
    details : [],
}
export const LoginProvider=({children})=>{
    const [state, dispatch] = useReducer(reducer, initialState);

const matchDetails=(data)=>{
return dispatch({type:"MATCH_DETAILS",payload:data})
}
    return (
        <LoginContext.Provider
          value={{ ...state, matchDetails}}
        >
          {children}
        </LoginContext.Provider>
      );
}

export const useLoginContext = () => {
    return useContext(LoginContext)
}
