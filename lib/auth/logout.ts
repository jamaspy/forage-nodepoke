export const logout = async () => {
  localStorage.removeItem("user");
  return { status: "OK", message: "User logged out" };
};
