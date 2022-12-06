import React from "react";
import { render, screen } from "@testing-library/react";
import App from "./App";
// import userEvent from '@testing-library/user-event'

describe("Metakey Dashboard", () => {
  describe("Dashboard", () => {
    it("should show Title", () => {
      render(<App />);
      expect(screen.getByText("Metakey Data Analysis")).toBeInTheDocument();
    });
  });
  describe("Pie Chart", () => {
    it("should show Pie chart", () => {
      render(<App />);
      expect(
        screen.getByText("Unique Holders Percentage For Each Metakey Edition")
      ).toBeInTheDocument();
    });
  });
  describe("Bar Chart", () => {
    it("should show Bar chart", () => {
      render(<App />);
      expect(
        screen.getByText(
          "Unique Holding Wallets Numbers For Each Metakey Edition"
        )
      ).toBeInTheDocument();
    });
  });
  describe("Histogram Chart", () => {
    it("should show Histogram chart", () => {
      render(<App />);
      expect(
        screen.getByText("Distribution Percentage Metakey Edition")
      ).toBeInTheDocument();
    });
  });
});
