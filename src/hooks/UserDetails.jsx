/* eslint-disable react/prop-types */

import { createContext, useContext } from "react";
import { useLocalStorageState } from "./useLocalStorageState";

const UserDetailContext = createContext();

export default function UserDetailsProvider({ children }) {
  const [value, setValue] = useLocalStorageState({}, "user");
  return (
    <UserDetailContext.Provider value={{ value, setValue }}>
      {children}
    </UserDetailContext.Provider>
  );
}

export function useLocalUser() {
  const context = useContext(UserDetailContext);
  if (!context) throw new Error("not here");
  return context;
}
