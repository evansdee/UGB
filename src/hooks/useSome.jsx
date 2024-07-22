/* eslint-disable react/prop-types */

import { createContext, useContext, useEffect, useState } from "react";

// Create a Context
const CheckContext = createContext();

// Create a provider component
const CheckProvider = ({ children }) => {
  const [check, setCheck] = useState('');

  // const handleScroll = () => {
  //   const offset = window.scrollY;
  //   if (offset > 50) {
  //     setCheck('all');
  //   } else {
  //     setCheck(null);
  //   }
  // };

  // useEffect(() => {
  //   window.addEventListener("scroll", handleScroll);
  //   return () => {
  //     window.removeEventListener("scroll", handleScroll);
  //   };
  // }, []);

  return (
    <CheckContext.Provider value={{ check, setCheck }}>
      {children}
    </CheckContext.Provider>
  );
};

// function useCheck() {
//   const context = useContext(CheckContext);

//   return context;
// }

export { CheckContext, CheckProvider };
