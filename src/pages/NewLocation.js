import './NewLocation.css';
import { Form } from "bootstrap-4-react/lib/components";
import { Fragment } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { createNewLocation } from '../lib/location-api';
import LocationForm from '../components/location/LocationForm';

const NewLocation = () => {
    const navigate = useNavigate();
    const { state } = useLocation();


    const addLocationHandler = async (locationData) => {
        console.log('Create Location Clicked');
        const response = createNewLocation(locationData);
        const responseData = await response;
        console.log(responseData.statusCode);
        if (responseData.statusCode === 201) {
            navigate('/locations');
        } else {
            Notification(responseData.message, "error");
        }
    }
    return (
        <Fragment>
            <h2 className="add-student-title">Add New Location</h2>
            <Form className='add-student-form'>
                <LocationForm action='Create' addLocationHandler={addLocationHandler} state={state} />
            </Form>
        </Fragment>
    );
}

export default NewLocation;
