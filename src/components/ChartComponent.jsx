import React, { useRef, useEffect } from 'react';
import Chart from 'chart.js/auto';

// Helper function to wrap long labels
const wrapLabel = (label, maxLength) => {
    if (typeof label !== 'string') {
        return label;
    }
    if (label.length <= maxLength) {
        return label;
    }
    const words = label.split(' ');
    let lines = [];
    let currentLine = '';
    words.forEach(word => {
        if ((currentLine + word).length <= maxLength) {
            currentLine += (currentLine === '' ? '' : ' ') + word;
        } else {
            lines.push(currentLine);
            currentLine = word;
        }
    });
    lines.push(currentLine);
    return lines;
};

const ChartComponent = ({ type, labels, data, labelText, chartId, options = {} }) => {
    const chartRef = useRef(null);
    const chartInstance = useRef(null);

    useEffect(() => {
        if (chartInstance.current) {
            chartInstance.current.destroy();
        }

        const ctx = chartRef.current.getContext('2d');

        const defaultOptions = {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: {
                    display: true,
                    position: 'top',
                    labels: {
                        font: {
                            size: 14
                        }
                    }
                },
                tooltip: {
                    callbacks: {
                        label: function(context) {
                            let label = context.dataset.label || '';
                            if (label) {
                                label += ': ';
                            }
                            if (context.parsed.y !== null) {
                                label += context.parsed.y;
                            }
                            return label;
                        }
                    }
                }
            },
            scales: {
                x: {
                    ticks: {
                        callback: function(value, index, ticks) {
                            return wrapLabel(labels[index], 16);
                        }
                    }
                },
                y: {
                    beginAtZero: true
                }
            }
        };

        const chartConfig = {
            type: type,
            data: {
                labels: labels,
                datasets: [{
                    label: labelText,
                    data: data,
                    backgroundColor: type === 'bar' ? 'rgba(59, 130, 246, 0.7)' : 'rgba(99, 102, 241, 0.7)',
                    borderColor: type === 'bar' ? 'rgb(59, 130, 246)' : 'rgb(99, 102, 241)',
                    borderWidth: 1,
                    fill: type === 'line' ? true : false,
                    tension: type === 'line' ? 0.4 : 0
                }]
            },
            options: { ...defaultOptions, ...options }
        };

        chartInstance.current = new Chart(ctx, chartConfig);

        return () => {
            if (chartInstance.current) {
                chartInstance.current.destroy();
            }
        };
    }, [type, labels, data, labelText, options, chartId]); // chartId to force re-render on switch

    return (
        <div className="chart-container">
            <canvas ref={chartRef} id={chartId}></canvas>
        </div>
    );
};

export default ChartComponent;