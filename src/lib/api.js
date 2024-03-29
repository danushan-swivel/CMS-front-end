import Notification from "../components/common/Notification";

const STUDENT_BASE_URL = 'http://3.110.133.152:8080/student';
const AUTH_BASE_URL = 'http://3.110.133.152:8080/user';
const NEW_API_URL = 'http://43.205.217.251:8080/user';

const loginUrl = '/api/v1/user/login';
const testUrl = '/api/v1/user/test-post';
const studentUrl = '/api/v1/student';

export async function adminLogin(username, password) {
    try {
        const details = {
            'username': username,
            'password': password
        }
        var formBody = [];
        for (var property in details) {
            var encodedKey = encodeURIComponent(property);
            var encodedValue = encodeURIComponent(details[property]);
            formBody.push(encodedKey + "=" + encodedValue);
        }

        formBody = formBody.join("&");
        // const response = await fetch(AUTH_BASE_URL + loginUrl, {
        //     method: 'POST',
        //     body: formBody,
        //     headers: {
        //         'Content-Type': 'application/x-www-form-urlencoded'
        //     }
        // });

        const response = await fetch(NEW_API_URL + testUrl, {
            method: 'POST'
        });

        if (response.ok) {

            const body = await response.json();
            console.log(body);
        }
    } catch (e) {
        Notification("Couldn't login now. Please try again later");
        console.log(e);
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

    console.log(response)
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
    console.log(response);

    if (response.status === 500 || response.status === 200 || response.status === 400) {
        return response.json();
    } else {
        return {
            'statusCode': '6000'
        };
    }
}

export async function deleteStudentById(studentId) {
    const accessToken = localStorage.getItem('access_token');
    const response = await fetch(STUDENT_BASE_URL + studentUrl + '/' + studentId, {
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

export async function updateStudent(student) {
    console.log('Before save: ' + student);
    const accessToken = localStorage.getItem('access_token');
    const response = await fetch(STUDENT_BASE_URL + studentUrl, {
        method: 'PUT',
        body: JSON.stringify(student),
        headers: {
            'access_token': accessToken,
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        }
    });
    console.log(response);

    if (response.status === 500 || response.status === 200 || response.status === 400) {
        return response.json();
    } else {
        return {
            'statusCode': '6000'
        };
    }
}
