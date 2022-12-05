import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend
} from "recharts";


export default function DistributionPercentageChart(props:any) {
  return (
    <BarChart
      width={800}
      height={400}
      data={props['distribution_percentage']}
      margin={{
        top: 5,
        right: 30,
        left: 20,
        bottom: 100
      }}
      barSize={20}
    >
      <XAxis dataKey="name" scale="band" padding={{ left: 10, right: 10 }} />
      <YAxis />
      <Tooltip />
      <Legend />
      <CartesianGrid strokeDasharray="3 3" />
      <Bar dataKey="distribution percentage" fill="#8884d8" background={{ fill: "#eee" }} />
    </BarChart>
  );
}
