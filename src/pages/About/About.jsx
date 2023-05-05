import React from 'react';
import { Col, Image, Row } from 'react-bootstrap';
import staff from '../../assets/staff.jpg'

const About = () => {
    return (
        <div className='text-center w-75 mx-5 mb-5'>
            <h1 className='display-2 my-5'>About Culine</h1>
            <Row className='w-100'>
                
                <Col sm={7} className="">
                Welcome to Culine, a vibrant community of culinary professionals dedicated to advancing the art and science of cooking. Our community brings together chefs of all levels, from seasoned industry veterans to aspiring culinary students, to share their knowledge, skills, and passion for food.
                </Col>
                <Col sm={5}>
                <Image src={staff} className='w-100'></Image>
                </Col>
            </Row>
        </div>
    );
};

export default About;