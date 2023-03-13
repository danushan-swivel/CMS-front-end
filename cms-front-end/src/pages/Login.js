import React, { useRef, useState, useEffect } from 'react';
import { Container } from 'bootstrap-4-react';
import './Login.css';
import { Button, Col, Form, Row } from 'react-bootstrap';
import { encode as base64_encode } from 'base-64';
import { useNavigate } from "react-router-dom";
import { adminLogin } from '../lib/api';

const Login = () => {
    const navigate = useNavigate();
    const [status, setStatus] = useState(0);

    const nameRef = useRef('');
    const passRef = useRef('');

    const SubmitEvent = async () => {
        const username = nameRef.current.value;
        const password = passRef.current.value;
        const encodedCredential = `${username}:${password}`;
        const encodeString = base64_encode(encodedCredential);
        const response = adminLogin(encodeString);
        const data = await response;
        console.log(data);
        setStatus(data["status"]);
    };

    useEffect(() => {
        if (status === 200) {
            navigate("/students");
            console.log(status);
        }

        if (status === 401) {
            <p>Invalid credential</p>
            console.log(status);
        }
    }, [status]);
    return (
        <Container className="container">
            <Row className='login-row'>
                <Col className='login-col'>
                    <form className='form' action=''>
                        <p className='form-label'>Welcome to Mr. Perera's Tuition Class</p>
                        <Form.Control className='form-field' type='text' placeholder='user name' ref={nameRef} />
                        <Form.Control className='form-field' type='password' placeholder='password' ref={passRef} />
                        <p>If you don't have account? <a href='google.com'>click here</a></p>
                        <Button className='form-btn' size='md' variant="primary" onClick={SubmitEvent}>Log In</Button>
                    </form>
                </Col>
            </Row>
        </Container>
    );
}

export default Login;