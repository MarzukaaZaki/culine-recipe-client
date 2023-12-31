import React from 'react';
import { Col, Container, Image, Row, Spinner } from 'react-bootstrap';
import { useLoaderData, useParams } from 'react-router-dom';
import './ChefDetails.css'
import ChefRecipe from '../ChefRecipe/ChefRecipe';
import LazyLoad from 'react-lazy-load';
import { toast } from 'react-hot-toast';
import { useState, useEffect } from 'react';

const ChefDetails = () => {
    // Spinner Logic before displaying data
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        const timer = setTimeout(() => {
            setLoading(false);
        }, 2000); // Change the interval as needed

        return () => {
            clearTimeout(timer);
        };
    }, []);

    // Obtain the data
    const chefs = useLoaderData();

    // Get the id from url
    const selectedChefId = useParams().id;

    // Find chef with matching id
    const selectedChefData = chefs.find(chef => chef.id == selectedChefId);

    // Destructuring the object containing data of the particular chef
    const { pic_of_chef, name, recipes, no_of_recipes, likes, short_bio, years_of_experience } = selectedChefData;
    return (


        <div>
            {
                loading ?
                    <Spinner animation="border" role="status">
                        <span className="visually-hidden">Loading...</span>
                    </Spinner>
                    :
                    <div>
                        <Row>
                            <Col sm={6}>
                                <LazyLoad height={762} offset={100} onContentVisible={() => toast('Image loaded with lazy load')}>
                                    <Image src={pic_of_chef} fluid />
                                </LazyLoad>
                            </Col>
                            <Col sm={6} className='text-center'>
                                <div className='m-5 p-5'>
                                    <h1 className='display-3'>{name}</h1>
                                    <p className='text-secondary'>{short_bio}</p>
                                    <p className='text-secondary'>{no_of_recipes} recipes in the repertoire and more than {years_of_experience} years of experience in the culinary industry</p>
                                    <p className='text-secondary'>He has amassed over {likes} likes in this community.</p>
                                </div>

                            </Col>
                        </Row>

                        <div className='text-center'>
                            <hr />
                            <h1 className='mb-2'>Recipes</h1>
                            <hr />
                            <Row className='mx-5'>
                                {
                                    recipes.map(recipe => <Col className='w-50' sm={7}><ChefRecipe
                                        key={recipe.id}
                                        recipe={recipe}
                                    ></ChefRecipe></Col>)
                                }
                            </Row>
                        </div>


                    </div>}
        </div>


    );
}
export default ChefDetails;