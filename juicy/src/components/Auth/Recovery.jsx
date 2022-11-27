import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Recovery = () => {
  const [email, setEmail] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    setEmail("");
  };

  return (
    <div className="flex flex-col justify-center pl-8 pb-12 lg:w-full max-sm:pl-0 pb-8">
      <h1 className="lg:text-5xl mb-2 md: text-5xl sm: text-4xl">RECOVERY:</h1>
      <div className="w-full flex flex-col lg:text-lg md:flex-row text-base sm:flex-col ">
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
          <div className="flex lg:gap-8 flex-row md:flex-row gap-2 max-sm:flex-col ">
            <button
              type="submit"
              className="block bg-orange-500 px-4 rounded-md p-2 mt-4 text-white hover:bg-orange-600"
            >
              SEND
            </button>

            <button
              type="button"
              className="block bg-orange-500 px-4 rounded-md p-2 mt-4 text-white hover:bg-orange-600"
              onClick={() => navigate("/Login")}
            >
              BACK
            </button>
          </div>
        </form>
        <div
          className="flex justify-center border-solid border-2 mt-4 border-l-orange-500 
                         lg:h-40 md:w-2/5 max-sm:h-auto"
        >
          <p className="text mb-4 font-bold w-4/5 lg:pl-2 max-sm:pl-0">
            Write your e-mail so we can send you your information.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Recovery;
