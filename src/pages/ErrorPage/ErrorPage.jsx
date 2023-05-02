import React from 'react';
import { Container, Image } from 'react-bootstrap';
import error_img from '../../assets/error.jpg'

const ErrorPage = () => {
    return (
        <div>

            <Container className="text-center vh-100 mt-4">
            <div><h2 className='text-secondary'>Uh-Oh looks like there's nothing here.</h2></div>
                <Image src={error_img} width={450} fluid />
            </Container>

        </div>
    );
};

export default ErrorPage;