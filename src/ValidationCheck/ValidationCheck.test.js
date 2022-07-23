import { render, screen } from "@testing-library/react";
import ValidationCheck from ".";

const testValidationMsg = "8+ Characters";

test("ValidationCheck section Renders correctly", () => {
  render(<ValidationCheck isValid={false} validationMsg={testValidationMsg} />);

  const validationSection = screen.getByTestId("validation-section");
  expect(validationSection).toBeInTheDocument();
});

test("Show wrong checkmark when validation is invalid", () => {
  render(<ValidationCheck isValid={false} validationMsg={testValidationMsg} />);

  const checkMark = screen.getByTestId("check-mark");
  expect(checkMark).toHaveClass("wrongCheckMark");
});

test("Show right checkmark when validation is valid", () => {
  render(<ValidationCheck isValid={true} validationMsg={testValidationMsg} />);

  const checkMark = screen.getByTestId("check-mark");
  expect(checkMark).toHaveClass("rightCheckMark");
});
