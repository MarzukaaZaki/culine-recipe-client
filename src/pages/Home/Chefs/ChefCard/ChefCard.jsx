import React from 'react';
import {FaBookOpen,} from 'react-icons/fa'
import { BsFillHandThumbsUpFill } from "react-icons/bs";
import './ChefCard.css'
import { Link } from 'react-router-dom';

const ChefCard = ({ chef }) => {
    const { name, pic_of_chef, years_of_experience, likes, no_of_recipes } = chef;
    return (
        <div>
            <div className="card shadow mb-5 text-center">
                <img src={pic_of_chef} 
                
                height={300}
                className="card-img-top" alt={name} />
                <div className="card-body">
                    <h5 className="card-title">{name}</h5>
                    <p className="card-text"><small className="text-secondary">{years_of_experience} years of Experience</small></p>
                    <div className='d-flex justify-content-around'>
                        <p><FaBookOpen className='me-2'></FaBookOpen>{no_of_recipes} Recipes</p>
                        <p><BsFillHandThumbsUpFill className='me-2'></BsFillHandThumbsUpFill>{likes} Likes</p>

                    </div>
                    <Link className='btn btn-dark px-4'>View Recipe</Link>
                </div>
            </div>

        </div>
    );
};

export default ChefCard;