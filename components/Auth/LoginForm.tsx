"use client";
import React from "react";
import { InputRow } from "../Forms";
import { PrimaryButton } from "../Buttons";
import { Login } from "@/lib/auth/login";
import { useRouter } from "next/navigation";
import classNames from "classnames";
export const LoginForm = () => {
  const router = useRouter();
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const isDisabled = email.length === 0 || password.length === 0;
  const handleLogin = async (e: any) => {
    e.preventDefault();
    const login = await Login(email, password);
    if (login && login.status === "OK") {
      router.push("/");
      console.log("LOGIN SUCCESSFUL");
    } else {
      throw new Error("LOGIN FAILED");
    }
  };

  return (
    <div className="bg-slate-800 bg-opacity-80 p-12 rounded-xl w-full max-w-md">
      <p className="font-semibold text-4xl text-white mb-4">Sign in</p>
      <form className="h-full flex flex-col justify-between">
        <InputRow
          name="email"
          label="Email"
          value={email}
          setValue={setEmail}
          inputType="email"
        />
        <InputRow
          name="password"
          label="Password"
          value={password}
          setValue={setPassword}
          inputType="password"
        />
        <PrimaryButton
          disabled={isDisabled}
          label="Login"
          onClick={handleLogin}
        />
      </form>
    </div>
  );
};
