import React from "react";
import Link from "next/link";
interface NavItemProps {
  route: string;
  label: string;
}

export const NavItem = ({ route, label }: NavItemProps) => {
  return (
    <Link
      href={route}
      className="hover:underline hover:text-red-700 text-slate-100 text-xl"
    >
      {label}
    </Link>
  );
};
