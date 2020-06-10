import React, { Component } from 'react'
import axios from 'axios'
import GlobalCards from '../GlobalComp/GlobalCard'
import GlobalTable from '../GlobalComp/GlobalTable'
import { Container } from 'react-bootstrap';
import Loading from '../Components/Loading'
//import GlobalChart from '../GlobalComp/GlobalChart'
//<GlobalChart data={this.state.GlobalTabledata} />
export default class Global extends Component {

    constructor() {
        super();
        this.state = {
            Globaldata: [],
            GlobalTabledata: [],
            isLoading: false,
        }
    }

    componentDidMount() {
        this.fetchdata();
    }

    async fetchdata() {

        this.setState({ isLoading: !this.state.isLoading })

        const Globaldata = axios.get('https://disease.sh/v2/all?yesterday=true&allowNull=true')


        const GlobalTabledata = axios.get('https://disease.sh/v2/countries?yesterday=false&sort=cases&allowNull=false')


        axios.all([Globaldata, GlobalTabledata]).then(
            axios.spread((...response) => {
                const Globaldata = response[0].data;
                const GlobalTabledata = response[1].data;

                this.setState({
                    Globaldata: Globaldata,
                    GlobalTabledata: GlobalTabledata,
                    isLoading: false,
                })

            })
        )

    }


    render() {
        return (
            <>
                {
                    (this.state.isLoading) ? <Loading /> :
                        <div>

                            <GlobalCards data={this.state.Globaldata} />
                            <Container style={{ paddingBottom: "100px" }} className="text-center">
                                <GlobalTable data={this.state.GlobalTabledata} />
                            </Container>

                        </div>
                }
            </>
        )
    }

}