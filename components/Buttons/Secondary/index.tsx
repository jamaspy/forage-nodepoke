import React from "react";
import Link from "next/link";
interface SecondaryButtonProps {
  label: string;
  route: string;
}

export const SecondaryButton = ({ label, route }: SecondaryButtonProps) => {
  return (
    <Link
      href={route}
      className="bg-white text-slate-900 px-4 py-2 rounded-lg text-xl flex items-center"
    >
      {label}
    </Link>
  );
};
