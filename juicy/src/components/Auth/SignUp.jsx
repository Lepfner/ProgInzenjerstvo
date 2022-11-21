import React, { useState } from "react";
import { Link } from "react-router-dom";
import toast from "react-hot-toast";

const SignUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirm, setPasswordConfirm] = useState("")
  const [error, setError] = useState("")
 
  const handleSubmit = (e) => {
    e.preventDefault();
    if(password !== passwordConfirm){
      setError("Passwords do not match!")
      toast.error("Passwords do not match!");
      return 
    }
    toast.loading("Pending...");
  };

  return (
    <div
      className="flex flex-col justify-center pl-8 pb-12 
                  lg:w-5/6 md:w-full max-sm:pl-0 pb-8 w-full"
    >
      <h1 className="lg:text-6xl mb-2 md: text-5xl sm: text-4xl">SIGN-UP:</h1>
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
            className={`${
              email !== "" ? `validate` : ""
            } h-14 px-2 rounded-lg bg-gray-300 mb-8 w-full lg:w-4/5 md:w-4/5`}
          />
          <p>Password:</p>
          <input
            required
            value={password}
            minLength={7}
            onChange={(e) => setPassword(e.target.value)}
            type="password"
            className={`${
              password !== "" ? `validate` : ""
            } h-14 px-2 rounded-lg bg-gray-300 mb-8 w-full lg:w-4/5 md:w-4/5`}
          />
          <p>Confirm password:</p>
          <input
            required
            value={passwordConfirm}
            minLength={7}
            onChange={(e) => setPasswordConfirm(e.target.value)}
            type="password"
            className={`${
              passwordConfirm !== "" ? `validate` : ""
            } h-14 px-2 rounded-lg bg-gray-300 mb-8 w-full lg:w-4/5 md:w-4/5`}
          />
          <div className="flex  lg:gap-8 flex-row md:flex-row gap-2 max-sm:flex-col ">

            <button
              type="submit"
              className="block bg-orange-500 px-4 rounded-md p-2 mt-4 text-white 
                          hover:bg-orange-600"
            >
              SIGN-UP
            </button>
          </div>
        </form>
        <div
          className=" flex flex-col items-center border-solid border-2  border-l-orange-500 
                         lg:h-80 pt-6 md:w-2/5 max-sm:h-auto pt-0 mt-4"
        >
          <p className="text mb-4 font-bold w-4/5 lg:pl-4 max-sm:pl-0">
            Login using e-mail and password
          </p>

          <p className="text mb-4 font-bold w-4/5 lg:pl-4 max-sm:pl-0">
            Already have account? <Link to="/Login">Log in</Link>
          </p>
        </div>
      </div>
    </div>
  );
}

export default SignUp