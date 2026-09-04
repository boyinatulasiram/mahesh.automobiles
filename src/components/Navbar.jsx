import React from 'react';
import { Navbar, Nav, Container, Button } from 'react-bootstrap';
import { Link, useLocation } from 'react-router-dom';
import companyLogo from '../assets/mahesh-automobiles-logo.png';

const CustomNavbar = () => {
    const location = useLocation();

    return (
        <Navbar expand="lg" variant="dark" className="navbar-custom sticky-top py-3">
            <Container>
                <Navbar.Brand as={Link} to="/" className="navbar-brand-custom">
                    <img
                        src={companyLogo}
                        alt="Mahesh Automobiles"
                        className="navbar-logo"
                    />
                    <span className="navbar-brand-name">Mahesh Automobiles</span>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ms-auto align-items-center">
                        <Nav.Link as={Link} to="/" active={location.pathname === '/'} className="nav-link-btn">Home</Nav.Link>
                        <Nav.Link as={Link} to="/about" active={location.pathname === '/about'} className="nav-link-btn">About Us</Nav.Link>
                        <Nav.Link as={Link} to="/products" active={location.pathname === '/products'} className="nav-link-btn">Our Products</Nav.Link>
                        <Nav.Link as={Link} to="/clients" active={location.pathname === '/clients'} className="nav-link-btn">Our Clients</Nav.Link>
                        <Nav.Link as={Link} to="/contact" active={location.pathname === '/contact'} className="nav-link-btn">
                            Contact Us
                        </Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default CustomNavbar;
