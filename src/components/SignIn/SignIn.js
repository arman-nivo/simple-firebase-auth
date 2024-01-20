import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import '../SignIn/SignIn.css';
import { Link, useNavigate } from 'react-router-dom';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from '../../Firebase.init';


const SignIn = () => {

    const [email, setEmail] = useState("");
    const [password, setpassword] =useState("");
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
      ] = useSignInWithEmailAndPassword(auth);
    const navidate = useNavigate();

    const handelemail = (event) =>{
        setEmail(event.target.value);
    
    }
    const handelpass = (event) =>{
        setpassword(event.target.value);
    }

    const handelsubmit = (event) =>{
        event.preventDefault();
        signInWithEmailAndPassword(email,password);
    if (user) {
        console.log(user);
        navidate("/");
    }

    } 
    return (
        <div className='signupFrom'>
            <div className='loginwithemail'>
                <Form onSubmit={handelsubmit} >
                    <h1 className='text-center p-4'>SignIn HERE</h1>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control onBlur={handelemail} type="email" placeholder="Enter email" />
                        <Form.Text className="text-muted">
                            We'll never share your email with anyone else.
                        </Form.Text>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control onBlur={handelpass} type="password" placeholder="Password" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicCheckbox">
                        <Form.Check type="checkbox" label="Check me out" />
                    </Form.Group>
                    <Button className='px-5' variant="primary" type="submit">SignIn</Button>
                    
                    {
                        <p>{error?.message}</p>
                    }
         
                    <small>if You have an account please <Link to={"/signIn"}>Sign Up here</Link> </small>
                </Form>
            </div>
            <div className='breakline '>

            </div>
            <div className='loginwithgoogle'>
                <h1>
                    <Button className='bg-white px-5 text-black'>login with google </Button>
                </h1>
            </div>
        </div>
    );
};
export default SignIn;