import React, { Component } from 'react'

import { Table } from 'react-bootstrap';
import '../Table/Table.css'

export default class GlobalTable extends Component {

    render() {
        const { data } = this.props
        return (

            <div style={{ maxHeight: '500px', overflow: 'auto' }}>

                < Table striped bordered hover  >

                    <thead >
                        <tr  >
                            <th>Flag</th>
                            <th>Country</th>
                            <th>population</th>
                            <th>Cases</th>
                            <th>Active</th>
                            <th>Recovered</th>
                            <th>Deceased</th>
                            <th>TodayCases</th>
                            <th>TodayRecovered</th>
                            <th>TodayDeaths</th>
                        </tr>
                    </thead>
                    <tbody >

                        {data.map((item) => {
                            return (
                                <tr key={item.country}>

                                    <td>
                                        <img src={item.countryInfo.flag}
                                            width={"40px"}
                                            height={"40px"}
                                            alt="country flag"
                                        />
                                    </td>

                                    <td>{item.country}</td>
                                    <td>{item.population}</td>
                                    <td>{item.cases}</td>
                                    <td>{item.active}</td>
                                    <td>{item.recovered}</td>
                                    <td>{item.deaths}</td>
                                    <td>{item.todayCases}</td>
                                    <td>{item.todayRecovered}</td>
                                    <td>{item.todayDeaths}</td>

                                </tr>
                            )
                        })}



                    </tbody>

                </Table >
            </div>


        )
    }

}