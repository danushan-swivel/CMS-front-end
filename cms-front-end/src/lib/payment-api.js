const BASE_URL = 'http://localhost:8101';

const paymentUrl = "/api/v1/payment";
const getPaymentByStudentId = "/api/v1/payment/student/";

export async function getAllPaymentDetailsByStudentId(studentId) {
    const accessToken = localStorage.getItem('access_token');
    const response = await fetch(BASE_URL + getPaymentByStudentId + studentId, {
        method: 'GET',
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

export async function getAllPayments() {
    const accessToken = localStorage.getItem('access_token');
    const response = await fetch(BASE_URL + paymentUrl, {
        method: 'GET',
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