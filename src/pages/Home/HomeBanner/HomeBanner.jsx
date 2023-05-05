import React from 'react';
import {Carousel, Container} from 'react-bootstrap';
import slider1 from '../../../assets/slider1.png'
import slider2 from '../../../assets/slider2.png'
import slider3 from '../../../assets/slider3.png'

const HomeBanner = () => {
    return (
        <div>

            <Carousel fade>
                <Carousel.Item className="dim-carousel-item">
                    <img
                        className="d-block w-100"
                        src={slider1}
                        alt="First slide"
                    />
                    <Carousel.Caption className="carousel-caption">
                        <Container>
                            <h3 className="text-white display-4"><strong>WELCOME TO CULINE</strong> </h3>
                           
                            
                        </Container>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item className="dim-carousel-item">
                    <img
                        className="d-block w-100"
                        src={slider2}
                        alt="Second slide"
                    />
                    <Carousel.Caption className="carousel-caption">
                        <Container>
                            <h3 className="text-white display-5">Discover the Art of Italian Cooking</h3>
                           
                            
                        </Container>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item className="dim-carousel-item">
                    <img
                        className="d-block w-100"
                        src={slider3}
                        alt="Third slide"
                    />
                    <Carousel.Caption className="carousel-caption">
                        <Container>
                            <h3 className="text-white display-5">Authentic Italian Recipes</h3>
                            
                            
                        </Container>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </div>
    );
};

export default HomeBanner;