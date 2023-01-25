import { createContext, useState } from "react";

const AuthContext = createContext({});

export const AuthProvider = ({ children }) => {
  const ageMin = localStorage.getItem("ageMin");
  const ageMax = localStorage.getItem("ageMax");
  const setAgeRange = () => {
    if (ageMin && ageMax) 
      return [ageMin, ageMax];

    return [18, 99];
  };

  const [auth, setAuth] = useState({});
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userSet, setUser] = useState([]);
  const [ageValue, setAgeValue] = useState(setAgeRange());
  const [genderValue, setGenderValue] = useState("male");
  const [eyecolorValue, setEyecolorValue] = useState("All");

  return (
    <AuthContext.Provider
      value={{ auth, isLoggedIn, setAuth, setIsLoggedIn, userSet, setUser,
               ageValue, setAgeValue, genderValue, setGenderValue,
               eyecolorValue, setEyecolorValue }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
