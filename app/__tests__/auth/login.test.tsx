import { Login } from "@/lib/auth/login"; // assuming your function is in authService.ts

describe("Login", () => {
  beforeEach(() => {
    Storage.prototype.setItem = jest.fn();
  });

  it("stores user data in localStorage", async () => {
    const email = "test@test.com";
    const password = "password";

    const result = await Login(email, password);

    expect(result).toHaveProperty("status", "OK");
    expect(result).toHaveProperty("user");
    expect(result?.user).toHaveProperty("email", email);
    expect(result?.user).toHaveProperty("password", password);

    expect(localStorage.setItem).toHaveBeenCalledWith(
      "user",
      JSON.stringify(result?.user)
    );
  });
});
