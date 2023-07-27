// import { render, fireEvent, waitFor } from "@testing-library/react";
// import { useRouter } from "next/router";
// import { LoginForm } from "./LoginForm";
// import { Login } from "@/lib/auth/login";

// jest.mock("next/router", () => ({
//   useRouter: jest.fn(),
// }));

// jest.mock("../../lib/auth/login");

// const push = jest.fn().mockResolvedValue(true);

// const mockRouter = {
//   route: "/",
//   pathname: "/",
//   query: {},
//   asPath: "/",
//   basePath: "",
//   isFallback: false,
//   isReady: true,
//   isLocaleDomain: false,
//   isPreview: false,
//   forward: jest.fn(),
//   events: {
//     on: jest.fn(),
//     off: jest.fn(),
//     emit: jest.fn(),
//   },
//   push,
//   replace: jest.fn(),
//   reload: jest.fn(),
//   back: jest.fn(),
//   beforePopState: jest.fn(),
//   prefetch: jest.fn(),
//   locale: "en",
//   locales: ["en"],
//   defaultLocale: "en",
// };

// describe("LoginForm", () => {
//   it("calls login function on form submission", async () => {
//     const mockLogin = Login as jest.MockedFunction<typeof Login>;
//     mockLogin.mockResolvedValue({
//       status: "OK",
//       user: { id: 1, email: "test@test.com", password: "password" },
//     });

//     (useRouter as jest.MockedFunction<typeof useRouter>).mockImplementation(
//       () => mockRouter
//     );

//     const { getByLabelText, getByText } = render(<LoginForm />);
//     const emailInput = getByLabelText("Email");
//     const passwordInput = getByLabelText("Password");
//     const loginButton = getByText("Login");

//     fireEvent.change(emailInput, { target: { value: "test@test.com" } });
//     fireEvent.change(passwordInput, { target: { value: "password" } });
//     fireEvent.click(loginButton);

//     await waitFor(() => {
//       expect(mockLogin).toHaveBeenCalledWith("test@test.com", "password");
//       expect(push).toHaveBeenCalledWith("/");
//     });
//   });
// });
