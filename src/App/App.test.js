import { render, screen } from "@testing-library/react";
import App from ".";

test("App Renders correctly", () => {
  render(<App />);
  const header = screen.getByRole("banner");
  expect(header).toBeInTheDocument();
});
