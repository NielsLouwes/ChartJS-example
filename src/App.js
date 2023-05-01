import { useState } from "react";
import BarChart from "./components/BarChart";
import StackedBarChart from "./components/StackedBarChart";
import { holidayData } from "./Data";
import "./styles.css";

// need to loop over my keys and return them in an array
const vacationDayCategories = Object.keys(holidayData);
const vacationDayValues = Object.values(holidayData);

export default function App() {
  // 1. Chart.js requires an object with two keys - labels, and datasets
  // 1.1 Make sure your data is in the right format, see keys and values above

  // 2. You can set your chart data in a piece of useState like below
  const [vacationData, setVacationData] = useState({
    labels: vacationDayCategories.map((item) => item),
    datasets: [
      {
        label: "Available holidays by type",
        data: vacationDayValues.map((value) => value),
        backgroundColor: [
          "rgb(215,32,65)",
          "rgb(39, 151, 254)",
          "rgb(89,190,61)",
          "rgb(128,89,176)"
        ],
        borderColor: "Black",
        borderWidth: 3
      }
    ]
  });

  const data = {
    labels: ["Holiday Data"],
    datasets: [
      {
        label: "Statutory Days",
        data: [holidayData.statutoryDays],
        backgroundColor: "rgba(75, 192, 192, 0.6)"
      },
      {
        label: "Non-Statutory Days",
        data: [holidayData.nonStatutoryDays],
        backgroundColor: "rgba(255, 99, 132, 0.6)"
      },
      {
        label: "Non-Statutory Carry Over Days",
        data: [holidayData.nonStatutoryCarryOverDays],
        backgroundColor: "rgba(255, 206, 86, 0.6)"
      },
      {
        label: "Expiring Days",
        data: [holidayData.expiringDays],
        backgroundColor: "rgba(153, 102, 255, 0.6)"
      }
    ],
    borderColor: "Black",
    borderWidth: 3
  };

  const options = {
    scales: {
      y: {
        beginAtZero: true
      },
      x: {
        stacked: true
      },
      y: {
        stacked: true
      }
    }
  };

  return (
    <div className="App">
      <BarChart chartData={vacationData} />
      <StackedBarChart data={data} options={options} />
    </div>
  );
}
