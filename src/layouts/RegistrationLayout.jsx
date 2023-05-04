import React from 'react';
import { Link } from 'react-router-dom';

const RegistrationLayout = () => {

    const handleRegistration = (event) =>{
        event.preventDefault(); // To prevent page refresh on submit
        console.log(event);
    }
    return (
        <div className='w-50 mx-auto p-5'>
            <h2 className='text-center mb-3'>Create an Account</h2>
            <form className='text-center' onSubmit={handleRegistration}>
                <input className='w-100 mb-4 rounded p-2 border'  type="text" name="name" id="name" placeholder='Your Name' required />
                <br />
                <input className='w-100 mb-4 rounded p-2 border' type="email" name="email" id="email" placeholder='Your Email' required />
                <br />
                <input className='w-100 mb-4 rounded p-2 border' type="password" name="password" id="password" placeholder='Your Password' required />
                <br />
                <input className='w-100 mb-4 rounded p-2 border'  type="url" name="photo" id="photo" placeholder='Your Photo' required />
                <br />

                <input className='btn btn-dark text-center' type="submit" value="Register" />


            </form>
            <Link to='/login' className='text-secondary'><p>Already have an account?Log In</p></Link>
            <br/>
            <Link to='/' className='text-secondary'>Return to home</Link>
        </div>
    );
};

export default RegistrationLayout;