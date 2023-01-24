import React, {useEffect} from "react";
import { useLocation, Navigate, Outlet } from "react-router-dom";
import useAuth from "../../hooks/useAuth";

const RequireAuth = ({ requireAdmin = false, requireUser = false }) => {
  const { auth, isLoggedIn } = useAuth();
  const location = useLocation();
 useEffect(() => {
 }, [])
 
  if (requireAdmin) {
    return localStorage.getItem("isLoggedIn") ? (
      auth.is_admin ? (
        <Outlet />
      ) : (
        <Navigate to="/unauthorized" state={{ from: location }} replace />
      )) : (
      <Navigate to="/login" state={{ from: location }} replace />
    );
  } 
  else if(requireUser){
     return localStorage.getItem("isLoggedIn") ? (
      auth.is_admin ? (
         <Navigate to="/unauthorized" state={{ from: location }} replace />
      ) : (
         <Outlet />
    )) : (
      <Navigate to="/login" state={{ from: location }} replace />
    );
  }
  else {
   return localStorage.getItem("isLoggedIn") ? <Outlet />
        : <Navigate to="/unauthorized" state={{ from: location }} replace />
    
  }

};

export default RequireAuth;
