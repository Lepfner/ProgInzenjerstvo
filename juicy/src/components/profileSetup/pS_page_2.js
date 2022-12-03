import React from "react";
import NextBtn from "./nextBtn";
import PrevBtn from "./prevBtn";

const PS2 = ({
  updateData,
  handleSubmit,
  setPage,
  nationality,
  religion,
}) => {
  return (
    <form
      className="flex justify-center items-center flex-col lg:text-3xl w-4/5 md: text-2xl sm: text-xl"
      onSubmit={handleSubmit}
    >
      <div className="step-title mb-4 text-xl">Step 2</div>
      <div className=" ">Status:</div>
      <select
        className="text-xl mb-4"
        onChange={(e) => updateData({ status: e.target.value })}
        required
      >
        <option value="unmarried">unmarried</option>
        <option value="married">married</option>
      </select>
      <div className="mb-2 ">Nationality:</div>
      <input
        required
        value={nationality}
        onChange={(e) => updateData({ nationality: e.target.value })}
        type="text"
        className="text-lg h-14 px-2 rounded-lg bg-gray-300 mb-8 w-full lg:w-4/5 md:w-4/5"
        placeholder="placeholder"
      />
      <div className="mb-2">Religion:</div>
      <textarea
        required
        value={religion}
        onChange={(e) => updateData({ religion: e.target.value })}
        className="text-lg max-h-[5rem] min-h-[3.5rem] h-14 px-2 rounded-lg bg-gray-300 mb-8 w-full lg:w-4/5 md:w-4/5"
        placeholder="placeholder"
      />
      <div className="flex lg:gap-8 flex-row md:flex-row gap-2 max-sm:flex-col">
        <PrevBtn setPage={setPage}/>
        <NextBtn/>
      
      </div>
    </form>

    // ZNAM DA NE IZGLEDA KA PUNO AL SAN NASA NES ODAKLE DA "POSUĐUJEM" PA CU IDUCI PUT PUNO VISE NAPRAVIT
  );
};
export default PS2;
