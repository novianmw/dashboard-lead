"use client"

import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from "chart.js"
import { Line } from "react-chartjs-2"

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend)

export const options = {
    plugins: {
        legend: {
            title: {
                display: true,
                text: "Cash Flow",
            },
        },
    },
    responsive: true,
}

const labels = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]

export const data = {
    labels,
    datasets: [
        {
            label: "Subscription",
            data: labels.map(() => Math.floor(Math.random() * 1000000)),
            backgroundColor: "rgb(123, 115, 235)",
            borderColor: "rgb(123, 115, 235)",
        },
        {
            label: "Outcome",
            data: labels.map(() => Math.floor(Math.random() * 10000000)),
            backgroundColor: "rgb(53, 162, 235)",
            borderColor: "rgb(53, 162, 235)",
        },
        {
            label: "Income",
            data: labels.map(() => Math.floor(Math.random() * 10000000)),
            backgroundColor: "rgb(75, 192, 192)",
            borderColor: "rgb(75, 192, 192)",
        },
        {
            label: "Balance",
            data: labels.map(() => Math.floor(Math.random() * 10000000)),
            backgroundColor: "rgb(255, 99, 132)",
            borderColor: "rgb(255, 99, 132)",
        },
    ],
}

export default function Statistics() {
    return (
        <div className="w-full flex items-start py-5">
            <Line options={options} data={data} />
        </div>
    )
}
