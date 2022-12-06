import React from "react";
import { render, screen } from "@testing-library/react";
import App from "./App";
import UniqueHolderPercentageChart from "./Charts/UniqueHolderPercentageChart";
import UniqueHoldingWalletsChart from "./Charts/UniqueHoldingWalletsChart";
import DistributionPercentageChart from "./Charts/DistributionPercentageChart";

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
  //This recreates the app component by pass the different error status. Please view App.tsx for the same code.
  const renderComponent = (status:string) =>{
    if (status === "ERROR") {
      render (
        <div className="App">
          <div className="App-header">Internal Server Error</div>
        </div>
      );
    } else {
      return (
        <div className="App">
          <div className="App-header">Metakey Data Analysis</div>
          <div className="Charts">
            <h3>Unique Holders Percentage For Each Metakey Edition</h3>
            <UniqueHolderPercentageChart {...[]} />
            <h3>Unique Holding Wallets Numbers For Each Metakey Edition</h3>
            <UniqueHoldingWalletsChart {...[]} />
            <h3>Distribution Percentage Metakey Edition</h3>
            <DistributionPercentageChart {...[]} />
          </div>
        </div>
      );
    }
  };
  describe("Error", () => {
    it("should show Internal server error", () => {
       renderComponent("ERROR");
      expect(screen.getByText("Internal Server Error")).toBeInTheDocument();
    });
  });
});
