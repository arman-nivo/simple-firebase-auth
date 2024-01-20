import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import './SignUp.css';
import { Link, Navigate, useNavigate } from 'react-router-dom';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from '../../Firebase.init';


const SignUp = () => {
    const [email,setEmail] = useState('');
    const [password, setpassword ] = useState('');
    const [ConfirmPass, setConfimpass] = useState('');
    const [error, seterror] = useState("");
    const [createUserWithEmailAndPassword, user ] = useCreateUserWithEmailAndPassword(auth);
    const navigate = useNavigate();


    const handelemail  = (event) =>{
        setEmail(event.target.value);
    }
    const handelpass  = (event) =>{
        setpassword(event.target.value);
    }
    const handelconpass  = (event) =>{
        setConfimpass(event.target.value);
    }
    const handelSubmit  = (event) =>{
        event.preventDefault();
        if (password !== ConfirmPass) {
            seterror("Password did not match !!");
        }else{
            createUserWithEmailAndPassword(email, password);
        }
        if (user) {
            navigate("/register");
        }
    }

    return (
        <div className='signupFrom'>
            <div className='loginwithemail'>
                <Form onClick={handelSubmit}>
                    <h1 className='text-center p-4'>SignUP HERE</h1>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control  onBlur={handelemail} type="email" placeholder="Enter email" />
                        <Form.Text className="text-muted">
                            We'll never share your email with anyone else.
                        </Form.Text>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control onBlur={handelpass} type="password" placeholder="Password" />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Confirm Password</Form.Label>
                        <Form.Control onBlur={handelconpass} type="password" placeholder="Password" />
                    </Form.Group>

                    {
                        <p className='error'>{error}</p>
                    }
                    <Button className='px-5' variant="primary" type="submit">
                        Sign Up
                    </Button>
                    <br />
                    <small>if You haven't an account please <Link to={"/register"}>Sign In here</Link> </small>
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

export default SignUp;