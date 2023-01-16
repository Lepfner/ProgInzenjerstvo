//Dependencies
import React, { useCallback, useState, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSquareCaretDown } from "@fortawesome/free-solid-svg-icons";
//Material UI
import Slider from "@mui/material/Slider";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
//Components
import useClickOutside from "./colorPicker/useClickOutside";

export default function Filter() {
  const popover = useRef();
  const [filter, setFilter] = useState(false);
  const [ageValue, setAgeValue] = useState([18, 99]);
  const [genderValue, setGenderValue] = useState("");
  //const [religion, setReligion] = useState("");
  //const [nationality, setNationality] = useState("");
  const [statusValue, setStatusValue] = useState("");
  const color = localStorage.getItem("currentColor");

  const toggleFilter = () => {
    setFilter(!filter);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (ageValue[0] !== 18 || ageValue[1] !== 99 || genderValue !== "" || statusValue !== "") {
      localStorage.setItem("ageMin", ageValue[0]);
      localStorage.setItem("ageMax", ageValue[1]);
      localStorage.setItem("eyeColor", statusValue);
      window.location.reload(false);
    }
  };

  const close = useCallback(() => {
    setFilter(false);
  }, []);
  useClickOutside(popover, close);

  return (
    <>
      <div>
        {filter && (
          <div
            className="absolute  min-h-[20rem] shadow-2xl bg-skin-primary 
            rounded-b-[2.5rem] z-20 lg:w-1/4 md:w-1/3 sm:w-1/2 mr-2 top-[16%]
            xl:left-[70%] lg:left-[65%] md:left-[60%] sm:left-[40%] max-sm:right-0 max-sm:left-2 "
            ref={popover}
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
                  sx={{
                    color: color,
                  }}
                />
              </div>
              <div>
                <FormControl>
                  <label>Gender</label>
                  <RadioGroup
                    aria-labelledby="demo-controlled-radio-buttons-group"
                    name="controlled-radio-buttons-group"
                    value={genderValue}
                    onChange={(e) => setGenderValue(e.target.value)}
                    sx={{}}
                  >
                    <FormControlLabel
                      value="female"
                      control={
                        <Radio
                          sx={{
                            color: color,
                            "&.Mui-checked": {
                              color: color,
                            },
                          }}
                        />
                      }
                      label="Female"
                    />
                    <FormControlLabel
                      value="male"
                      control={
                        <Radio
                          sx={{
                            color: color,
                            "&.Mui-checked": {
                              color: color,
                            },
                          }}
                        />
                      }
                      label="Male"
                    />
                  </RadioGroup>
                </FormControl>
              </div>
              {/*
              <label className="m-auto pt-[20px]">Religion:</label>
              <input
                type="text"
                name="religion"
                value={religion}
                className="h-8 px-2 rounded-lg bg-gray-300 mb-8 w-full lg:w-4/5 md:w-4/5 m-auto"
                onChange={(e) => setReligion(e.target.value)}
               /> */}
              {/*
              <label className="m-auto">Nationality:</label>
              <input
                type="text"
                name="nationality"
                value={nationality}
                className="h-8 px-2 rounded-lg bg-gray-300 mb-8 w-full lg:w-4/5 md:w-4/5 m-auto"
                onChange={(e) => setNationality(e.target.value)}
              /> */}
              <label className="m-auto">Eye Color:</label>
              <select
                name="relationshipStatus"
                className="m-auto max-w-min bg-gray-300"
                value={statusValue}
                onChange={(e) => setStatusValue(e.target.value)}
              >
                <option value="Green">Green</option>
                <option value="Blue">Blue</option>
                <option value="Brown">Brown</option>
                <option value="Other">Other</option>
              </select>
              <button
                type="submit"
                className="block max-w-min m-auto pb-[5px] bg-skin-primary px-4 
                           rounded-md p-2 mt-4 text-white"
              >
                Apply
              </button>
            </form>
          </div>
        )}
        <div onClick={toggleFilter}>
          <FontAwesomeIcon
            id="logoIcon"
            className={`${filter ? "opacity-40" : "opacity-100"} text-skin-a11y`}
            icon={faSquareCaretDown}
            size="2x"
          />
        </div>
      </div>
    </>
  );
}
