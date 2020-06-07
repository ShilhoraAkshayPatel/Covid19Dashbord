import React, { Component } from 'react';
import { Line } from 'react-chartjs-2';


class LineChart extends Component {

    render() {
        const { data } = this.props
        const lineChartData = {
            type: 'line',
            labels: data.slice(-50).map(i => i.date),
            datasets: [{
                label: 'Totalconfirmed',
                borderColor: 'rgba(255, 99, 132)',
                backgroundColor: 'rgba(255, 99, 132)',
                data: data.slice(-50).map(i => i.totalconfirmed),
                fill: false,
            }, {
                label: 'Totalrecovered',
                borderColor: "rgba(132, 252, 3)",
                backgroundColor: "rgba(132, 252, 3)",
                fill: false,
                data: data.slice(-50).map(i => i.totalrecovered),

            }, {
                label: 'Totaldeceased',
                borderColor: 'rgba(54, 162, 235)',
                backgroundColor: 'rgba(54, 162, 235)',
                fill: false,
                data: data.slice(-50).map(i => i.totaldeceased),

            }]
        }



        return (
            <div className="chart"
                style={{ marginLeft: '-100px' }}
            >

                <Line
                    width={'1100px'}
                    height={'800px'}
                    data={lineChartData}
                    options={
                        {
                            responsive: true,
                            intersect: true,
                            title: {
                                display: true,
                                text: 'Corona TotalCases',
                                fontSize: 28,
                            },
                            legend: {

                                display: true,
                                labels: {
                                    fontSize: 14,
                                    boxWidth: 80,
                                    padding: 14,
                                }
                            },
                            tooltips: {
                                mode: 'index',
                                intersect: false,
                                bodyFontSize: 15,
                                bodySpacing: 14,
                                bodyFontFamily: "'Roboto', sans-serif ",
                                titleFontSize: 14,
                            },
                            hover: {
                                mode: 'index',

                            },
                            elements: {
                                point: {
                                    radius: 4,
                                    hoverRadius: 6,

                                },

                            },


                            scales: {
                                yAxes: [{
                                    position: 'right',
                                    ticks: {

                                        fontSize: 14,
                                        fontFamily: "'Roboto', sans-serif ",
                                        fontStyle: 'bold'
                                    }
                                }],
                                xAxes: [{
                                    ticks: {
                                        fontSize: 14,
                                        fontFamily: "'Roboto', sans-serif ",
                                        fontStyle: 'bold'
                                    }
                                }],
                                x: {
                                    display: true,

                                    scaleLabel: {

                                        display: true,
                                        labelString: 'Month'
                                    }
                                },
                                y: {
                                    display: true,

                                    scaleLabel: {

                                        display: true,
                                        labelString: 'Value'
                                    }
                                }
                            }
                        }
                    }

                />
            </div>
        )
    }
}

export default LineChart;

