import React from "react";

const Loading = () => {
  return (
    <div className="flex justify-center items-center mt-4">
      <div className="loader">
        <span className="loader-circle bg-gray-700"></span>
        <span className="loader-circle bg-gray-700"></span>
        <span className="loader-circle bg-gray-700"></span>
      </div>
    </div>
  );
};

export default Loading;
