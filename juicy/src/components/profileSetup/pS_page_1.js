import React, { Compontent } from "react";

const PS1 = ({ page, setPage }) => {
  return (
    <div className="flex justify-center items-center flex-col lg: w-4/5 max-md:w-full">
      <div className="step-title text-xl mb-4">Step 1</div>
      <div className=" lg:text-3xl mb-2 md: text-2xl sm: text-xl">Name:</div>
      <input
        type="text"
        placeholder="placeholder"
        className="h-14 px-2 rounded-lg bg-gray-300 mb-8 w-full lg:w-4/5 md:w-4/5"
      />
      <div className=" lg:text-3xl mb-2 md: text-2xl sm: text-xl">Surname:</div>
      <input
        type="text"
        className="h-14 px-2 rounded-lg bg-gray-300 mb-8 w-full lg:w-4/5 md:w-4/5"
        placeholder="placeholder"
      />
      <div className=" lg:text-3xl mb-2 md: text-2xl sm: text-xl">
        Date Of Birth:
      </div>
      <input
        type="date"
        className="h-14 px-2 rounded-lg bg-gray-300 mb-8 w-full lg:w-4/5 md:w-4/5"
      />
      <div className=" lg:text-3xl mb-2 md: text-2xl sm: text-xl">Gender:</div>
      <div className="lg:text-3xl mb-2 md: text-2xl sm: text-xl">
        <div>
          <input
            type="radio"
            className="mr-2 mb-2 lg:text-xl md:text-lg sm: text-lg"
            value="Male"
            name="gender"
          />
          <label className="lg:text-xl md:text-lg sm: text-lg">Male</label>
        </div>
        <div>
          <input
            type="radio"
            className="mr-2 mb-2"
            value="Female"
            name="gender"
          />
          <label className="lg:text-xl md:text-lg sm: text-lg">Female</label>
        </div>
      </div>

      <div className="flex  lg:gap-8 flex-row md:flex-row gap-2 max-sm:flex-col ">
        <button
          className="block bg-orange-500 px-4 rounded-md p-2 mt-4 text-white hover:bg-orange-600
                      lg:text-xl md:text-lg sm: text-lg"
          onClick={() => {
            setPage(page + 1);
          }}
        >
          Next
        </button>
      </div>
    </div>

    // ZNAM DA NE IZGLEDA KA PUNO AL SAN NASA NES ODAKLE DA "POSUĐUJEM" PA CU IDUCI PUT PUNO VISE NAPRAVIT
  );
};
export default PS1;
