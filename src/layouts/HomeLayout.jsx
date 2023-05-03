import React from 'react';
import HomeBanner from '../pages/Home/HomeBanner/HomeBanner';
import ChefCards from '../pages/Home/Chefs/ChefCards/ChefCards';


const HomeLayout = () => {
    return (
        <div>
        
            <div className='mx-auto'>
                <HomeBanner className='mb-8'></HomeBanner>
                <ChefCards></ChefCards>

            </div>

        </div>
    );
};

export default HomeLayout;