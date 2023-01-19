import React from "react";
import NextBtn from "./nextBtn";

const today = new Date();
const PS1 = ({
  name,
  surname,
  date_of_birth,
  gender,
  updateData,
  handleSubmit,
}) => {
  const format = (get) => {
    return get + 1 < 10 ? "0" : "";
  };

  const maxDate = `${today.getFullYear() - 18
  }-${format(today.getMonth())
  }${today.getMonth() + 1
  }-${format(today.getDay())
  }${today.getDay() + 1}`;

  return (
    <form
      className="flex justify-center items-center flex-col lg: w-4/5 max-md:w-full"
      onSubmit={handleSubmit}
    >
      <p className="text-xl mb-4">Step 1</p>
      <p className=" lg:text-3xl mb-2 md: text-2xl sm: text-xl">Name:</p>
      <input
        required
        value={name}
        onChange={(e) => updateData({ name: e.target.value })}
        type="text"
        placeholder="placeholder"
        className="h-14 px-2 rounded-lg bg-gray-300 mb-8 w-full lg:w-4/5 md:w-4/5"
      />
      <p className=" lg:text-3xl mb-2 md: text-2xl sm: text-xl">Surname:</p>
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
        value={date_of_birth}
        onChange={(e) => updateData({ date_of_birth: e.target.value })}
        type="date"
        max={maxDate}
        className="h-14 px-2 rounded-lg bg-gray-300 mb-8 w-full lg:w-4/5 md:w-4/5"
      />
      <p className=" lg:text-3xl mb-2 md: text-2xl sm: text-xl">Gender:</p>
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

      <div className="flex w-full justify-center lg:gap-8 flex-row md:flex-row gap-2 max-sm:flex-col ">
        <NextBtn />
      </div>
    </form>
  );
};
export default PS1;
