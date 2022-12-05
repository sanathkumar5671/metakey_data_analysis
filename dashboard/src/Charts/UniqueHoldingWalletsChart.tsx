import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend
} from "recharts";

export default function UniqueHoldingWalletsChart(props:any) {
  return (
    <BarChart
      width={800}
      height={400}
      data={props['unique_holding_wallets_number']}
      margin={{
        top: 5,
        right: 30,
        left: 20,
        bottom: 100
      }}
    >
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="name" />
      <YAxis />
      <Tooltip />
      <Legend />
      <Bar dataKey="unique holding wallets" fill="#82ca9d" />
    </BarChart>
  );
}
