import React from "react";
import { Link } from "react-router-dom";
const Login = () => {
  return (
    <div className="w-full">
      <h1 className="text-6xl mb-2">LOGIN:</h1>
      <div className="w-full flex flex-col sm:flex-col md:flex-row">
        <form className="w-full">
          <p>E-mail:</p>
          <input
            type="email"
            className="h-12 rounded-lg bg-gray-100 sm:w-full md:w-3/5 "
          />
          <p>Password:</p>
          <input
            type="password"
            className="h-12 rounded-lg bg-gray-100 sm:w-full md:w-3/5"
          />

          <button
            type="submit"
            className="block bg-orange-500 rounded-md p-2 w-24 mt-4 text-white"
          >
            LOGIN
          </button>
        </form>
        <div className="w-full border-solid border-2 pl-4 mt-4 md:w-2/5  border-l-orange-500">
          <p>Login using e-mail and password</p>
          <p>
            <Link to="/Recovery">forgot password?</Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
