import React from 'react';
import { DropdownButton,Dropdown, Navbar } from 'react-bootstrap'


import Container from 'react-bootstrap/Container';


export default function Header(props) {

    return (
        <Container>
        <Navbar className="navbarbgcolour" variant="light">

                <Navbar.Brand href="#home">Virtual Wellness</Navbar.Brand>

            <Dropdown >
                <Dropdown.Toggle variant="success" id="dropdown-basic">
                    Account
                </Dropdown.Toggle>

                <Dropdown.Menu>
                    <Dropdown.Item href="/login">Log In</Dropdown.Item>
                    <Dropdown.Item href="#/action-2">Register</Dropdown.Item>

                </Dropdown.Menu>
            </Dropdown>
        </Navbar>
        </Container>
    );
}

