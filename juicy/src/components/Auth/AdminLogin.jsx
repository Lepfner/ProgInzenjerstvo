import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "../../api/axios";
import useAuth from "../../hooks/useAuth";
import { toast } from "react-hot-toast";
const AdminLogin = () => {
  const [adminCode, setAdminCode] = useState("");
  const navigate = useNavigate();
  const { auth, setAuth, isLoggedIn, setIsLoggedIn } = useAuth();
  const { id } = auth;

  function handleLogout()  {
    localStorage.setItem("isLoggedIn", false);
    setAuth({});
    setIsLoggedIn(false);
    navigate("/Login");
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    const toastId = toast.loading('Pending')
    try {
      const response = await axios.post(
        "/verifyOTP",
        JSON.stringify({ userId: id, otp: adminCode }),
        {
          headers: { "Content-Type": "application/json" },
        }
      );
      console.log(response);
      console.log(auth, isLoggedIn)
      toast.success("Verification successful!", {id: toastId})
      navigate("/AdminPanel") 
    } catch (error) {
      console.log(error);
      toast.error("invalid or expired OTP, try again!", { id: toastId });
    }

    setAdminCode("");
  };

  return (
    <div className=" flex flex-col justify-center pl-8 pb-12 lg:w-5/6 md:w-full max-sm:pl-0 pb-8 w-full">
      <h1 className="mb-2 text-5xl lg:text-5xl max-md:text-4xl max-sm:text-3xl">
        ADMIN LOGIN:
      </h1>
      <div className="w-full flex flex-col lg:text-lg md:flex-row text-base sm:flex-col ">
        <form className="lg: w-4/5 max-md:w-full" onSubmit={handleSubmit}>
          <p>5-digit code:</p>
          <input
            required
            value={adminCode}
            pattern="[0-9]{1,5}"
            minLength={5}
            maxLength={5}
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
              onClick={() => handleLogout()}
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
