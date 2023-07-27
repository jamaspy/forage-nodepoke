import React from "react";
import { Footer, Header, LoginForm } from "@/components/Auth";

const LoginPage = () => {
  return (
    <div className="bg-black min-h-screen flex flex-col items-center justify-between bg-login bg-cover bg-center p-4">
      <Header />
      <LoginForm />
      <Footer />
    </div>
  );
};

export default LoginPage;
