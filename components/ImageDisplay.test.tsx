import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import { ImageDisplay } from "./ImageDisplay";

describe("ImageDisplay", () => {
  it("displays loading message when loading is true", () => {
    render(<ImageDisplay loading={true} imageUrl="" />);
    screen.getByText("Loading...");
    expect(screen.getByText("Loading...")).toBeInTheDocument();
  });

  it("displays image when loading is false", () => {
    const imageUrl = "https://example.com/cat.jpg";
    const { getByRole } = render(
      <ImageDisplay loading={false} imageUrl={imageUrl} />
    );
    const img = getByRole("img");
    expect(img).toHaveAttribute("src", imageUrl);
  });
});

export {};
