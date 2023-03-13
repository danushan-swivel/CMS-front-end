const BASE_URL = 'http://localhost:8105';

const getAllLocationUrl = "/api/v1/location/";

export default async function getAllLocationDetails() {
    const accessToken = localStorage.getItem('access_token');
    const response = await fetch(BASE_URL + getAllLocationUrl, {
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