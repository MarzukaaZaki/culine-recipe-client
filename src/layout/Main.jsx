import React from 'react';
import Header from '../pages/shared/Header/Header';
import Footer from '../pages/shared/Footer/Footer';
import { Container } from 'react-bootstrap';

const Main = () => {
    return (
        <div>
        <Header></Header>
        <Container>
            <p>hello main content here...</p>
        </Container>
        <Footer></Footer>
        </div>
    );
};

export default Main;