import { createContext, useState } from "react";

const AuthContext = createContext({});

export const AuthProvider = ({ children }) => {
  const [auth, setAuth] = useState({});
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userSet, setUser] = useState([]);
  
  return (
    <AuthContext.Provider value={{ auth, isLoggedIn, setAuth, setIsLoggedIn, userSet, setUser }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
