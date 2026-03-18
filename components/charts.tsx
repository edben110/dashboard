"use client";

import {
  BarElement,
  CategoryScale,
  Chart as ChartJS,
  ChartOptions,
  Filler,
  Legend,
  LineElement,
  LinearScale,
  PointElement,
  Tooltip,
} from "chart.js";
import { Bar, Line } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  PointElement,
  LineElement,
  Tooltip,
  Legend,
  Filler,
);

const engagementData = {
  labels: ["JAN", "FEB", "MAR", "APR", "MAY", "JUN"],
  datasets: [
    {
      label: "Engagement",
      data: [2.1, 4.8, 3.4, 5.2, 4.0, 4.6],
      backgroundColor: [
        "#a7d9c0",
        "#8accad",
        "#9ad2b8",
        "#2f8d5f",
        "#9ad2b8",
        "#8accad",
      ],
      borderRadius: 16,
      borderSkipped: false,
      barThickness: 40,
    },
  ],
};

const engagementOptions: ChartOptions<"bar"> = {
  responsive: true,
  maintainAspectRatio: false,
  plugins: {
    legend: { display: false },
    tooltip: {
      backgroundColor: "#1f6f4b",
      displayColors: false,
      callbacks: {
        label: (context) => `${context.parsed.y ?? 0}k`,
      },
    },
  },
  scales: {
    x: {
      grid: { display: false },
      border: { display: false },
      ticks: { color: "#798082", font: { weight: 600 } },
    },
    y: {
      min: 0,
      max: 6,
      ticks: {
        stepSize: 1,
        color: "#798082",
        callback: (value: string | number) => `${value}k`,
      },
      grid: {
        color: "#e9ebec",
      },
      border: { display: false },
    },
  },
};

const balanceData = {
  labels: ["W1", "W2", "W3", "W4", "W5", "W6", "W7"],
  datasets: [
    {
      data: [21.4, 22.2, 21.1, 22.4, 20.9, 22.0, 22.7],
      borderColor: "#3f9f72",
      borderWidth: 2,
      pointRadius: 0,
      tension: 0.4,
      fill: true,
      backgroundColor: "rgba(63, 159, 114, 0.14)",
    },
  ],
};

const balanceOptions: ChartOptions<"line"> = {
  responsive: true,
  maintainAspectRatio: false,
  plugins: {
    legend: { display: false },
    tooltip: { enabled: false },
  },
  scales: {
    x: { display: false },
    y: { display: false },
  },
  elements: {
    line: { capBezierPoints: true },
  },
};

export function EngagementChart() {
  return <Bar data={engagementData} options={engagementOptions} />;
}

export function BalanceChart() {
  return <Line data={balanceData} options={balanceOptions} />;
}
