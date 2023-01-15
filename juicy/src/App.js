//Styles
import "./Styles/App.css";
//Components
import AuthLayout from "./components/Auth/AuthLayout.jsx";
import Dashboard from "./components/dashboard/MainMenu"
import ProfileSetup from "./components/profileSetup/profileSetup";
import MyProfilePage from "./components/dashboard/MyProfilePage";
import ErrorPage from "./components/404";
import { Login, SignUp, Confirmation, Recovery, AdminLogin } from "./components/Auth";
import Settings from "./components/dashboard/Settings";
import UserProfile from "./components/dashboard/userProfile";
import AdminPanel from './components/dashboard/AdminPanel';
//Dependencies
import { Route, BrowserRouter, Routes } from "react-router-dom";
import React, { useEffect } from 'react';
import {AuthProvider} from "./context/AuthProvider";
import { Toaster } from "react-hot-toast";

function App() {

  useEffect(() => {
    if (!localStorage.getItem("currentColor")) {
      localStorage.setItem("currentColor", "#ef6c00");
    }
  })

  return (
    <AuthProvider>
    <Toaster/>
    <BrowserRouter>
      <Routes>
        <Route element={<AuthLayout />}>
          <Route path="/" element={<Login />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/AdminLogin" element={<AdminLogin />} />
          <Route path="/SignUp" element={<SignUp />} />
          <Route path="/Confirmation" element={<Confirmation />} />
          <Route path="/Recovery" element={<Recovery />} />
          <Route path='*' element={<ErrorPage />} />
        </Route>
        <Route path="/Main" element={<Dashboard />} />
        <Route path="/Setup" element={<ProfileSetup />} />
        <Route path="/MyProfile" element={<MyProfilePage />} />
        <Route path="/Settings" element={<Settings />} />
        <Route path="/Profile/:id" element={<UserProfile />} />
        <Route path="/AdminPanel" element={<AdminPanel />} />
      </Routes>
    </BrowserRouter> 
    </AuthProvider>
  );
}

export default App;