import './NewLocation.css';
import { Form } from "bootstrap-4-react/lib/components";
import { Fragment, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { createNewLocation } from '../lib/location-api';
import LocationForm from '../components/location/LocationForm';

const NewLocation = () => {
    const navigate = useNavigate();


    const addLocationHandler = async (locationData) => {
        console.log('Create Location Clicked');
        const response = createNewLocation(locationData);
        const responseData = await response;
        console.log(responseData.statusCode);
        if (responseData.statusCode === 2030) {
            navigate('/locations');
        } else if (responseData.statusCode === 2002) {
            // TODO Check all errr status code and do right action
        }
    }
    return (
        <Fragment>
            <h2 className="add-student-title">Add New Location</h2>
            <Form className='add-student-form'>
                <LocationForm addLocationHandler={addLocationHandler} action='Create' />
            </Form>
        </Fragment>
    );
}

export default NewLocation;
