import React from "react";
interface GridProps {
  children: React.ReactNode;
}

export const Grid = ({ children }: GridProps) => {
  return (
    <main className="w-full grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4 p-4">
      {children}
    </main>
  );
};
