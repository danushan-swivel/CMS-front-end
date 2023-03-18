const BASE_URL = 'https://cms-api-gateway.herokuapp.com';

const paymentUrl = "/api/v1/payment";
const paymentUserReportUrl = "/api/v1/payment/user/report/";
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

export async function getpaymentUserReport(month, year) {
    const accessToken = localStorage.getItem('access_token');
    const response = await fetch(BASE_URL + paymentUserReportUrl + month + '/' + year, {
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

export async function makePayment(requestBody) {
    const accessToken = localStorage.getItem('access_token');
    const response = await fetch(BASE_URL + paymentUrl, {
        method: 'POST',
        body: JSON.stringify(requestBody),
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

export async function deletePayment(paymentId) {
    const accessToken = localStorage.getItem('access_token');
    const response = await fetch(BASE_URL + paymentUrl + '/' + paymentId, {
        method: 'DELETE',
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