import React, { useContext } from 'react';
import HomeBanner from '../pages/Home/HomeBanner/HomeBanner';
import ChefCards from '../pages/Home/Chefs/ChefCards/ChefCards/ChefCards';
import { AuthContext } from '../providers/AuthProvider';


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

            </div>

        </div>
    );
};

export default HomeLayout;