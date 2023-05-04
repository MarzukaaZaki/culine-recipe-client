import Card from 'react-bootstrap/Card';
import { FcLikePlaceholder } from "react-icons/fc";
import { FaStar } from "react-icons/fa";
import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import toast, { Toaster } from 'react-hot-toast';


const ChefRecipe = ({ recipe }) => {
    const { recipe_name, ingredients, cooking_method, rating } = recipe;
    // Disable Button
    const [buttonDisabled, setButtonDisabled] = useState(false);

    // Toast Functionality
    const notify = () => {
        setButtonDisabled(true);
        toast('You favourited this recipe!');}

    
    return (
        <div>
            <Card className="text-center w-100 border mb-3 shadow-md" style={{ minHeight: '300px' }} >
                <Card.Header>{recipe_name}</Card.Header>
                <Card.Body>
                    <Card.Title>Ingredients</Card.Title>
                    <Card.Text>
                        {ingredients}
                    </Card.Text>
                    <Card.Title>How to-</Card.Title>
                    <Card.Text className='text-wrap'>
                        {cooking_method}
                    </Card.Text>
                </Card.Body>
                <Card.Footer className='d-flex justify-content-around'>
                    <p><FaStar className='me-2'></FaStar>{rating}</p>
                    <Button variant='danger' onClick={notify} disabled={buttonDisabled}><FcLikePlaceholder className='me-2'></FcLikePlaceholder>Favourite this Recipe</Button>
                    <Toaster />
                </Card.Footer>
            </Card>
        </div>
    );
};

export default ChefRecipe;