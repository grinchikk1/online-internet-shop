import React from "react";
import { render, fireEvent, screen } from "@testing-library/react";
import Review from "./Review";

describe("Review", () => {
  test("renders Review component", () => {
    const review = {
      name: "Dmytro",
      date: "2023-09-15",
      review: "Great product!",
      rating: 4.5,
      onDelete: jest.fn(),
    };

    const { container } = render(<Review {...review} />);
    expect(container.firstChild).toMatchSnapshot();
  });

  it("calls onClick handler when clicked", () => {
    const review = {
      name: "Dmytro",
      date: "2023-09-15",
      review: "Great product!",
      rating: 4.5,
      onDelete: jest.fn(),
    };

    render(<Review {...review} />);
    fireEvent.click(screen.getByTestId("DeleteForeverIcon"));
    expect(review.onDelete).toHaveBeenCalled();
  });
});
