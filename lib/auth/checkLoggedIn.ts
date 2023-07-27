export const checkUserLoggedIn = async () => {
  if (typeof window !== "undefined") {
    const user = window.localStorage.getItem("user");
    if (user) {
      console.log("user", user);
      return true;
    }
  }
  return false;
};
