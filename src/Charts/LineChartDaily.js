import React, { Component } from 'react';
import { Line } from 'react-chartjs-2';


export default class LineChartDaily extends Component {



    render() {
        const { data } = this.props
        const lineChartData = {
            labels: data.slice(-20).map(i => i.date),
            datasets: [{
                label: 'Dailyconfirmed',
                borderColor: 'rgba(255, 99, 132)',
                backgroundColor: 'rgba(255, 99, 132)',
                data: data.slice(-20).map(i => i.dailyconfirmed),
                fill: false,
            }, {
                label: 'Dailyrecovered',
                borderColor: "rgba(132, 252, 3)",
                backgroundColor: "rgba(132, 252, 3)",
                fill: false,
                data: data.slice(-20).map(i => i.dailyrecovered)
            },
            {
                label: 'Dailydeceased',
                borderColor: 'rgba(54, 162, 235)',
                backgroundColor: 'rgba(54, 162, 235)',
                fill: false,
                data: data.slice(-20).map(i => i.dailydeceased),

            }]
        }



        return (
            <div className="chart"

                style={{ marginLeft: '-100px' }}>

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
                                text: 'Corona DailyCases',
                                fontSize: 28,
                            },

                            legend: {

                                display: true,
                                labels: {
                                    fontSize: 14,
                                    boxWidth: 80,

                                    padding: 20,
                                }
                            },
                            elements: {
                                point: {
                                    radius: 4,
                                    hoverRadius: 6,

                                },

                            },
                            tooltips: {
                                mode: 'index',
                                bodyFontSize: 15,
                                bodySpacing: 10,
                                bodyFontFamily: "'Roboto', sans-serif ",
                                titleFontSize: 14,
                            },
                            hover: {
                                mode: 'index',
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


