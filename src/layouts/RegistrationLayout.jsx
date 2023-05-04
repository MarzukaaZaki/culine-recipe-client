import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../providers/AuthProvider';
import { updateProfile } from 'firebase/auth';

const RegistrationLayout = () => {
    
    const {createUser} = useContext(AuthContext);
    const [error, setError] =useState('');
    const [success, setSuccess] = useState('');
    
    // Handle registration event
    const handleRegistration = (event) =>{
        event.preventDefault(); // To prevent page refresh on submit
        
        // Set success message to an empty string so as not to have any confusing state.
        setSuccess('');

        const form = event.target;
        // Collect user information from the form filled out by user
        const email = form.email.value;
        const password = form.password.value;
        const name = form.name.value;
        const photo = form.photo.value;
        
        console.log(email, password, name, photo);
        // console.log(event);

        // Create new users
        createUser(email, password)
        .then(result=>{// If user creation is successful
            const loggedUser = result.user;
            console.log(loggedUser);
             // When the user successfully logs in, set error state to '', to avoid showing any previous error messages
             setError('');

             // And show a success message
             setSuccess('Successfully created an account.');

            // Set display name and photo url for user
            updateUserData(loggedUser, name, photo);
            form.reset()
        })
        .catch(error =>{
            setError(error.message);
        })
    }


    // Add user display name and profile photo
    const updateUserData = (user, name, photo) =>{
        updateProfile(user, {
            displayName: name,
            photoURL: photo
        })
        .then()
        .catch(error=> setError(error.message))
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

                <input className='btn btn-dark text-center w-100 py-2' type="submit" value="Register" />


            </form>
            <p className='text-danger'>{error}</p>
            <p className='text-success'>{success}</p>
            <Link to='/login' className='text-secondary'>Already have an account?Log In</Link>
            <br/>
            <Link to='/' className='text-dark'><small> Return to home</small></Link>
        </div>
    );
};

export default RegistrationLayout;