import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const AdminLogin = () => {
  const [adminCode, setAdminCode] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    setAdminCode("");
  };

  return (
    <div className=" flex flex-col justify-center pl-8 pb-12 lg:w-5/6 md:w-full max-sm:pl-0 pb-8 w-full">
      <h1 className="mb-2 text-5xl lg:text-5xl max-md:text-4xl max-sm:text-3xl">
        ADMIN LOGIN:
      </h1>
      <div className="w-full flex flex-col lg:text-lg md:flex-row text-base sm:flex-col ">
        <form className="lg: w-4/5 max-md:w-full" onSubmit={handleSubmit}>
          <p>6-digit code:</p>
          <input
            required
            value={adminCode}
            pattern="[0-9]{1,6}"
            minLength={6}
            maxLength={6}
            onChange={(e) => setAdminCode(e.target.value)}
            type="text"
            className={`${
              adminCode !== "" ? `validate` : ""
            } h-14 px-2 rounded-lg bg-gray-300 mb-8 w-full lg:w-4/5 md:w-4/5`}
          />
          <div className="flex  lg:gap-8 flex-row md:flex-row gap-2 max-sm:flex-col ">
            <button
              type="submit"
              className="block bg-orange-500 px-4 rounded-md p-2 mt-4 text-white hover:bg-orange-600"
            >
              SEND
            </button>

            <button
              type="button"
              className="block bg-orange-500 px-4 rounded-md p-2 mt-4 text-white  hover:bg-orange-600"
              onClick={() => navigate("/Login")}
            >
              BACK
            </button>
          </div>
        </form>
        <div
          className=" flex justify-center border-solid border-2 mt-2 border-l-orange-500 
                      lg:h-44 text-base md:w-2/5 max-sm:h-auto"
        >
          <p className="text mb-4 font-bold w-4/5 lg:pl-2 max-sm:pl-0">
            Enter the code that was sent to your mail so we can confirm your
            identity.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AdminLogin;
