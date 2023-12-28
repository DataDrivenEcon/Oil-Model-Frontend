import { screen, render } from "@testing-library/react";
import React from "react";
import KeyBenefits from "./KeyBenefits";

describe("KeyBenefits", () => {
  test("renders KeyBenefits component", () => {
    render(<KeyBenefits />);
    expect(
      screen.getByRole("heading", { name: /key benefits/i })
    ).toBeInTheDocument();
    expect(
      screen.getByRole("heading", { name: /gain a competitive edge/i })
    ).toBeInTheDocument();
    expect(
      screen.getByText(
        /access exclusive and reliable data to gain a competitive edge in the dynamic world of oil economics\./i
      )
    ).toBeInTheDocument();
    expect(
      screen.getByRole("heading", { name: /make informed decisions/i })
    ).toBeInTheDocument();
    expect(
      screen.getByRole("heading", { name: /save time and effort/i })
    ).toBeInTheDocument();
    expect(
      screen.getByRole("heading", { name: /expert support/i })
    ).toBeInTheDocument();
    expect(
      screen.getByRole("heading", {
        name: /drive efficiency and profitability/i,
      })
    ).toBeInTheDocument();
  });
});
