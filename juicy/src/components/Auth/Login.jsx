import React from "react";
import { Link } from "react-router-dom";
const Login = () => {
  return (
    <div className="w-5/6 flex flex-col justify-center pl-8 pb-12 max-sm:pl-2 pb-8">
      <h1 className="lg:text-6xl mb-2 md: text-5xl sm: text-4xl">LOGIN:</h1>
      <div className="w-full flex flex-col lg:text-lg md:flex-row text-base sm:flex-col ">
        <form className="lg: w-4/5 max-md:w-full">
          <p>E-mail:</p>
          <input
            type="email"
            className="h-12 rounded-lg bg-gray-300 mb-8 w-full lg:w-4/5 md:w-4/5"
          />
          <p>Password:</p>
          <input
            type="password"
            className="h-12 rounded-lg bg-gray-300 mb-8 w-full lg:w-4/5 md:w-4/5"
          />
          <div className="flex lg:gap-8 sm: gap-4 ">
            <button
              type="submit"
              className="block bg-orange-500 rounded-md p-2 mt-4 w-24 text-white"
            >
              LOGIN
            </button>
            <button
              type="submit"
              className="block bg-orange-500 rounded-md p-2 min-w-20 mt-4 text-white"
            >
              REGISTER
            </button>
          </div>
        </form>
        <div
          className=" w-4/5 border-solid border-2 pl-4 mt-4 border-l-orange-500 
                         lg:h-40 md:w-2/5 h-40 pl-8 max-sm:h-auto"
        >
          <p className="text mb-4">Login using e-mail and password</p>

          <p>
            <Link to="/Recovery">forgot password?</Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
