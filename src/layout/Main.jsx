import React from 'react';
import Header from '../pages/shared/Header/Header';
import Footer from '../pages/shared/Footer/Footer';
import { Container } from 'react-bootstrap';
import { Outlet } from 'react-router-dom';

const Main = () => {
    return (
        <div>
        <Header></Header>
        <Outlet/>
        <Footer></Footer>
        </div>
    );
};

export default Main;