import React from "react";

export const Row = ({ children }: any) => {
  return (
    <div className="w-full overflow-x-scroll overflow-y-hidden whitespace-nowrap">
      {children}
    </div>
  );
};
