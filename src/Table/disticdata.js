import React, { Component } from 'react'
import { Modal, Button, Table, Container } from 'react-bootstrap';
import axios from 'axios';
import '../Table/Table.css'

import Loading from '../Components/Loading'



export default class Distdata extends Component {

    constructor() {
        super();

        this.state = {
            disticdata: [],
            id: " ",
            modalShow: false,
            isLoading: false,

        }

    }

    componentDidMount() {
        this.setState({
            id: this.props.id,
            modalShow: this.props.show
        })
        this.fetchdata();
        console.log("componentdidmount")

    }

    async fetchdata() {
        this.setState({ isloading: !this.state.isloading });
        await axios.get("https://api.covid19india.org/state_district_wise.json")
            .then(Response => Response.data)
            .then(data => {
                const assigndata = [];
                const distdata = data[this.props.id].districtData
                for (const item in distdata) {
                    assigndata.push({ key: item, value: distdata[item] })
                }
                return assigndata
            }).then(distdata => {
                this.setState({
                    disticdata: distdata
                })

                console.log(this.state.disticdata)
            }


            )
            .catch(error => {
                console.log(error);
            })


    }

    UNSAFE_componentWillReceiveProps(nextProps) {
        if (this.props.id !== nextProps.id || this.props.id === nextProps.id) {
            this.setState({
                id: nextProps.id,
                modalShow: nextProps.show
            })

            console.log("UNSAFE_componentWillReceiveProps")
            this.fetchdata();
        }


    }




    render() {

        console.log(this.state.disticdata)


        return (


            <Modal
                scrollable={true}
                show={this.state.modalShow}
                onHide={() => this.setState({ modalShow: false })}
                aria-labelledby="contained-modal-title-vcenter"
                centered

            >
                <Modal.Header closeButton>

                    <h1 className="text-center">
                        {this.state.id}
                    </h1>


                </Modal.Header>
                <Modal.Body >

                    <Container fluid>

                        < Table striped bordered hover size="sm"  >
                            <thead>
                                <tr>
                                    <th>District</th>
                                    <th>Confirmed</th>
                                    <th>Active</th>
                                    <th>Recovered</th>
                                    <th>Deceased</th>
                                </tr>
                            </thead>
                            <tbody>
                                {(this.state.isLoading) ? <Loading /> : this.state.disticdata.map((item) => {
                                    return (
                                        <tr key={item.key}>
                                            <td>{item.key}</td>
                                            <td>{item.value.confirmed}
                                                <span
                                                    style={{ color: 'red', margin: '8px', fontSize: '16px' }}>&uarr;{item.value.delta.confirmed}</span>
                                            </td>
                                            <td>{item.value.active}</td>
                                            <td>{item.value.recovered}
                                                <span
                                                    style={{ color: 'green', margin: '8px', fontSize: '16px' }}>&uarr;{item.value.delta.recovered}</span>
                                            </td>
                                            <td>{item.value.deceased}
                                                <span
                                                    style={{ color: 'grey', margin: '8px', fontSize: '16px' }}>&uarr;{item.value.delta.deceased}</span>
                                            </td>
                                        </tr>
                                    )
                                })}

                            </tbody>
                        </ Table>

                    </Container>


                </Modal.Body>
                <Modal.Footer>
                    <Button onClick={() => this.setState({ modalShow: false })}>Close</Button>
                </Modal.Footer>
            </Modal>



        )

    }
}
