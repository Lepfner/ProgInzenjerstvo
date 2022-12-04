import "./Styles/App.css";
import { Route, BrowserRouter, Routes } from "react-router-dom";
import AuthLayout from "./components/Auth/AuthLayout.jsx";
import Dashboard from "./components/dashboard/MainMenu.js"
import ProfileSetup from "./components/profileSetup/profileSetup";
import {
  Login,
  SignUp,
  Confirmation,
  Recovery,
  AdminLogin,
} from "./components/Auth";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<AuthLayout />}>
          <Route path="/Login" element={<Login />}/>
          <Route path="/AdminLogin" element={<AdminLogin/>}/>
          <Route path="/SignUp" element={<SignUp />}/>
          <Route path="/Confirmation" element={<Confirmation />}/>
          <Route path="/Recovery" element={<Recovery />}/>
        </Route>
        <Route path="/Main" element={<Dashboard currentPage={localStorage.getItem("current")}/>}/>
        <Route path="/Setup" element={<ProfileSetup/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
