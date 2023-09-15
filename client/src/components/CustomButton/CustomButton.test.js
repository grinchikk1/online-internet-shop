import React from "react";
import { render, fireEvent, screen } from "@testing-library/react";
import CustomButton from "./CustomButton";

describe("CustomButton", () => {
  test("renders CustomButton component", () => {
    const onClick = jest.fn();
    const { getByText } = render(
      <CustomButton value="Button" onClick={onClick} />
    );
    const CustomButtonText = getByText("Button");
    expect(CustomButtonText).toBeInTheDocument();
  });

  test("Snapshot Test CustomButton", () => {
    const { container } = render(<CustomButton />);
    expect(container.firstChild).toMatchSnapshot();
  });

  it("calls onClick handler when clicked", () => {
    const onClickMock = jest.fn();
    render(<CustomButton value="Click me" onClick={onClickMock} />);
    fireEvent.click(screen.getByText("Click me"));
    expect(onClickMock).toHaveBeenCalled();
  });
});
