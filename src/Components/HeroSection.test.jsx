import { act, render, screen } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";
import HeroSection from "./HeroSection";
import Navbar from "./Navbar";
import React from "react";

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  componentDidCatch(error, errorInfo) {
    this.setState({ hasError: true });
    console.error("Test component error:", error);
  }

  render() {
    if (this.state.hasError) {
      return <div>Something went wrong during rendering.</div>;
    }

    return this.props.children;
  }
}

describe("HeroSection Rendering Correctly", () => {
  test("HeroSection Rendering Correctly Info", async () => {
    render(
      <ErrorBoundary>
        <Router>
          <HeroSection>
            <Navbar />
          </HeroSection>
        </Router>
      </ErrorBoundary>
    );
    const heroSectionTitle = await screen.findByRole("heading", {
      name: /leverage your expertise with premium oil economics data/i,
    });
    const paragraphElements = screen.getByText(
      /welcome to oildata solutions, the premier platform for unlocking the full potential of oil economics data\. whether you're an experienced oil economist, a research institution, or an industry professional, our comprehensive data sets will empower you to make informed decisions, gain valuable insights, and stay ahead of the competition\./i
    );
    const infoButton = screen.getByRole("button", { name: /more info/i });
    const getPremiumButton = screen.getByRole("button", {
      name: /get premium/i,
    });
    expect(heroSectionTitle).toBeInTheDocument();
    expect(paragraphElements).toBeInTheDocument();
    expect(infoButton).toBeInTheDocument();
    expect(getPremiumButton).toBeInTheDocument();
  });

  test("Div has background image", async () => {
    await act(async () => {
      render(
        <ErrorBoundary>
          <Router>
            <HeroSection>
              <Navbar />
            </HeroSection>
          </Router>
        </ErrorBoundary>
      );
      await new Promise((resolve) => setTimeout(resolve, 0));
    });

    const divElement = screen.getByTestId("heroSection");
    const computedStyles = window.getComputedStyle(divElement);
    const backgroundImage = computedStyles.getPropertyValue("background-image");

    expect(backgroundImage).not.toBe("none");
  });
});
