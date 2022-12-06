import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";

// Reference: This design of ReCharts library was taken from https://recharts.org/en-US/examples/SimpleBarChart
/**
 * This functional component is responsible to display the Unique Holding Wallets Bar Chart. 
 * The data is formatted at the backend to match the charts parameters. as shown in the reference above.
 * @param metakey_data dict of metakey data in the format -> {'uniqueHoldersPercentage':[{name: Edition 1, value:10%}]}
 * @returns BarChart HTML element
 */
export default function UniqueHoldingWalletsChart(metakey_data: any) {
  return (
    <BarChart
      width={800}
      height={400}
      data={metakey_data["unique_holding_wallets_number"]}
      margin={{
        top: 5,
        right: 30,
        left: 20,
        bottom: 100,
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
