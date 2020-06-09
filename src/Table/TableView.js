import React, { Component } from 'react'
import { Table, Container, OverlayTrigger, Tooltip } from 'react-bootstrap';
import '../Table/Table.css'

import DistData from '../Table/disticdata'

export default class TableView extends Component {
    constructor(props) {
        super(props);

        this.state = {
            data: this.props.data,
            disticdata: this.props.disticdata,
            modal: false,
            modalid: null,

        }


    }


    handleClick(id) {
        this.setState({
            modal: true,
            modalid: id,
        })
    }

    render() {


        return (
            <>
                {(this.state.modal) ? <DistData show={this.state.modal} id={this.state.modalid} data={this.props.disticdata} /> : null}

                <Container >
                    < Table striped bordered hover  >
                        <thead>
                            <tr>
                                <th>State</th>
                                <th>Confirmed</th>
                                <th>Active</th>
                                <th>Recovered</th>
                                <th>Deceased</th>
                            </tr>
                        </thead>
                        <tbody>

                            {this.state.data.map((item) => {
                                return (
                                    <tr key={item.state} onClick={() => this.handleClick(item.state)}>
                                        <OverlayTrigger
                                            key={'right'}
                                            placement={'right'}
                                            overlay={
                                                <Tooltip id={`tooltip-right`}>
                                                    <strong> Click for District</strong>.
        </Tooltip>
                                            }
                                        >
                                            <td>{item.state}</td>
                                        </OverlayTrigger>

                                        <td>{item.confirmed}
                                            <span
                                                style={{ color: 'red', margin: '8px', fontSize: '16px' }}>&uarr;{item.deltaconfirmed}</span>
                                        </td>
                                        <td>{item.active}</td>
                                        <td>{item.recovered}
                                            <span
                                                style={{ color: 'green', margin: '8px', fontSize: '16px' }}>&uarr;{item.deltarecovered}</span>
                                        </td>
                                        <td>{item.deaths}
                                            <span
                                                style={{ color: 'grey', margin: '8px', fontSize: '16px' }}>&uarr;{item.deltadeaths}</span>
                                        </td>
                                    </tr>
                                )
                            })}



                        </tbody>
                    </Table >
                </Container>

            </>
        )
    }
}











