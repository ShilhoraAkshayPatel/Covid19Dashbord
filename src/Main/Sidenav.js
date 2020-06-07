import React, { Component } from 'react'
import { Navbar, Nav, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import '../Main/Sidenav.css';

import logo from '../assets/corona.png';
import globe from '../assets/globe.png';
import mask from '../assets/mask.png';
import india from '../assets/india.png';



class CustomNavbar extends Component {
    render() {
        return (
            <Container fluid>
                <Navbar collapseOnSelect fixed="top" sticky="top" expand="lg" bg="light" variant="light">
                    <Navbar.Brand >
                        <img
                            src={logo}
                            className="logo"
                            alt="conona logo"
                        />

                        Covid19 D-Board

                        </Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav >
                            <Nav.Link eventKey={1} componentClass={Link} href="/global" to="/global">
                                <img
                                    src={globe}
                                    className="icon"
                                    alt="conona logo"
                                />

                                Global</Nav.Link>

                            <Nav.Link eventKey={2} componentClass={Link} href="/" to="/">
                                <img
                                    src={india}
                                    className="icon"
                                    alt="conona logo"
                                />
                                India
                                </Nav.Link>
                            <Nav.Link eventKey={3} componentClass={Link} href="/symptoms" to="/symptoms">
                                <img
                                    src={logo}
                                    className="icon"
                                    alt="conona logo"
                                />
                                Symptoms</Nav.Link>
                            <Nav.Link eventKey={4} componentClass={Link} href="/prevention" to="/prevention">
                                <img
                                    src={mask}
                                    className="icon"
                                    alt="conona logo"
                                />
                                Prevention</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
            </Container>


        );
    }
}

export default CustomNavbar;