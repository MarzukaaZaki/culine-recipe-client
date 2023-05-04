import React from 'react';
import { Button, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const LoginLayout = () => {
    return (

        <div className='w-25 mx-auto'>
            <h1 className='mt-5'>Log In</h1>
            <Form>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" name="email" placeholder="Enter email" required />

                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>

                    <Form.Control name="password" placeholder="Password" required />

                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" label="Remember me" />
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