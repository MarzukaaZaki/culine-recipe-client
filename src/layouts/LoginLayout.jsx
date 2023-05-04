import React from 'react';
import { Button, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const LoginLayout = () => {
    return (

        <div className='w-25 mx-auto'>
            <h1 className='mt-5 text-center mb-3'>Log In</h1>
            <Form className='text-center' >
                <Form.Group className="mb-5" controlId="formBasicEmail">
                    <Form.Control type="email" name="email" placeholder="Enter email" required />

                </Form.Group>

                <Form.Group className="mb-5" controlId="formBasicPassword">

                    <Form.Control name="password" placeholder="Password" required />

                </Form.Group>
                <Button variant="dark" type="submit">
                    Log In
                </Button>
            </Form>
            <Link to='/registration' className='text-secondary'>Don't have an account? Register</Link>
            <br/>
            <Link to='/' className='text-secondary'>Return to home</Link>
            
        </div>
    );
};

export default LoginLayout;