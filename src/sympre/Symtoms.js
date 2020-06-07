import React, { Component } from 'react'

import { StyledCard, Cardtext, Title, Headtitle, } from '../sympre/SymPre'
import { Container, Row, Col, Alert } from 'react-bootstrap';



import breath from '../assets/symtoms4.png';
import fever from '../assets/symtoms5.png';
import cough from '../assets/symtoms6.png';

export default class Symtoms extends Component {
    render() {
        const symtoms = [{
            img: fever,
            title: "Fever",
            text: `High Fever – this means you feel 
                   hot to touch on your chest or back 
                   you do not need to measure your temperature 
                   It is a common sign & also may appear 
                   in 2-10 days if affected.`
        }, {
            img: cough,
            title: "Cough",
            text: `Continuous cough – this means
                   coughing a lot for more than an hour, 
                   or 3 or more coughing episodes 
                   in 24 hours if you usually have a cough, 
                   it may be worse than usual`
        },
        {
            img: breath,
            title: "Shortness of breath",
            text: `Difficulty breathing – Around 1 out  
                   of every 6 people who gets COVID-19  
                   becomes seriously ill and develops  
                   difficulty breathing or 
                   shortness of breath.`
        },
        ]
        return (
            <>
                <Container fluid='sm'>
                    <Alert variant="danger">
                        <Cardtext size={'18px'} textcolor={'#C34B41'}>

                            If you develop a fever, cough, and have difficulty breathing, promptly seek medical care.
                  <br /> Call in advance and tell your health provider as soon as possible for medical advice.
                    </Cardtext>
                    </Alert>
                </Container>

                <Container fluid>

                    <Headtitle textcolor={'#0971FE'}>Symptoms of Coronavirus</Headtitle>
                    <Cardtext align={'center'} size={'18px'} padding={'8px'}>
                        The most common symptoms of COVID-19 are fever, tiredness, and dry cough.
                   <br /> Some patients may have aches and pains, nasal congestion, runny nose, sore throat or diarrhoea.
                   <br /> These symptoms are usually mild and begin gradually.
                   <br /> Also the symptoms may appear 2-14 days after exposure.
            </Cardtext>
                </Container>
                <Container fluid>
                    <Headtitle>Major & Common Symptoms</Headtitle>
                    <Row>

                        {symtoms.map(item => {
                            return (
                                <Col>
                                    < StyledCard
                                        className="card text-center" >
                                        <img
                                            width='250px'
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

                <Container fluid className="text-center">
                    <StyledCard height={'auto'} width={'auto'}>
                        <Headtitle textcolor={'#1EE0AC'} >Others Symptoms</Headtitle>
                        <Cardtext align={'center'} size={'20px'} padding={'8px'}>
                            Some patients may have aches and pains, nasal congestion, runny nose, sore throat or diarrhoea.
                   <br />These symptoms are usually mild & begin gradually. Some people become infected but don’t develop any
                   <br /> symptoms & don't feel unwell. Most people (about 80%) recover from the disease without needing special treatment.

                   <br /> Around 1 out of every 6 people who gets COVID-19 becomes seriously ill and develops difficulty breathing.
                  <br /> Older people, and those with underlying medical problems like high blood pressure, heart problems or diabetes,
                   <br />     are more likely to develop serious illness.


            </Cardtext>

                        <Cardtext align={'center'} size={'16px'} weight={"400"}>
                            These are for informational purposes only.Consult your local medical authority for advice.
                            (Source: World Health Organization)
                    </Cardtext>


                    </StyledCard>
                </Container>
            </>
        )
    }
}