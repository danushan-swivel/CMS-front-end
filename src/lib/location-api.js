// const LOCATION_BASE_URL = 'http://localhost:8105';
const LOCATION_BASE_URL = '13.234.112.17:8080';

const locationUrl = "/api/v1/tuition";

export async function getAllLocationDetails() {
    const accessToken = localStorage.getItem('access_token');
    const response = await fetch(LOCATION_BASE_URL + locationUrl, {
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

export async function createNewLocation(location) {
    const accessToken = localStorage.getItem('access_token');
    const response = await fetch(LOCATION_BASE_URL + locationUrl, {
        method: 'POST',
        body: JSON.stringify(location),
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

export async function updateLocation(location) {
    const accessToken = localStorage.getItem('access_token');
    const response = await fetch(LOCATION_BASE_URL + locationUrl, {
        method: 'Put',
        body: JSON.stringify(location),
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

export async function deleteTuitionClass(tuitionClassId) {
    const accessToken = localStorage.getItem('access_token');
    const response = await fetch(LOCATION_BASE_URL + locationUrl + '/' + tuitionClassId, {
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

