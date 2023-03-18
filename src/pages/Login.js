import React, { useRef, useState, useEffect } from 'react';
import { Container } from 'bootstrap-4-react';
import './Login.css';
import { Button, Col, Form, Row } from 'react-bootstrap';
import { encode as base64_encode } from 'base-64';
import { useNavigate } from "react-router-dom";
import { adminLogin } from '../lib/api';
import { useForm } from 'react-hook-form';

const Login = () => {

    const { register, handleSubmit, formState: { errors }, } = useForm();
    const navigate = useNavigate();
    const [status, setStatus] = useState(0);

    // const nameRef = useRef('');
    // const passRef = useRef('');

    const SubmitEvent = async (inputs) => {
        const username = inputs.username;
        const password = inputs.password;
        const encodedCredential = `${username}:${password}`;
        const encodeString = base64_encode(encodedCredential);
        const response = await adminLogin(encodeString);
        const responseData = await response;
        setStatus(responseData['status']);

    };

    if (status === 200) {
        navigate("/students");
    }
    // console.log(status);
    if (status === 401) {
        setStatus(401);
    }

    // useEffect(() => {
    //     if (status === 200) {
    //         navigate("/students");
    //         console.log(status);
    //     }

    //     if (status === 401) {
    //         <p>Invalid credential</p>
    //         console.log(status);
    //     }
    // }, [status]);
    return (
        <Container className="container">
            {status === 401 && <p className='login-response-label'>Invalid Credential</p>}
            <Row className='login-row'>
                <Col className='login-col'>
                    <form className='form' >
                        <p className='form-label'>Welcome to Mr. Perera's Tuition Class</p>
                        <Form.Control className='form-field' type='text' placeholder='user name' {...register('username', { required: true })} />
                        {errors.username && <p>User name is required</p>}
                        <Form.Control className='form-field' type='password' placeholder='password' {...register('password', { required: true })} />
                        {errors.password && <p>Password is required</p>}
                        <p>If you don't have account? <a href='google.com'>click here</a></p>
                        <Button className='form-btn' onClick={handleSubmit(SubmitEvent)} size='md' variant="primary">Log In</Button>
                    </form>
                </Col>
            </Row>
        </Container>
    );
}

export default Login;