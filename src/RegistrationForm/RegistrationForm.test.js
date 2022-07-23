import { render, screen, fireEvent } from "@testing-library/react";
import RegistrationForm from ".";

const workingTestEmail = "salma@gmail.com";
const emailTestId = "email-input";
const passwordTestId = "password-input";

const inputTestData = (emailValue, passwordValue) => {
  const emailInput = screen.getByTestId(emailTestId);
  const passwordInput = screen.getByTestId(passwordTestId);

  fireEvent.change(emailInput, { target: { value: emailValue } });
  fireEvent.change(passwordInput, { target: { value: passwordValue } });
};

const checkIsButtonDisabled = () => {
  expect(screen.getByText(/submit/i)).toBeDisabled();
};

test("RegistrationForm Renders correctly and fields exist", () => {
  render(<RegistrationForm />);

  const form = screen.getByRole("form");
  expect(form).toBeInTheDocument();

  const emailInput = screen.getByTestId("email-input");
  expect(emailInput).toBeInTheDocument();

  const passwordInput = screen.getByTestId("password-input");
  expect(passwordInput).toBeInTheDocument();

  const button = screen.getByRole("button");
  expect(button).toBeInTheDocument();
});

test("Check validations - Email", () => {
  render(<RegistrationForm />);
  inputTestData("salma", "12345@Aa");
  checkIsButtonDisabled();
});

test("Check validations - 8+ Characters", () => {
  render(<RegistrationForm />);
  inputTestData(workingTestEmail, "1234");
  checkIsButtonDisabled();
});

test("Check validations - Lowercase letter", () => {
  render(<RegistrationForm />);
  inputTestData(workingTestEmail, "123456@A");
  checkIsButtonDisabled();
});

test("Check validations - Uppercase letter", () => {
  render(<RegistrationForm />);
  inputTestData(workingTestEmail, "123456@a");
  checkIsButtonDisabled();
});

test("Check validations - number", () => {
  render(<RegistrationForm />);
  inputTestData(workingTestEmail, "abcdef@A");
  checkIsButtonDisabled();
});

test("Check validations - special character", () => {
  render(<RegistrationForm />);
  inputTestData(workingTestEmail, "abcdef23A");
  checkIsButtonDisabled();
});
