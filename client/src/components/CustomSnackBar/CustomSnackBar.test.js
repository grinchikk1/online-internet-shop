import React from "react";
import { render } from "@testing-library/react";
import CustomSnackBar from "./CustomSnackBar";

describe("CustomSnackbar", () => {
  test("renders without crashing", () => {
    const { container } = render(<CustomSnackBar />);
    expect(container).toBeInTheDocument();
  });
});
