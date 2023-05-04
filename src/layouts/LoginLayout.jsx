import React, { useContext, useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { AuthContext } from '../providers/AuthProvider';
import { FaGithub, FaGoogle } from 'react-icons/fa';

const LoginLayout = () => {
    const { signIn, googleSignIn } = useContext(AuthContext);
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');
    const handleLogIn = event => {
        event.preventDefault();

        setSuccess('');

        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        // console.log(email, password);
        signIn(email, password)
            .then(result => {
                const loggedUser = result.user;
                setSuccess('You are Logged In.');
                setError('');
            })
            .catch(error => {
                setError(error.message);
            })

    }

    // Handle google Log In event
    const handleGoogleLogIn = () =>{
        setSuccess('');
        googleSignIn()
        .then(result =>{
            const user = result.user;
            setSuccess('You are logged in with google');
            setError('');
        })
        .catch(error => setError(error.message))
    }


    // Handle github login
    const handleGithubLogIn = () =>{

    }
    return (

        <div className='w-25 mx-auto'>
            <h1 className='mt-5 text-center mb-4'>Log In</h1>
            <Form className='text-center' onSubmit={handleLogIn}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Control type="email" name="email" placeholder="Enter email" required />

                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">

                    <Form.Control type="password" name="password" placeholder="Password" required />

                </Form.Group>
                <Button variant="dark" className='w-100 py-2' type="submit">
                    Log In
                </Button>
            </Form>
            <p className='text-danger'>{error}</p>
            <p className='text-success'>{success}</p>
            <div className='d-flex w-100'>
                <button className='btn btn-outline-dark m-3' onClick={handleGoogleLogIn}><FaGoogle className='me-2'></FaGoogle> Log In with Google</button>
                <button className='btn btn-outline-dark m-3' onClick={handleGithubLogIn}><FaGithub className='me-2'></FaGithub>Log In with Github</button>
            </div>
            <Link to='/registration' className='text-secondary'>Don't have an account? Register</Link>
            <br />
            <Link to='/' className='text-dark'><small>Return to home</small></Link>

        </div>
    );
};

export default LoginLayout;