import React, { Component } from 'react'
import { Table, Container } from 'react-bootstrap';
import '../Table/Table.css'

export default class TableView extends Component {

    render() {
        const { data } = this.props
        return (
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

                        {data.map((item) => {
                            return (
                                <tr key={item.statecode}>
                                    <td>{item.state}</td>
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
        )
    }
}











