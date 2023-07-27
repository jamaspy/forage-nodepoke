import React from "react";
import { FaSpinner } from "react-icons/fa";
export const LoadingScreen = () => {
  return (
    <div className="text-3xl text-white bg-profile bg-cover md:bg-right bg-center min-h-screen flex flex-col items-center justify-center">
      <div className="flex flex-row items-center justify-center text-white">
        <FaSpinner className="animate-spin mr-2" />
        <p>Loading...</p>
      </div>
    </div>
  );
};
