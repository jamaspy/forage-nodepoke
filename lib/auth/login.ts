export const Login = async (email: string, password: string) => {
  if (typeof window === "undefined") {
    return;
  }
  const newUser = {
    id: Math.random(),
    email,
    password,
  };
  localStorage.setItem("user", JSON.stringify(newUser));
  return { status: "OK", user: newUser };
};
