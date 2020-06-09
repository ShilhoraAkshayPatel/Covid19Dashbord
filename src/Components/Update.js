import React, { Component } from 'react'
import { Updatetext, Time } from '../Card/Card'

import { Dropdown } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBell } from '@fortawesome/free-solid-svg-icons'

import '../Table/Table.css'

export default class Upadte extends Component {

    Unix_timestamp(t) {
        var dt = new Date(t * 1000);
        var hr = dt.getHours();
        var m = "0" + dt.getMinutes();
        return hr + ':' + m.substr(-2);
    }

    render() {
        const { data } = this.props
        return (
            <Dropdown>
                <Dropdown.Toggle variant="light" className="margin" >
                    <FontAwesomeIcon icon={faBell} size="2x" />
                </Dropdown.Toggle>




                <Dropdown.Menu style={{
                    padding: "20px",
                    width: "500px",
                    borderRadius: "6px"
                }}>

                    {
                        data.reverse().map(item => {
                            return (
                                <>
                                    <Time>Updated on {this.Unix_timestamp(item.timestamp)}</Time>
                                    <Updatetext>{item.update}</Updatetext>
                                </>
                            )
                        })
                    }

                </Dropdown.Menu>



            </Dropdown>




        )
    }
}