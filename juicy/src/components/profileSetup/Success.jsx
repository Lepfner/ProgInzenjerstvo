import React from "react";
import PrevBtn from "./prevBtn";
import { useNavigate } from "react-router-dom";
const Success = ({ setPage }) => {
  const navigate = useNavigate();
  return (
    <div className="mt-20">
      <h1 className="mb-12 lg:text-6xl md:text-5xl sm: text-4xl">
        Successful Setup!
      </h1>
      <div
        className="flex justify-center lg:gap-8 flex-row md:flex-row gap-2 max-sm:flex-col 
                      lg:text-xl md:text-lg sm: text-lg"
      >
        <PrevBtn setPage={setPage} />
        <button
          className="block bg-orange-500 px-4 rounded-md p-2 mt-4 text-white hover:bg-orange-600"
          onClick={() => navigate("/Main")}
        >
          Dashboard
        </button>
      </div>
    </div>
  );
};

export default Success;
