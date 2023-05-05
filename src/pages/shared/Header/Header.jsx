import React, { useContext } from 'react';
import { Button, Container, Image } from 'react-bootstrap';
import logo from '../../../assets/logo.png'
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link, NavLink } from 'react-router-dom';
import './Header.css'
import { AuthContext } from '../../../providers/AuthProvider';
import { OverlayTrigger, Tooltip } from 'react-bootstrap';


const Header = () => {
    const { user, logOut } = useContext(AuthContext);
    console.log(user);
    const handleLogOut = () => {
        logOut()
            .then(() => { })
            .catch(error => console.log(error.message))
    }


    return (
        <div>
            <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
                <Container>
                    <Navbar.Brand href="#home"><img src={logo} width={230} alt="" /></Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="mx-auto">
                            <NavLink className="me-5 text-dark" exact to='/'>Home</NavLink>
                            <NavLink className="me-5 text-dark" to='/'>About</NavLink>
                            <NavLink className="me-5 text-dark" to='/blog'>Blog</NavLink>
                        </Nav>
                        <Nav>
                            {
                                user ?
                                    <div>
                                        <div className="profile-photo-container text-center d-flex">
                                            <OverlayTrigger
                                                placement="bottom"
                                                overlay={<Tooltip>{user.displayName}</Tooltip>}
                                            >
                                                <Image src={user.photoURL} fluid={true} roundedCircle className="profile-photo w-6 h-6 mx-3" />
                                            </OverlayTrigger>
                                            Hello,<p className='text-secondary m-3'>{user.displayName}</p>
                                            <NavLink onClick={handleLogOut} className='text-dark' to='/'>
                                                Log Out
                                            </NavLink>

                                        </div>

                                    </div>
                                    :
                                    <div>
                                        <NavLink to='/login' className="me-5 text-dark">Log In</NavLink>
                                        <NavLink className='text-dark' to='/registration'>
                                            Register
                                        </NavLink>
                                    </div>
                            }
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );

};
export default Header;