import React, { useState, useRef, useEffect } from "react";
import NextBtn from "./nextBtn";
const PS1 = ({
  name,
  surname,
  dateOfBirth,
  gender,
  updateData,
  handleSubmit,
}) => {

  return (
    <form
      className="flex justify-center items-center flex-col lg: w-4/5 max-md:w-full"
      onSubmit={handleSubmit}
    >
      <div className=" lg:text-3xl mb-2 md: text-2xl sm: text-xl">Name:</div>
      <div className="text-xl mb-4">Step 1</div>

      <input
        required
        value={name}
        onChange={(e) => updateData({ name: e.target.value })}
        type="text"
        placeholder="placeholder"
        className="h-14 px-2 rounded-lg bg-gray-300 mb-8 w-full lg:w-4/5 md:w-4/5"
      />
      <div className=" lg:text-3xl mb-2 md: text-2xl sm: text-xl">Surname:</div>
      <input
        required
        value={surname}
        onChange={(e) => updateData({ surname: e.target.value })}
        type="text"
        className="h-14 px-2 rounded-lg bg-gray-300 mb-8 w-full lg:w-4/5 md:w-4/5"
        placeholder="placeholder"
      />
      <div className=" lg:text-3xl mb-2 md: text-2xl sm: text-xl">
        Date Of Birth:
      </div>
      <input
        required
        value={dateOfBirth}
        onChange={(e) => updateData({ dateOfBirth: e.target.value })}
        type="date"
        className="h-14 px-2 rounded-lg bg-gray-300 mb-8 w-full lg:w-4/5 md:w-4/5"
      />
      <div className=" lg:text-3xl mb-2 md: text-2xl sm: text-xl">Gender:</div>
      <div className="lg:text-3xl mb-2 md: text-2xl sm: text-xl">
        <div>
          <input
            required
            checked={gender === "Male"}
            type="radio"
            className="mr-2 mb-2 lg:text-xl md:text-lg sm: text-lg"
            value="Male"
            name="gender"
            onChange={(e) => updateData({ gender: e.target.value })}
          />
          <label className="lg:text-xl md:text-lg sm: text-lg">Male</label>
        </div>
        <div>
          <input
            required
            checked={gender === "Female"}
            type="radio"
            className="mr-2 mb-2"
            name="gender"
            value="Female"
            onChange={(e) => updateData({ gender: e.target.value })}
          />
          <label className="lg:text-xl md:text-lg sm: text-lg">Female</label>
        </div>
      </div>

      <div className="flex  lg:gap-8 flex-row md:flex-row gap-2 max-sm:flex-col ">
        <NextBtn/>
      </div>
    </form>

    // ZNAM DA NE IZGLEDA KA PUNO AL SAN NASA NES ODAKLE DA "POSUĐUJEM" PA CU IDUCI PUT PUNO VISE NAPRAVIT
  );
};
export default PS1;
