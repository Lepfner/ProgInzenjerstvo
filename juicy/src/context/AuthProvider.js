import { createContext, useState } from "react";

const AuthContext = createContext({});

export const AuthProvider = ({ children }) => {
  const [auth, setAuth] = useState({});
    const [isLoggedIn, setIsLoggedIn] = useState(false);
  return (
    <AuthContext.Provider value={{ auth, isLoggedIn, setAuth, setIsLoggedIn }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;

