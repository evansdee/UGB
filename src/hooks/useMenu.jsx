import { createContext, useContext, useState } from "react";

const ToggleContext = createContext();

function ToggleProvider({ children }) {
  const [isSideToggle, setIsSideToggle] = useState(false);

  return (
    <ToggleContext.Provider value={{ isSideToggle, setIsSideToggle }}>
      {children}
    </ToggleContext.Provider>
  );
}

export {ToggleContext,ToggleProvider}

// export function useMenu(){
//     const context = useContext()

//     return context
// }
