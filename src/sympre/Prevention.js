import React, { Component } from 'react'

import { StyledCard, Cardtext, Title, Headtitle, } from '../sympre/SymPre'
import { Container, Row, Col, Alert } from 'react-bootstrap';



import socialdist from '../assets/preven1.png';
import mask from '../assets/preven2.png';
import face from '../assets/preven3.png';
import wash from '../assets/preven4.png';

export default class Prevention extends Component {
    render() {
        const symtoms = [{
            img: wash,
            title: "Wash Hands",
            text: `Wash your hands regularly for 20 seconds, 
                   with soap and water or alcohol-based hand rub.`
        }, {
            img: socialdist,
            title: "Social Distance",
            text: `Avoid close contact (1 meter or 3 feet) with people who are unwell`
        },
        {
            img: face,
            title: "Avoid touching face",
            text: `Do not touch your eyes, nose or mouth if your hands are not clean.`
        },
        {
            img: mask,
            title: "Face Mask",
            text: `Cover your nose and mouth with a 
                  disposable tissue or flexed elbow 
                  when you cough or sneeze`
        },
        ]
        return (
            <>
                <Container fluid='sm'>
                    <Alert variant="danger">
                        <Cardtext size={'22px'} textcolor={'#C34B41'}>

                            If you develop a fever, cough, and have difficulty breathing, promptly seek medical care.
                    <br />   Call in advance and tell your health provider as soon as possible for medical advice.
                    </Cardtext>
                    </Alert>
                </Container>

                <Container fluid>

                    <Headtitle textcolor={'#0971FE'}>How to Protect Yourself?</Headtitle>
                    <Cardtext align={'center'} size={'22px'} padding={'15px'}>
                        The best way to prevent illness is to avoid being exposed to this virus.
                      <br />  As there is not vaccine to prevent so you can protect yourself
                      <br /> and help prevent spreading the virus to others if you do as below instruction.


            </Cardtext>
                </Container>
                <Container >
                    <Row>
                        {symtoms.slice(0, 2).map(item => {
                            return (

                                <Col>
                                    < StyledCard
                                        className="card text-center"
                                        height={"400px"}>
                                        <img
                                            width='200px'
                                            src={item.img}
                                            className="carditem"
                                            alt="alternet img"
                                        />
                                        <Title textcolor={'#0971FE'}>{item.title}</Title>
                                        <Cardtext >
                                            {item.text}
                                        </Cardtext>
                                    </StyledCard>
                                </Col>

                            )
                        })}
                    </Row>
                    <Row>
                        {symtoms.slice(2, 4).map(item => {
                            return (

                                <Col>
                                    < StyledCard
                                        className="card text-center"
                                        height={"400px"}>
                                        <img
                                            width='200px'
                                            src={item.img}
                                            className="carditem"
                                            alt="alternet img"
                                        />
                                        <Title textcolor={'#0971FE'}>{item.title}</Title>
                                        <Cardtext >
                                            {item.text}
                                        </Cardtext>
                                    </StyledCard>
                                </Col>

                            )
                        })}
                    </Row>
                </Container>


            </>
        )
    }
}