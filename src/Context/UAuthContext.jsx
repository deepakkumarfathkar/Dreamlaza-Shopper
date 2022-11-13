import { useState } from "react";
import React from "react";

export const UAuthContext = React.createContext();

function UAuthContextProvider({ children }) {
  const [state, setState] = useState({
    isAuth: false,
    token: null,
  });
  
  const loginUser = (token) => {
    setState({
      ...state,
      isAuth: true,
      token,
    });
  };
  const logoutUser = () => {
    setState({
      ...state,
      isAuth: false,
      token: null,
    });
  };

  return (
    <UAuthContext.Provider value={{ authState: state, loginUser, logoutUser }}>
      {children}
    </UAuthContext.Provider>
  );
}

export default UAuthContextProvider;