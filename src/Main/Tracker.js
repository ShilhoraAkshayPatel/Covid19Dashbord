import React, { Component } from 'react';
import axios from 'axios'


import Grid from '@material-ui/core/Grid';

import TableView from '../Table/TableView'
import LineChart from '../Charts/LineChart'
import ApexChart from '../Charts/ApexChart'
import Navbar from '../Navbar/Navbar'



export default class Tracker extends Component {
    constructor(props) {
        super(props);
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
                    }
                );

            })
        );

    }

    render() {
        console.log("todaysdata:", this.state.todaysdata,
            "statewise:", this.state.statewise,
            "casetimeseries:", this.state.casetimeseries,
            "tested:", this.state.tested,
            "update:", this.state.update,
            "disticwisedata:", this.state.disticwisedata,
            "essential:", this.state.essential
        )
        return (

            <div>
                <Grid container fixed spacing={3}>

                    <Grid item xs={12}>
                        <Navbar />
                    </Grid>

                    <Grid item xs={12}>
                        <TableView data={this.state.statewise} />
                    </Grid>

                    <Grid item xs={12}>
                        <LineChart data={this.state.casetimeseries} />
                    </Grid>

                    <Grid item xs={12}>
                        <ApexChart data={this.state.casetimeseries} />
                    </Grid>

                </Grid>


            </div>


        )
    }


}