import React, { useRef, useState } from 'react';
import { Container } from 'bootstrap-4-react';
import './Login.css';
import { Button, Col, Form, Row } from 'react-bootstrap';
import { encode as base64_encode } from 'base-64';





const Login = () => {

    const [user, setUser] = useState([]);
    // const [header, setHeader] = useState([]);

    const nameRef = useRef('');
    const passRef = useRef('');
    const SubmitEvent = () => {
        const username = nameRef.current.value;
        const password = passRef.current.value;
        loginHandler(username, password);
        console.log(user);
        // if (user.statusCode === 3000) {
        //     alert('Logged in successfully');
        // }
    }
    async function loginHandler(username, password) {
        const encodedCredential = `${username}:${password}`;
        const encodeString = base64_encode(encodedCredential);
        await fetch('http://localhost:8111/api/v1/user/login', {
            method: 'POST',
            body: JSON.stringify({}),
            headers: {
                'Authorization': 'Basic ' + encodeString,
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }
        }).then(response => {
            if (response.ok) {
                const token = response.headers.get('access_token');
                console.log('Success: ' + token);
                localStorage.setItem('access_token', token);
                return response.json();
            } else {
                console.log('failed');
                setUser([]);
            }
        }).then((datas) => {
            setUser(datas.value)
        });

    }
    return (
        <Container className="container">
            <Row>
                <Col>
                    <form className='form' action=''>
                        <Form.Label>Welcome to Mr. Perera's Tuition Class</Form.Label>
                        <Form.Control className='form-field' type='text' placeholder='user name' ref={nameRef} />
                        <Form.Control className='form-field' type='password' placeholder='password' ref={passRef} />
                        <Button className='form-btn' size='md' variant="primary" onClick={SubmitEvent}>Log In</Button>
                    </form>
                </Col>
            </Row>
        </Container>
    );
}

export default Login;