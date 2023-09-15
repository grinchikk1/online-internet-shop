import React from "react";
import { render } from "@testing-library/react";
import About from "./About";

describe("About", () => {
  test("renders About page", () => {
    const { getByText } = render(<About />);
    const AboutText = getByText("About us");
    expect(AboutText).toBeInTheDocument();
  });

  test("Snapshot Test About", () => {
    const { container } = render(<About />);
    expect(container.firstChild).toMatchSnapshot();
  });
});
