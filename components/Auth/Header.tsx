import React from "react";

export const Header = () => {
  return (
    <nav className="w-full flex flex-row">
      <p
        className="text-red-600 font-black text-8xl"
        style={{ textShadow: "1px 1px 1px black" }}
      >
        PokeNode
      </p>
    </nav>
  );
};
