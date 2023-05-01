import { Bar } from "react-chartjs-2";
import { Chart as ChartJS } from "chart.js/auto";

export default function BarChart({ chartData }) {
  return (
    <div className="App">
      <h1>Bar Chart</h1>
      <div>
        <Bar data={chartData} />
      </div>
    </div>
  );
}
