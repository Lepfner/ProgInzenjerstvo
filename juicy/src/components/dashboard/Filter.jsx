import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSquareCaretDown } from "@fortawesome/free-solid-svg-icons";
import Slider from "@mui/material/Slider";

export default function Filter() {
  const [filter, setFilter] = useState(false);
  const [ageValue, setAgeValue] = useState([18, 99]);
  const [genderValue, setGenderValue] = useState("");
  const [religion, setReligion] = useState("");
  const [nationality, setNationality] = useState("");
  const [statusValue, setStatusValue] = useState("");

  const toggleFilter = () => {
    setFilter(!filter);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setAgeValue([18, 99]);
    setReligion("");
    setNationality("");
    setStatusValue("single");
  };

  return (
    <>
      <div>
        {filter && (
          <div
            className="absolute  min-h-[20rem] shadow-2xl bg-orange-500  
            rounded-b-[2.5rem] z-20 lg:w-1/4 md:w-1/3 sm:w-1/2 mr-2 top-[16%]
            xl:left-[70%] lg:left-[65%] md:left-[60%] sm:left-[40%] max-sm:right-0 max-sm:left-2 "
          >
            <form
              className="flex flex-col bg-slate-200 m-4 rounded-xl pb-4 px-4 relative"
              onSubmit={handleSubmit}
            >
              <div
                className="absolute top-2 right-2 text-red-500 text-3xl font-bold hover:cursor-pointer"
                onClick={(e) => setFilter(false)}
              >
                &times;
              </div>
              <label className="m-auto pt-[20px]">Age range:</label>
              <div className="px-[30px]">
                <Slider
                  getAriaLabel={() => "Age range"}
                  value={ageValue}
                  onChange={(e) => setAgeValue(e.target.value)}
                  valueLabelDisplay="auto"
                  max={99}
                  min={18}
                />
              </div>

              <label className="m-auto pt-[20px]">Gender:</label>
              <label className="m-auto">
                Male
                <input
                  type="radio"
                  name="gender"
                  value={genderValue}
                  onChange={(e) => setGenderValue(e.target.value)}
                />
              </label>
              <label className="m-auto">
                Female
                <input
                  type="radio"
                  name="gender"
                  value={genderValue}
                  onChange={(e) => setGenderValue(e.target.value)}
                />
              </label>

              <label className="m-auto pt-[20px]">Religion:</label>
              <input
                type="text"
                name="religion"
                value={religion}
                className="h-8 px-2 rounded-lg bg-gray-300 mb-8 w-full lg:w-4/5 md:w-4/5 m-auto"
                onChange={(e) => setReligion(e.target.value)}
              />

              <label className="m-auto">Nationality:</label>
              <input
                type="text"
                name="nationality"
                value={nationality}
                className="h-8 px-2 rounded-lg bg-gray-300 mb-8 w-full lg:w-4/5 md:w-4/5 m-auto"
                onChange={(e) => setNationality(e.target.value)}
              />

              <label className="m-auto">Relationship Status:</label>
              <select
                name="relationshipStatus"
                className="m-auto max-w-min bg-gray-300"
                value={statusValue}
                onChange={(e) => setStatusValue(e.target.value)}
              >
                <option value="single">Single</option>
                <option value="divorced">Divorced</option>
                <option value="notMarried">Not married</option>
                <option value="recentlyBrokeUp">Recently broke up</option>
                <option value="friendship">Friendship</option>
              </select>

              <button
                type="submit"
                className="block max-w-min m-auto pb-[5px] bg-orange-500 px-4 
                           rounded-md p-2 mt-4 text-white hover:bg-orange-600"
              >
                Apply
              </button>
            </form>
          </div>
        )}
        <div onClick={toggleFilter}>
          <FontAwesomeIcon
            id="logoIcon"
            className={`${filter ? "opacity-40" : "opacity-100"}`}
            icon={faSquareCaretDown}
            size="2x"
          />
        </div>
      </div>
    </>
  );
}
