import React, { useContext, useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { AuthContext } from '../providers/AuthProvider';

const LoginLayout = () => {
    const {signIn} = useContext(AuthContext);
    const [error, setError] =useState('');
    const [success, setSuccess] = useState('');
    const handleLogIn = event => {
        event.preventDefault();
        
        setSuccess('');
        
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        // console.log(email, password);
        signIn(email, password)
        .then(result =>{
            const loggedUser = result.user;
            setSuccess('You are Logged In.');
            setError('');
        })
        .catch(error =>{
            setError(error.message);
        })

    }
    return (

        <div className='w-25 mx-auto'>
            <h1 className='mt-5 text-center mb-3'>Log In</h1>
            <Form className='text-center' onSubmit={handleLogIn}>
                <Form.Group className="mb-5" controlId="formBasicEmail">
                    <Form.Control type="email" name="email" placeholder="Enter email" required />

                </Form.Group>

                <Form.Group  className="mb-5" controlId="formBasicPassword">

                    <Form.Control type="password" name="password" placeholder="Password" required />

                </Form.Group>
                <Button variant="dark" type="submit">
                    Log In
                </Button>
            </Form>
            <p className='text-danger'>{error}</p>
            <p className='text-success'>{success}</p>
            <Link to='/registration' className='text-secondary'>Don't have an account? Register</Link>
            <br/>
            <Link to='/' className='text-secondary'>Return to home</Link>
            
        </div>
    );
};

export default LoginLayout;