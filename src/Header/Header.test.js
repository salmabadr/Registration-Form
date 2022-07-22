import { render, screen } from "@testing-library/react";
import Header from ".";

test("Header Renders correctly", () => {
  render(<Header />);
  const header = screen.getByRole("banner");
  expect(header).toBeInTheDocument();

  const headerTitle = screen.getByRole("article");
  expect(headerTitle).toBeInTheDocument();
});
