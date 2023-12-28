import React from "react";
import { render, screen } from "@testing-library/react";
import Footer from "./Footer";

describe("Footer", () => {
  test("renders Footer component", () => {
    render(<Footer />);
    expect(
      screen.getByText(/copyright © 2023 \- all right reserved/i)
    ).toBeInTheDocument();
  });
  test("footer link renders", () => {
    render(<Footer />);
    const getAllLinkElements = screen.getAllByRole("link", {
      hidden: true,
    });

    expect(getAllLinkElements.length).toBe(3);
  });
});
