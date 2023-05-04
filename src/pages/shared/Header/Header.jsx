import React, { useContext } from 'react';
import { Button, Container, Image } from 'react-bootstrap';
import logo from '../../../assets/logo.png'
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
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
                            <Link className="me-5 text-dark" to='/'>Home</Link>
                            <Link className="me-5 text-dark" to='/'>About</Link>
                            <Link className="me-5 text-dark" to='/'>Blog</Link>
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
                                            <Link onClick={handleLogOut} className='text-dark' to='/'>
                                                Log Out
                                            </Link>

                                        </div>

                                    </div>
                                    :
                                    <div>
                                        <Link to='/login' className="me-5 text-dark">Log In</Link>
                                        <Link className='text-dark' to='/registration'>
                                            Register
                                        </Link>
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