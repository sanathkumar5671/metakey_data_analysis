import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";
// Reference: This design of ReCharts library was taken from https://recharts.org/en-US/examples/BiaxialBarChart
/**
 * This functional component is responsible for displaying the distribution percentage Histogram chart.
 * The Bar chart of Recharts is modified in such a way that it can be used as a Histogram chart. Please refer to
 * the reference above for more information.
 * @param metakey_data dict of metakey data in the format -> {'uniqueHoldersPercentage':[{name: Edition 1, value:10%}]}
 * @returns Histogram HTML element
 */
export default function DistributionPercentageChart(metakey_data: any) {
  return (
    <BarChart
      width={800}
      height={400}
      data={metakey_data["distribution_percentage"]}
      margin={{
        top: 5,
        right: 30,
        left: 20,
        bottom: 100,
      }}
      barSize={20}
    >
      <XAxis dataKey="name" scale="band" padding={{ left: 10, right: 10 }} />
      <YAxis />
      <Tooltip />
      <Legend />
      <CartesianGrid strokeDasharray="3 3" />
      <Bar
        dataKey="distribution percentage"
        fill="#8884d8"
        background={{ fill: "#eee" }}
      />
    </BarChart>
  );
}
