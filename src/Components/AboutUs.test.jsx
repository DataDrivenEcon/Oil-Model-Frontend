import { render, screen } from "@testing-library/react";
import AboutUs from "./AboutUs";
import React from "react";

describe("AboutUs", () => {
  test("Rendering AboutUs Info Components", () => {
    render(<AboutUs />);
    const headingElements = screen.getByRole("heading", { name: /about me/i });
    const headingElementsName = screen.getByRole("heading", {
      name: /jhon doe/i,
    });
    const paragraphElement = screen.getByText(
      /lorem ipsum dolor sit amet consectetur adipisicing elit\. maxime expedita incidunt est, doloremque qui culpa mollitia sit tempora in dignissimos!/i
    );
    const whatYouDoElement = screen.getByText(/what you do/i);
    const locationElement = screen.getByText(/new yourk, usa/i);
    expect(headingElements).toBeInTheDocument();
    expect(headingElementsName).toBeInTheDocument();
    expect(paragraphElement).toBeInTheDocument();
    expect(whatYouDoElement).toBeInTheDocument();
    expect(locationElement).toBeInTheDocument();
  });
  test("Rendering AboutUs Image Components", () => {
    render(<AboutUs />);
    const facebookElement = screen.getByRole("img", {
      name: /facebook/i,
    });
    const youtubeElement = screen.getByRole("img", {
      name: /youtube/i,
    });
    const twitterElement = screen.getByRole("img", {
      name: /twitter/i,
    });
    const profileImageElement = screen.getByRole("img", {
      name: /profile picture/i,
    });

    expect(facebookElement).toBeInTheDocument();
    expect(youtubeElement).toBeInTheDocument();
    expect(twitterElement).toBeInTheDocument();
    expect(profileImageElement).toBeInTheDocument();
  });
});
