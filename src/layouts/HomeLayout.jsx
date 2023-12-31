import React, { useContext } from 'react';
import HomeBanner from '../pages/Home/HomeBanner/HomeBanner';
import ChefCards from '../pages/Home/Chefs/ChefCards/ChefCards/ChefCards';
import { AuthContext } from '../providers/AuthProvider';
import TopMenus from '../pages/Home/TopMenus/TopMenus';
import Testimonials from '../pages/Home/Testimonials/Testimonials';


const HomeLayout = () => {
    const user = useContext(AuthContext);
    return (
        <div>
        {
            user && <span>{user.displayName}</span>
        }
            <div className='mx-auto'>
                <HomeBanner className='mb-8'></HomeBanner>
                <ChefCards></ChefCards>
                <TopMenus></TopMenus>
                <Testimonials></Testimonials>

            </div>

        </div>
    );
};

export default HomeLayout;