import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import './Header.css';

function Header() {
    return (
        <>
            <link
                rel="stylesheet"
                href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css"
                integrity="sha384-T3c6CoIi6uLrA9TneNEoa7RxnatzjcDSCmG1MXxSR1GAsXEV/Dwwykc2MPK8M2HN"
                crossOrigin="anonymous"
            />
            <Navbar expand="lg" className="header" style={{backgroundColor: "#fff"}}>
                <Navbar.Brand href="#home" className="header-logo">
                    <img src="https://i.imgur.com/twcWAYz.png" alt="logo" />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
                    <Nav>
                        <Nav.Link href="/" className="header-link">Home</Nav.Link>
                        <Nav.Link href="#about" className="header-link">Portfolio</Nav.Link>
                        <Nav.Link href="#services" className="header-link">Services</Nav.Link>
                        <Nav.Link href="#clients" className="header-link">Clients</Nav.Link>
                        <Nav.Link href="#contact" className="header-link">Contact</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </>
    );
}

export default Header;