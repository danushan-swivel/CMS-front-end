import { useState } from "react";

const STUDENT_BASE_URL = 'http://localhost:8104';
const PAYMENT_BASE_URL = '';
const TUITION_CLASS_BASE_URL = 'http://localhost:8103';
const API_GATEWAY_BASE_URL = '';
const AUTH_BASE_URL = 'http://localhost:8111';
// const AUTH_BASE_URL = 'http://localhost:8080';

const loginUrl = '/api/v1/user/login';
const studentUrl = '/api/v1/student';

export async function adminLogin(encodedCredential) {
    const response = await fetch(AUTH_BASE_URL + loginUrl, {
        method: 'POST',
        body: JSON.stringify({}),
        headers: {
            'Authorization': 'Basic ' + encodedCredential,
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        }
    });

    console.log(response);

    if (response.ok) {
        const body = await response.json();
        const token = body.data.token;
        console.log(token);
        localStorage.setItem('access_token', token);
        return {
            'access-token': token,
            'status': 200
        }
    } else {
        return {
            'status': response.status,
        }
    }
}

export async function getAllStudentDetails() {
    const accessToken = localStorage.getItem('access_token');
    const response = await fetch(STUDENT_BASE_URL + studentUrl, {
        method: 'GET',
        headers: {
            'access_token': accessToken,
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        }
    });
    if (response.ok) {
        return response.json();
    } else {
        return {
            'statusCode': '6000'
        };
    }
}

export async function createNewStudent(student) {
    console.log('Before save: ' + student);
    const accessToken = localStorage.getItem('access_token');
    const response = await fetch(STUDENT_BASE_URL + studentUrl, {
        method: 'POST',
        body: JSON.stringify(student),
        headers: {
            'access_token': accessToken,
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        }
    });

    if (response.status === 500 || response.status === 200 || response.status === 400) {
        return response.json();
    } else {
        return {
            'statusCode': '6000'
        };
    }
}
