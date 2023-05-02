import React from 'react';
import { Col, Container, Row, InputGroup, FormControl, Button } from 'react-bootstrap';
import './Footer.css'
import { FaFacebook, FaInstagram, FaPhone, FaTwitter } from 'react-icons/fa';
const Footer = () => {
    return (
        <div className='bg-dark text-light p-5'>
            <Container>
                <Row>
                    <Col lg={4} className="mb-5">
                        <p>La Scala <br />
                            Via Filodrammatici 2<br />
                            20121 Milan (MI),<br />
                            Italy<br />
                            Phone: +39 02 88 79 1<br />
                            Mail: info@teatroallascala.org <br />
                        </p>
                    </Col>
                    <Col lg={4} className="mb-5">
                        <p className='pb-3'><a href="#">About Us</a></p>
                        <p className='pb-3'><a href="#">Our Blog Page</a></p>
                        <p className='pb-3'><a href="#">Contact Information</a></p>

                    </Col>
                    <Col lg={4}>
                        <div className="mb-5">
                        <FaFacebook className='me-3' />
                        <FaTwitter className='me-3' />
                        <FaInstagram className='me-3' />
                        <FaPhone className='me-3' />
                        </div>
                        
                        <InputGroup>
                            <FormControl
                                placeholder="Join Our Mailing List!"
                                className="py-2"
                            />
                            <Button variant="outline-light" id="basic-addon2">
                                Subscribe
                            </Button>
                        </InputGroup>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Footer;