import React from "react";

function ErrorPage(){
  return (
    <div className="h-40 flex flex-col justify-between max-sm:h-32">
      <h1 className="mb-4 lg:text-7xl md:text-5xl sm: text-4xl">
        404
      </h1>
      <p className="lg:text-2xl font-bold w-full md:text-xl sm: text-lg">
        Oops! Page not found....
      </p>
    </div>
  );
};

export default ErrorPage;