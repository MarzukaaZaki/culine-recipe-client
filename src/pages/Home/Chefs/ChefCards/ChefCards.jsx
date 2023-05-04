import { useLoaderData } from 'react-router-dom';
import ChefCard from '../ChefCard/ChefCard';
import { Col, Row } from 'react-bootstrap';

const ChefCards = () => {
    const chefs = useLoaderData();
    return (
        <div className='text-center'>
            <h2 className='my-5'>Meet Our Chefs</h2>
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