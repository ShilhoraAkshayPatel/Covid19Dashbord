import React, { Component } from 'react'
import axios from 'axios'

import { Container, Row, Col } from 'react-bootstrap';


import CardView from '../Card/CardView';
import TableView from '../Table/TableView';
import LineChartDaily from '../Charts/LineChartDaily';
import LineChart from '../Charts/LineChart';
import BarChart from '../Charts/BarChart';
import Loader from '../Components/Loading'




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
        };

    }



    componentDidMount() {
        this.fetchdata();
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
                const testeddata = NationalData.tested.slice(-1);

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
                            <Container>
                                <Row>
                                    <Col>
                                        <CardView
                                            textcolor={'#FF073A'}
                                            color={'#F8D7DA'}
                                            deltadata={this.state.todaysdata.deltaconfirmed}
                                            data={this.state.todaysdata.confirmed}
                                            title={"Confirmed"} />
                                    </Col>
                                    <Col>
                                        <CardView
                                            textcolor={'#007BFF'}
                                            color={'#EFF7FF'}
                                            data={this.state.todaysdata.active}
                                            title={"Active"} />
                                    </Col>
                                    <Col>
                                        <CardView
                                            textcolor={'#39AE54'}
                                            color={'#E4F4E8'}
                                            deltadata={this.state.todaysdata.deltarecovered}
                                            data={this.state.todaysdata.recovered}
                                            title={"Recovered"} />
                                    </Col>
                                    <Col>
                                        <CardView
                                            textcolor={''}
                                            color={'#E2E3E5'}
                                            deltadata={this.state.todaysdata.deltadeaths}
                                            data={this.state.todaysdata.deaths}
                                            title={"Deceased"} />

                                    </Col>
                                </Row>
                            </Container>

                            <Container fluid >
                                <Row>
                                    <Col>
                                        <TableView data={this.state.statewise} />
                                    </Col>
                                    <Col>
                                        <Row>

                                            <Container fluid style={{ padding: '0px' }}>
                                                <LineChart data={this.state.casetimeseries} />
                                            </Container>

                                            <Container fluid style={{ padding: '0px' }}>
                                                <LineChartDaily data={this.state.casetimeseries} />
                                            </Container>

                                            <Container fluid style={{ padding: '0px' }}>
                                                <BarChart data={this.state.statewise} />
                                            </Container>

                                        </Row>
                                    </Col>
                                </Row>

                            </Container>
                        </>
                }
            </>
        )
    }
}

