import React from 'react';
import { Button, Container } from 'react-bootstrap';
import logo from '../../../assets/logo.png'
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import './Header.css'

const Header = () => {
    return (
        <div>
            <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
                <Container>
                    <Navbar.Brand href="#home"><img src={logo} width={230} alt="" /></Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="mx-auto">
                            <Link className="me-5 text-dark" to='/'>Home</Link>
                            <Link className="me-5 text-dark" to='/'>About</Link>
                            <Link className="me-5 text-dark" to='/'>Blog</Link>
                        </Nav>
                        <Nav className="mx-auto">
                            <Link to='/login' className="me-5 text-dark">Log In</Link>
                            <Link className='text-dark' to='/registration'>
                            Register
                            </Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;