import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import menu1 from '../../../assets/menu1.png'
import menu2 from '../../../assets/menu2.png'
import menu3 from '../../../assets/menu3.png'
import './TopMenus.css'

const TopMenus = () => {
    return (
        <div>
            <h2 className='text-center'>Top Menus</h2>
            <Carousel className='mx-auto w-50'>
                <Carousel.Item interval={1000}>
                    <img
                        className="d-block w-100 h-25"
                        src={menu1}
                        alt="First slide"
                    />
                    <Carousel.Caption className='background'>
                        
                        <p>Ravioli Noodles</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item interval={500}>
                    <img
                        className="d-block w-100 h-25"
                        fluid
                        src={menu2}
                        alt="Second slide"
                    />
                    <Carousel.Caption className='background'>
            
                        <p>Colored Farfalle Salad</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100 h-25"
                        src={menu3}
                        alt="Third slide"
                    />
                    <Carousel.Caption className='background'>
                      
                        <p>
                        Tiramissu Dessert with Mint
                        </p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </div>
    );
};

export default TopMenus;