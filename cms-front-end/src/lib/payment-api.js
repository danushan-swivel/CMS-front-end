const BASE_URL = 'http://localhost:8101';

const getAllPaymentByStudentId = "/api/v1/payment/student/";

export default async function getAllLocationDetails(studentId) {
    const accessToken = localStorage.getItem('access_token');
    const response = await fetch(BASE_URL + getAllPaymentByStudentId + studentId, {
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