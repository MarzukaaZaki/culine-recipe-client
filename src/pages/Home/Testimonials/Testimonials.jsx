import { Card, Row, Col, Image} from 'react-bootstrap';
import reviewer1 from '../../../assets/man1.jpg';
import reviewer2 from '../../../assets/man2.jpg';
import reviewer3 from '../../../assets/woman1.jpg';
import './Testimonials.css'


import React from 'react';
import {FaFacebook, FaInstagram, FaQuoteLeft, FaQuoteRight, FaTwitter} from 'react-icons/fa';


const Testimonials = () => {

    return (
        <div className=' mx-auto mb-5 py-5 px-3'>
            <h2 className='text-center mb-3'>Testimonials</h2>
            <Row>
                <Col sm={4} className='mb-3'>
                    <Card className='border testimonial-card shadow'>
                        <Card.Body className='p-3'>
                            <div className='d-flex photo-container'>
                                <Image src={reviewer1} alt="reviewer" className='photo' roundedCircle></Image>
                            <div>
                            <Card.Title className='ms-5'>Jameson Stone</Card.Title>
                            <p className="mb-2 text-muted ms-5">Executive Chef, Sapphire</p>
                            </div>
                            </div>
                            <FaQuoteLeft/>
                            <blockquote>
                            I recently had the opportunity to try some of the Italian dishes prepared by the chefs at Culine, and I was blown away by the flavors and creativity on display. It takes a lot of skill to execute traditional Italian dishes with such precision and flair, and the chefs at Culine are clearly masters of their craft. 
                            </blockquote>
                            
                            <Card.Link href="#" className='text-black'><FaFacebook/></Card.Link>
                            <Card.Link href="#" className='text-black'><FaTwitter/></Card.Link>
                            <Card.Link href="#" className='text-black'><FaInstagram/></Card.Link>
                        </Card.Body>
                    </Card>
                </Col>
                <Col sm={4} className='mb-3'>
                    <Card className='border testimonial-card shadow'>
                        <Card.Body className='p-3'>
                            <div className='d-flex photo-container'>
                                <Image src={reviewer2} alt="reviewer" className='photo' roundedCircle></Image>
                            <div>
                            <Card.Title className='ms-5'>Marcus Chen</Card.Title>
                            <p className="mb-2 text-muted ms-5">Head Chef, Blue Ocean</p>
                            </div>
                            </div>
                            <FaQuoteLeft/>
                            <blockquote>
                            Although sushi is my specialty, I have to admit that the Italian dishes at Culine are some of the best I've ever tasted. The chefs here have a deep understanding of Italian cuisine, and their attention to detail is evident in every dish. The pasta dishes are particularly outstanding, with perfectly cooked noodles and rich, flavorful sauces. Culine is a true gem in the world of Italian cuisine.
                            </blockquote>
                            
                            <Card.Link href="#" className='text-black'><FaFacebook/></Card.Link>
                            <Card.Link href="#" className='text-black'><FaTwitter/></Card.Link>
                            <Card.Link href="#" className='text-black'><FaInstagram/></Card.Link>
                        </Card.Body>
                    </Card>
                </Col>
                <Col sm={4} className='mb-3'>
                    <Card className='border testimonial-card shadow'>
                        <Card.Body className='p-3'>
                            <div className='d-flex photo-container'>
                                <Image src={reviewer3} alt="reviewer" className='photo' roundedCircle></Image>
                            <div>
                            <Card.Title className='ms-5'>Sarah Lee</Card.Title>
                            <p className="mb-2 text-muted ms-5">Owner, Sweet Indulgence</p>
                            </div>
                            </div>
                            <FaQuoteLeft/>
                            <blockquote>
                            As a pastry chef myself, I'm extremely picky about the quality of desserts I eat. That being said, Sarah Lee's pastries are absolutely divine. The texture, flavors, and presentation are all top-notch, and it's clear that she puts a lot of love and care into each and every creation. The Italian dishes at Culine are phenomenal, and the desserts are a perfect way to cap off a delicious meal. 
                            </blockquote>
                             <Card.Link href="#" className='text-black'><FaFacebook/></Card.Link>
                            <Card.Link href="#" className='text-black'><FaTwitter/></Card.Link>
                            <Card.Link href="#" className='text-black'><FaInstagram/></Card.Link>
                        </Card.Body>
                    </Card>
                </Col>
               
            </Row>

        </div>

    );
}




export default Testimonials;