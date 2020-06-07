import React, { Component } from 'react';
import { HorizontalBar } from 'react-chartjs-2';



export default class BarExample extends Component {
    render() {
        const { data } = this.props
        const bardata = {
            labels: data.slice(0, 10).map(item => item.statecode),
            datasets: [
                {
                    label: 'Total Cases',
                    backgroundColor: [
                        'rgba(255, 99, 132, 0.6)',
                        'rgba(54, 162, 235, 0.6)',
                        'rgba(255, 206, 86, 0.6)',
                        'rgba(75, 192, 192, 0.6)',
                        'rgba(153, 102, 255, 0.6)',
                        'rgba(255, 159, 64, 0.6)',
                        'rgba(255, 99, 132, 0.6)',
                        'rgb(75, 192, 192)',
                        'rgb(54, 162, 235)',
                        'rgb(153, 102, 255)',
                        'rgb(201, 203, 207)'
                    ],
                    borderColor: 'rgba(255,99,132,1)',
                    hoverBackgroundColor: 'rgba(255,99,132,0.4)',
                    hoverBorderColor: 'rgba(255,99,132,1)',
                    data: data.slice(0, 10).map(item => item.confirmed)
                }
            ]
        };

        return (
            <div className="chart"
                style={{ marginLeft: '-100px' }}
            >

                <HorizontalBar
                    width={'1100px'}
                    height={'800px'}
                    data={bardata}
                    options={
                        {
                            responsive: true,
                            intersect: true,
                            title: {
                                display: true,
                                text: 'Top 10 Most Affected Cities',
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
        );
    }
}


