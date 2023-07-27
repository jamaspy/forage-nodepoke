"use client";
import React from "react";
import Image from "next/image";
import { NavItem } from "./NavItem";
import { HiOutlineLogout } from "react-icons/hi";
import { logout } from "@/lib/auth/logout";
import { useRouter } from "next/navigation";
import { useIsSsr } from "@/hooks/useSsr";

export const Nav = () => {
  const router = useRouter();
  const isSsr = useIsSsr();

  // Check user is logged in
  if (!isSsr) {
    if (!localStorage.getItem("user")) {
      console.log("User Not Logged In");
      router.push("/auth/login");
    }
  }

  const handleLogout = async (e: any) => {
    e.preventDefault();
    const loggedOut = await logout();
    if (loggedOut.status === "OK") {
      console.log("LOGOUT SUCCESSFUL");
      router.push("/auth/login");
    } else {
      throw new Error("LOGOUT FAILED");
    }
  };

  return (
    <nav className="w-full bg-slate-800 p-2 flex flex-row justify-between items-center">
      <div className="md:flex flex-row items-center hidden">
        <Image src="/images/ball.webp" alt="ball" width={50} height={50} />
        <p className="text-red-600 text-2xl ml-2">NodeFlix</p>
      </div>
      <div className="flex flex-row gap-8">
        <NavItem route="/" label="Home" />
        <NavItem route="favorites" label="Favorites" />
      </div>
      <button
        onClick={(e) => handleLogout(e)}
        className="flex flex-row items-center text-white hover:text-red-600 text-xl"
      >
        <p className="mr-1">Logout</p>
        <HiOutlineLogout />
      </button>
    </nav>
  );
};
