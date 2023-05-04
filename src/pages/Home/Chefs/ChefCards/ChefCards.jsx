import { useLoaderData } from 'react-router-dom';
import Spinner from 'react-bootstrap/Spinner';
import ChefCard from '../ChefCard/ChefCard';
import { Col, Row } from 'react-bootstrap';
import { useEffect, useState } from 'react';



const ChefCards = () => {
    const [loading, setLoading] = useState(true);
    const chefs = useLoaderData();
    useEffect(() => {
        const timer = setTimeout(() => {
            setLoading(false);
        }, 2000); // Change the interval as needed

        return () => {
            clearTimeout(timer);
        };
    }, []);

    return (

        <div className='text-center'>
            <h2 className='my-5'>Meet Our Chefs</h2>

            {
                loading ?
                    <Spinner animation="border" role="status">
                        <span className="visually-hidden">Loading...</span>
                    </Spinner> :
                    <Row className='mx-3'>

                        {
                            chefs.map(chef => <Col sm={4}>
                                <ChefCard
                                    chef={chef}
                                    key={chef.id}></ChefCard>
                            </Col>)
                        }

                    </Row>
            }




        </div>
    );
};

export default ChefCards;