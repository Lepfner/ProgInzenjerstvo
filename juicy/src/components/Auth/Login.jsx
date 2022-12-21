import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import SuccessPage from "./SuccessPage";
import { toast } from "react-hot-toast";
import Typewriter from "typewriter-effect";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    setEmail("");
    setPassword("");
    setIsLoggedIn(true);
    toast.loading("Pending...");
  };

  return (
    <div
      className="flex flex-col justify-center pl-8 pb-12 
                 lg:w-full md:w-full max-sm:pl-0 pb-8 w-full"
    >
      {!isLoggedIn ? (
        <>
            <span className="lg:text-6xl mb-2 md:text-5xl sm:text-4xl inline-block w-fit flex flex-row">
              Go&nbsp;
              <Typewriter
                options={{
                  cursorClassName: "hidden",
                  strings: ["Register!", "Login!", "Explore!"],
                  autoStart: true,
                  loop: true,
                }}
              />
            </span>
          <div
            className="w-full flex flex-col lg:text-lg md:flex-row text-base 
                        sm:flex-col "
          >
            <form className="lg: w-4/5 max-md:w-full" onSubmit={handleSubmit}>
              <p>E-mail:</p>
              <input
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                type="email"
                className={`${email !== "" ? `validate` : ""
                  } h-14 px-2 rounded-lg bg-gray-300 mb-8 w-full lg:w-4/5 md:w-4/5`}
              />
              <p>Password:</p>
              <input
                required
                value={password}
                minLength={7}
                onChange={(e) => setPassword(e.target.value)}
                type="password"
                className={`${password !== "" ? `validate` : ""
                  } h-14 px-2 rounded-lg bg-gray-300 mb-8 w-full lg:w-4/5 md:w-4/5`}
              />
              <div className="flex  lg:gap-8 flex-row md:flex-row gap-2 max-sm:flex-col ">
                <button
                  type="submit"
                  className="block bg-orange-500 px-4 rounded-md p-2 mt-4 text-white 
                              hover:bg-orange-600"
                >
                  LOGIN
                </button>

                <button
                  type="button"
                  className="block bg-orange-500 px-4 rounded-md p-2 mt-4 text-white 
                             hover:bg-orange-600"
                  onClick={() => navigate("/SignUp")}
                >
                  SIGN-UP
                </button>
              </div>
            </form>
            <div
              className=" flex flex-col items-center border-solid border-2  border-l-orange-500 
                          lg:h-52 pt-6 md:w-2/5 max-sm:h-auto pt-0 mt-4"
            >
              <p className="text mb-4 font-bold w-4/5 lg:pl-4 max-sm:pl-0">
                Login using e-mail and password
              </p>

              <p className="text mb-4 font-bold w-4/5 lg:pl-4 max-sm:pl-0">
                <Link to="/Recovery">Forgot password?</Link>
              </p>
            </div>
          </div>
        </>
      ) : (
        <SuccessPage type="Login" />
      )}
    </div>
  );
};

export default Login;
