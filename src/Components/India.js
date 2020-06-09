import React, { Component } from 'react'
import axios from 'axios'

import { Container, Row, Col } from 'react-bootstrap';

import { FadeTransform } from 'react-animation-components';


import CardView from '../Card/CardView';
import TableView from '../Table/TableView';
import LineChartDaily from '../Charts/LineChartDaily';
import LineChart from '../Charts/LineChart';
import BarChart from '../Charts/BarChart';
import Loader from '../Components/Loading';

import Update from '../Components/Update'


import '../Components/india.css'




export default class India extends Component {

    constructor() {
        super();

        this.state = {

            todaysdata: {},
            statewise: [],
            casetimeseries: [],
            tested: {},
            update: [],
            disticwisedata: [],
            essential: [],
            isloading: false,
            width: 0,
            height: 0,
        };

    }



    componentDidMount() {
        this.getResolution();
        this.fetchdata();
    }

    getResolution() {
        if (window.innerWidth < 1400) {
            this.setState({
                width: 700,
                height: 520
            })
        }
        else if (window.innerWidth > 1400 && window.innerWidth < 1925) {
            this.setState({
                width: 800,
                height: 630
            })
        }

    }


    async fetchdata() {
        this.setState({ isloading: !this.state.isloading });

        const NationalData = axios.get("https://api.covid19india.org/data.json");

        const DisticwiseData = axios.get("https://api.covid19india.org/state_district_wise.json");

        const EssentialsData = axios.get("https://api.covid19india.org/resources/resources.json");

        const updates = axios.get("https://api.covid19india.org/updatelog/log.json")

        axios.all([NationalData, DisticwiseData, EssentialsData, updates]).then(
            axios.spread((...responses) => {
                const NationalData = responses[0].data;
                const DisticwiseData = responses[1].data;
                // const stateChanges = responses[2].data;
                const EssentialsData = responses[2].data;

                const update = responses[3].data.slice(-5);


                const [todayData] = NationalData.statewise.slice(0, 1);

                const casesTimeline = NationalData.cases_time_series;

                const statewise = NationalData.statewise.slice(1);
                const testeddata = NationalData.tested.slice(-1)[0];

                this.setState(
                    {
                        todaysdata: todayData,
                        statewise: statewise,
                        casetimeseries: casesTimeline,
                        tested: testeddata,
                        update: update,
                        disticwisedata: DisticwiseData,
                        essential: EssentialsData,
                        isloading: false,
                    }
                );


                console.log("todaysdata:", this.state.todaysdata,
                    "statewise:", this.state.statewise,
                    "casetimeseries:", this.state.casetimeseries,
                    "tested:", this.state.tested,
                    "update:", this.state.update,
                    "disticwisedata:", this.state.disticwisedata,
                    "essential:", this.state.essential);

            })
        );

    }
    render() {

        return (

            <>
                {
                    (this.state.isloading) ?
                        <Loader />

                        :

                        <>
                            <>
                                <Container >

                                    <Row >
                                        <FadeTransform in

                                            transformProps={{
                                                exitTransform: 'scale(0.8) translateX(-50%)'
                                            }}
                                        >
                                            <Col>
                                                <CardView
                                                    textcolor={'#FF073A'}
                                                    color={'rgba(255, 99, 132, 0.5)'}
                                                    deltadata={this.state.todaysdata.deltaconfirmed}
                                                    data={this.state.todaysdata.confirmed}
                                                    title={"Confirmed"} />
                                            </Col>
                                        </FadeTransform >

                                        <FadeTransform in

                                            transformProps={{
                                                exitTransform: 'scale(0.5) translateY(-50%)'
                                            }}
                                        >
                                            <Col >
                                                <CardView
                                                    textcolor={'#007BFF'}
                                                    color={'rgba(54, 162, 235, 0.5)'}
                                                    data={this.state.todaysdata.active}
                                                    title={"Active"} />
                                            </Col>
                                        </FadeTransform>

                                        <FadeTransform in

                                            transformProps={{
                                                exitTransform: 'scale(0.5) translateY(-50%)'
                                            }}
                                        >
                                            <Col >
                                                <CardView
                                                    textcolor={'#39AE54'}
                                                    color={'rgba(75, 192, 192, 0.5)'}
                                                    deltadata={this.state.todaysdata.deltarecovered}
                                                    data={this.state.todaysdata.recovered}
                                                    title={"Recovered"} />
                                            </Col>
                                        </FadeTransform>

                                        <FadeTransform in

                                            transformProps={{
                                                exitTransform: 'scale(0.8) translateX(50%)'
                                            }}
                                        >
                                            <Col >
                                                <CardView
                                                    textcolor={''}
                                                    color={'rgba(153, 102, 255, 0.5)'}
                                                    deltadata={this.state.todaysdata.deltadeaths}
                                                    data={this.state.todaysdata.deaths}
                                                    title={"Deceased"} />

                                            </Col>
                                        </FadeTransform>


                                        <Update data={this.state.update} />
                                    </Row>


                                </Container>

                            </>
                            <>
                                <Container fluid >
                                    <Row>

                                        <Col>
                                            <TableView data={this.state.statewise} disticdata={this.state.disticwisedata} />
                                        </Col>


                                        <Col>
                                            <Row>

                                                <FadeTransform in

                                                    transformProps={{
                                                        exitTransform: 'scale(0.8) translateX(50%)'
                                                    }}>

                                                    <Container fluid style={{ padding: '0px' }}>
                                                        <LineChart
                                                            width={this.state.width}
                                                            height={this.state.height}
                                                            data={this.state.casetimeseries}
                                                        />
                                                    </Container>
                                                </FadeTransform>

                                                <Container fluid style={{ padding: '0px' }}>
                                                    <LineChartDaily
                                                        width={this.state.width}
                                                        height={this.state.height}
                                                        data={this.state.casetimeseries}
                                                    />
                                                </Container>

                                                <Container fluid style={{ padding: '0px' }}>
                                                    <BarChart
                                                        width={this.state.width}
                                                        height={this.state.height}
                                                        data={this.state.statewise}
                                                    />
                                                </Container>

                                            </Row>
                                        </Col>
                                    </Row>

                                </Container>
                            </>
                        </>
                }
            </>
        )
    }
}

