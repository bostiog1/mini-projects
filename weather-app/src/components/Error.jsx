import React from "react";

const Error = () => {
  return (
    <div className="text-red-600 flex justify-center items-center mt-4">
      <i className="fa-solid fa-circle-exclamation"></i>
      <span className="ml-2">Unknown City</span>
    </div>
  );
};

export default Error;
