import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import ChefCard from '../ChefCard/ChefCard';
import { Col, Row } from 'react-bootstrap';

const ChefCards = () => {
    const [chefs, setChefs] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/chefs')
            .then(res => res.json())
            .then(data => setChefs(data))
            .catch(error => console.log(error.message))
    })
    return (
        <div className='text-center'>
            <h2 className='mb-5'>Meet Our Chefs</h2>
            <Row className='mx-3'>

                {
                    chefs.map(chef => <Col sm={4}>
                        <ChefCard
                            chef={chef}
                            key={chef.id}></ChefCard>
                    </Col>)
                }

            </Row>


        </div>
    );
};

export default ChefCards;