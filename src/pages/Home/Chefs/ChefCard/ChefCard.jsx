import React from 'react';

const ChefCard = ({chef}) => {
    const {name, pic_of_chef, years_of_experience, no_of_likes} = chef;
    return (
        <div>
            {name}
        </div>
    );
};

export default ChefCard;