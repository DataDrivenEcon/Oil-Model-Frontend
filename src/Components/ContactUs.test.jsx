import React from "react";
import { render, screen } from "@testing-library/react";
import ContactUs from "./ContactUs";
describe("ContactUs component test", () => {
  test("should render ContactUs component Info", () => {
    render(<ContactUs />);
    expect(screen.getByText("Contact Us")).toBeInTheDocument();
    expect(screen.getByText("Address")).toBeInTheDocument();
    expect(screen.getByText("Phone")).toBeInTheDocument();
    expect(screen.getByText("Email")).toBeInTheDocument();
  });

  test("should render ContactUs component form", () => {
    render(<ContactUs />);
    expect(screen.getByPlaceholderText("Full Name")).toBeInTheDocument();
    expect(screen.getByPlaceholderText("Email")).toBeInTheDocument();
    expect(screen.getByPlaceholderText("Your Message")).toBeInTheDocument();
    expect(screen.getByRole("button")).toBeInTheDocument();
  });
});
