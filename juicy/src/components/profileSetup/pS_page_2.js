import React from "react";

const PS2 = ({ page, setPage }) => {
  return (
    <div className="flex justify-center items-center flex-col lg:text-3xl w-4/5 md: text-2xl sm: text-xl">
      <div className="step-title mb-4 text-xl">Step 2</div>
      <div className=" ">Status:</div>
      <select className="text-xl mb-4">
        <option value="unmarried">unmarried</option>
        <option value="married">married</option>
      </select>
      <div className="mb-2 ">Nationality:</div>
      <input
        type="text"
        className="text-lg h-14 px-2 rounded-lg bg-gray-300 mb-8 w-full lg:w-4/5 md:w-4/5"
        placeholder="placeholder"
      />
      <div className="mb-2">Religion:</div>
      <textarea
        className="text-lg h-14 px-2 rounded-lg bg-gray-300 mb-8 w-full lg:w-4/5 md:w-4/5"
        placeholder="placeholder"
      />
      <div className="flex lg:gap-8 flex-row md:flex-row gap-2 max-sm:flex-col">
        <button
          className=" block bg-orange-500 px-4 rounded-md p-2 mt-4 text-white hover:bg-orange-600
                        lg:text-xl md:text-lg sm: text-lg"
          onClick={() => {
            setPage(page - 1);
          }}
        >
          Previous
        </button>
        <button
          className=" block bg-orange-500 px-4 rounded-md p-2 mt-4 text-white hover:bg-orange-600
                      lg:text-xl md:text-lg sm: text-lg"
          onClick={() => {
            setPage(page + 1);
          }}
        >
          Next
        </button>
        <br />
      </div>
    </div>

    // ZNAM DA NE IZGLEDA KA PUNO AL SAN NASA NES ODAKLE DA "POSUĐUJEM" PA CU IDUCI PUT PUNO VISE NAPRAVIT
  );
};
export default PS2;
