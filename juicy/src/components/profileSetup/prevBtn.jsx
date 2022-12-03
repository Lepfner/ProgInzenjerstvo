import React from 'react'

const PrevBtn = ({setPage}) => {
  return (
    <button
      type="button"
      className=" block bg-orange-500 px-4 rounded-md p-2 mt-4 text-white hover:bg-orange-600
                        lg:text-xl md:text-lg sm: text-lg"
      onClick={() => {
        setPage((prev) => prev - 1);
      }}
    >
      Previous
    </button>
  );
}

export default PrevBtn