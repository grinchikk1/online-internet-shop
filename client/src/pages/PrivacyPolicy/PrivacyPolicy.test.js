import React from "react";
import { render } from "@testing-library/react";
import PrivacyPolicy from "./PrivacyPolicy";

describe("PrivacyPolicy", () => {
  test("renders PrivacyPolicy page", () => {
    const { getByText } = render(<PrivacyPolicy />);
    const AboutText = getByText("Privacy Policy");
    expect(AboutText).toBeInTheDocument();
  });

  test("Snapshot Test PrivacyPolicy", () => {
    const { container } = render(<PrivacyPolicy />);
    expect(container.firstChild).toMatchSnapshot();
  });
});
