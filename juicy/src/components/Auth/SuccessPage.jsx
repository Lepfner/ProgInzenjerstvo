import React from "react";

const SuccessPage = ({ type }) => {
  return (
    <div className="h-40 flex flex-col justify-between max-sm:h-32">
      <h1 className="mb-4 lg:text-6xl md:text-5xl sm: text-4xl">
        Successful {type}
      </h1>
      <p className="lg:text-2xl font-bold w-full md:text-xl sm: text-lg">
        you will be redirected shortly...
      </p>
    </div>
  );
};

export default SuccessPage;
