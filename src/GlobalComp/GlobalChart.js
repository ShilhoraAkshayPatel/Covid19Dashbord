import React, { Component } from 'react';
import { HorizontalBar } from 'react-chartjs-2';

import { CardstyleforChart } from '../Card/Card'
import { Container } from 'react-bootstrap';
import Select from 'react-select'
import countryList from 'react-select-country-list'


export default class GlobalChart extends Component {

    constructor(props) {
        super(props);
        this.options = countryList().getData()
        this.state = {
            options: this.options,
            value: 'IN',
            globaldata: this.props.data
        }
    }

    componentDidMount() {

    }




    componentWillMount() {

    }

    async fetchdata() {

        if (this.state.value in this.state.globaldata) {
            console.log("yes its exits ", this.state.value)
        }

        //  const coundata = [];
        //  coundata.push(data.cases)
        //  coundata.push(data.recovered)
        //  coundata.push(data.deaths)



    }


    changeHandler = value => {

        this.setState({ value });
        this.fetchdata()
    }

    render() {

        const bardata = {
            labels: ["Cases", "Recovered", "Deaths"],
            datasets: [
                {
                    label: 'Total Cases',
                    backgroundColor: [
                        'rgba(255, 99, 132, 0.6)',
                        'rgba(54, 162, 235, 0.6)',
                        'rgba(255, 206, 86, 0.6)',
                    ],
                    borderColor: 'rgba(255,99,132,1)',
                    hoverBackgroundColor: 'rgba(255,99,132,0.4)',
                    hoverBorderColor: 'rgba(255,99,132,1)',
                    data: this.state.data
                }
            ]
        };



        return (




            <div className="chart">
                <CardstyleforChart color={'#fafffe'} >
                    <Container className="text-center">
                        <Select
                            options={this.state.options}
                            value={this.state.value}
                            onChange={this.changeHandler}
                        />
                    </Container>
                    <HorizontalBar
                        width={"900px"}
                        height={"500px"}
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

                </CardstyleforChart>
            </div>
        );
    }
}


