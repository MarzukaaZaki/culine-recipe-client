import React from 'react';
import HomeBanner from '../pages/Home/HomeBanner/HomeBanner';
import ChefCards from '../pages/Home/Chefs/ChefCards/ChefCards';


const HomeLayout = () => {
    return (
        <div>
        
            <div className='mx-auto'>
                <HomeBanner></HomeBanner>
                <ChefCards></ChefCards>

            </div>

        </div>
    );
};

export default HomeLayout;