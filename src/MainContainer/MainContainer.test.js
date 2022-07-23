import { render, screen } from "@testing-library/react";
import MainContainer from ".";

test("Main Container Renders correctly containing form", () => {
  render(<MainContainer />);

  const mainContainer = screen.getByRole("main");
  expect(mainContainer).toBeInTheDocument();

  const form = screen.getByRole("form");
  expect(form).toBeInTheDocument();
});
