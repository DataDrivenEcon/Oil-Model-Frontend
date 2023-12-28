import { render, screen, act } from "@testing-library/react";
import Navbar from "./Navbar";
import React from "react";
import { BrowserRouter as Router } from "react-router-dom";

describe("Navbar", () => {
  test("renders Navbar component", () => {
    act(() => {
      render(
        <Router>
          <Navbar />
        </Router>
      );
    });
    expect(screen.getByText("Brand Name")).toBeInTheDocument();
    expect(screen.getByText("Home")).toBeInTheDocument();
    expect(screen.getByText("Key Benefits")).toBeInTheDocument();
    expect(screen.getByText("About")).toBeInTheDocument();
    expect(screen.getByText("Contact")).toBeInTheDocument();
    expect(screen.getByText("Testimonials")).toBeInTheDocument();
    expect(screen.getByText("Log in")).toBeInTheDocument();
  });
});
