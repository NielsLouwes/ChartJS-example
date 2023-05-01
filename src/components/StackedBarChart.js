import { Bar } from "react-chartjs-2";
import { Chart as ChartJS } from "chart.js/auto";

export default function StackedBarChart({ data, options }) {
  return (
    <div className="App">
      <h1>Stacked Bar Chart</h1>
      <div>
        <Bar data={data} options={options} />
      </div>
    </div>
  );
}
