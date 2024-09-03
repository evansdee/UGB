import { createContext, useContext, useReducer } from "react";
import { initialState, reducer } from "./reducer";

const StateContext = createContext();

export default function StateContextProvider({ children }) {

    const [state,dispatch] = useReducer(reducer,initialState)

  return <StateContext.Provider value={{state,dispatch}}>
    { children }
  </StateContext.Provider>;
}


export function useStateContext(){
    const context = useContext(StateContext)

    return context
}