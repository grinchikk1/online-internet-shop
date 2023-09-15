import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import CustomSnackBar from "./CustomSnackBar";

describe("CustomSnackbar", () => {
  test("renders CustomSnackBar component", () => {
    const onClose = jest.fn();
    const { getByText } = render(
      <CustomSnackBar
        open={true}
        onClose={onClose}
        text="This is a test message"
        titleText="Test Title"
        severity="success"
      />
    );
    const snackbarText = getByText("This is a test message");
    expect(snackbarText).toBeInTheDocument();
  });

  test("Snapshot Test CustomSnackBar", () => {
    const onClose = jest.fn();
    const { container } = render(
      <CustomSnackBar
        open={true}
        onClose={onClose}
        text="This is a test message"
        titleText="Test Title"
        severity="success"
      />
    );
    expect(container.firstChild).toMatchSnapshot();
  });

  it("calls onClick handler when clicked", () => {
    const onClickMock = jest.fn();
    render(
      <CustomSnackBar
        open={true}
        onClose={onClickMock}
        text="This is a test message"
        titleText="Test Title"
        severity="success"
      />
    );
    fireEvent.click(screen.getByLabelText("Close"));
    expect(onClickMock).toHaveBeenCalled();
  });
});
