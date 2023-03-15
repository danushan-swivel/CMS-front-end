import './StudentsView.css';
import React, { useState, useEffect, } from "react";
import { getAllLocationDetails } from '../lib/location-api';
import { useNavigate } from 'react-router-dom';
import LocationDetails from '../components/location/LocationDetails';
const LocationsView = () => {
    const [location, setLocation] = useState([]);
    const [statusCode, setStatusCode] = useState(0);
    const navigate = useNavigate();

    async function loadLocation() {
        const response = getAllLocationDetails();
        const responseData = await response;
        console.log(responseData);
        setStatusCode(responseData.statusCode);
        if (responseData.statusCode === 2031) {
            setLocation(responseData.data.locations);
        }

    }

    function addLocationHandler() {
        navigate('/location/add', {
            state: {
                id: '',
                name: '',
                district: '',
                province: '',
                address: ''
            }
        });
    }

    useEffect(() => {
        loadLocation();
    }, [statusCode]);
    return (
        <div className="details-view">
            <div className='student-view-header'>
                <h2 >Location Details</h2>
                <button onClick={addLocationHandler}>Add</button>
            </div>
            <LocationDetails locationList={location} />
        </div>);
}
export default LocationsView;