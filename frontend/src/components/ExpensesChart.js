import React from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Pie } from 'react-chartjs-2';

ChartJS.register(ArcElement, Tooltip, Legend);

export default function ExpenseChart({categories, label}) {
    let chartLabels = []
    let chartData = []
    for (const [key, value] of Object.entries(categories)) {
        chartLabels.push(key.charAt(0).toUpperCase() + key.slice(1))
        chartData.push(value)
    }
      
    const data = {
        labels: chartLabels,
        datasets: [
        {
            label: label,
            data: chartData,
            backgroundColor: [
            'rgba(255, 99, 132, 0.2)',
            'rgba(54, 162, 255, 0.2)',
            'rgba(255, 206, 86, 0.2)',
            'rgba(75, 252, 112, 0.2)',
            'rgba(153, 102, 255, 0.2)',
            'rgba(255, 159, 64, 0.2)',
            'rgba(40, 230, 230, 0.2)',
            ],
            borderColor: [
            'rgba(255, 99, 132, 1)',
            'rgba(54, 162, 255, 1)',
            'rgba(255, 206, 86, 1)',
            'rgba(75, 252, 112, 1)',
            'rgba(153, 102, 255, 1)',
            'rgba(255, 159, 64, 1)',
            'rgba(40, 230, 230, 1)',
            ],
            borderWidth: 1,
        },
        ],
    };
    
    return (
        <div className='w-96'>
            <Pie data={data} />
        </div>
    )
}

