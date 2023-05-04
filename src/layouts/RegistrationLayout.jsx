import React from 'react';
import { Link } from 'react-router-dom';

const RegistrationLayout = () => {
    return (
        <div className='w-50 mx-auto mt-3'>
            <h4>Create an Account</h4>
            <form>
                <input className='w-50 mb-4 rounded p-2 border'  type="text" name="name" id="name" placeholder='Your Name' required />
                <br />
                <input className='w-50 mb-4 rounded p-2 border' type="email" name="email" id="email" placeholder='Your Email' required />
                <br />
                <input className='w-50 mb-4 rounded p-2 border' type="password" name="password" id="password" placeholder='Your Password' required />
                <br />
                <input className='w-50 mb-4 rounded p-2 border'  type="url" name="photo" id="photo" placeholder='Your Photo' required />
                <br />

                <input className='btn btn-dark' type="submit" value="Register" />


            </form>
            <Link to='/login' className='text-secondary'><p>Already have an account?Log In</p></Link>
            <br/>
            <Link to='/' className='text-secondary'>Return to home</Link>
        </div>
    );
};

export default RegistrationLayout;