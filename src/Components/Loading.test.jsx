import { render, screen } from "@testing-library/react";
import Loading from "./Loading";
import React from "react";
describe("loading components test", () => {
  test("should render loading component", () => {
    render(<Loading />);
    const LoadingELements = screen.getByAltText("spiner");
    expect(LoadingELements).toBeInTheDocument();
  });
});
