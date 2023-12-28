import React from "react";
import { render, screen } from "@testing-library/react";
import Testimonials from "./Testimonials";
describe("Testimonials", () => {
  test("renders Testimonials component", () => {
    render(<Testimonials />);
    expect(
      screen.getByRole("heading", { name: /what people are saying\./i })
    ).toBeInTheDocument();
    const getAllImageElements = screen.getAllByRole("img");
    expect(getAllImageElements.length).toBe(6);
    const getALlHeadingElements = screen.getAllByRole("heading", {
      label: 6,
    });
    expect(getALlHeadingElements.length).toBe(8);
  });
});
