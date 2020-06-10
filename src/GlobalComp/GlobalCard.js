import React, { Component } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAmbulance, faProcedures, faSkullCrossbones, faHospitalUser, faVial } from '@fortawesome/free-solid-svg-icons'
import corona from '../assets/corona.png'

import { StyledCard, Text, Heading, Logo } from '../GlobalComp/GlobalCardStyle'

import { Container, Row, Col, Alert } from 'react-bootstrap';

const virus = <img
    src={corona}
    width={"35px"}
    height={"35px"}
    alt="virus img"
/>
const ambulance = <FontAwesomeIcon icon={faAmbulance} color={'red'} size="2x" />

const manbed = <FontAwesomeIcon icon={faProcedures} color={'red'} size="2x" />

const dead = <FontAwesomeIcon icon={faSkullCrossbones} color={'grey'} size="2x" />

const recover = <FontAwesomeIcon icon={faHospitalUser} color={'green'} size="2x" />

const test = <FontAwesomeIcon icon={faVial} color={'voilet'} size="2x" />




export default class GlobalCard extends Component {

    render() {
        const { data } = this.props
        const todays = [
            { data: 'TodayCases', data1: data.todayCases, color: '#007BFF' },
            { data: 'TodayRecovered', data1: data.todayRecovered, color: '#39AE54' },
            { data: 'TodayDeaths', data1: data.todayDeaths, color: '#FF073A' },
        ]
        const labels = [

            { data: "cases", data1: data.cases, data2: data.casesPerOneMillion, img: ambulance },
            { data: "active", data1: data.active, data2: data.activePerOneMillion, img: virus },
            { data: "critical", data1: data.critical, data2: data.criticalPerOneMillion, img: manbed },
            { data: "recovered", data1: data.recovered, data2: data.recoveredPerOneMillion, img: recover },
            { data: "deaths", data1: data.deaths, data2: data.deathsPerOneMillion, img: dead },
            { data: "tests", data1: data.tests, data2: data.testsPerOneMillion, img: test },]


        return (
            <>
                <Container fluid='sm'>
                    <Alert variant="danger">
                        <Container className="text-center">
                            <Row>
                                {
                                    todays.map(item => {
                                        return (
                                            <Col key={item.data}>
                                                <Heading top={"10px"}>{item.data} </Heading>

                                                <Text top={"20px"} textcolor={item.color}>{item.data1}</Text>
                                            </Col>
                                        )
                                    })

                                }
                            </Row>
                        </Container>
                    </Alert>
                </Container>

                <Container >
                    <Row>
                        {
                            labels.slice(0, 3).map((item) => {
                                return (
                                    <Col key={item.data}>
                                        <StyledCard >

                                            <Heading>Total {item.data}<Logo>{item.img}</Logo></Heading>

                                            <Text >{item.data1}</Text>
                                            <Heading margin={"-25px"}>Cases per Million : {item.data2}</Heading>

                                        </StyledCard>
                                    </Col>
                                )
                            })
                        }
                    </Row>
                    <Row>
                        {
                            labels.slice(3).map((item) => {
                                return (
                                    <Col key={item.data}>
                                        <StyledCard >


                                            <Heading>Total {item.data}<Logo>{item.img}</Logo></Heading>

                                            <Text >{item.data1}</Text>
                                            <Heading margin={"-25px"}>Cases per Million : {item.data2}</Heading>

                                        </StyledCard>
                                    </Col>
                                )
                            })
                        }
                    </Row>
                </Container >

            </>
        )
    }
}

