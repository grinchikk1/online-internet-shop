import React from "react";
import { render, screen } from "@testing-library/react";
import CircularLoader from "./Loader";

describe("CircularLoader", () => {
  test("should render a circular progress", async () => {
    render(<CircularLoader />);
    const progress = screen.getByRole("progressbar");
    expect(progress).toBeInTheDocument();
  });

  test("should have a specific size", async () => {
    render(<CircularLoader />);
    const progress = screen.getByRole("progressbar");
    expect(progress).toHaveStyle({
      width: "60px",
      height: "60px",
    });
  });

  test("should have a specific color", async () => {
    render(<CircularLoader />);
    const progress = screen.getByRole("progressbar");
    expect(progress).toHaveStyle({
      color: "#707070",
    });
  });


  test("Snapshot Test CircularLoader", () => {
    const { container } = render(<CircularLoader />);
    expect(container.firstChild).toMatchSnapshot();
  });
});
