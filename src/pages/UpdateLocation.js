

import { Fragment } from 'react';
import './UpdateLocation.css';
import LocationForm from '../components/location/LocationForm';
import { Form } from 'react-bootstrap';
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import { updateLocation } from '../lib/location-api';

const UpdateLocation = () => {
    const param = useParams();
    const navigate = useNavigate();
    const { state } = useLocation();
    const addLocationHandler = async (locationData) => {
        console.log('Update Button clicked');
        const updateRequestDto = {
            'tuitionClassId': param.locationId,
            'locationName': locationData.locationName,
            'district': locationData.district,
            'address': locationData.address,
            'province': locationData.province
        }
        const response = updateLocation(updateRequestDto);
        const responseData = await response;
        console.log(responseData.statusCode);
        if (responseData.statusCode === 2033) {
            Notification(responseData.message, "success");
            navigate('/locations');
        } else {
            Notification(responseData.message, "error");
        }
    }
    return (
        <Fragment>
            <h2 className="add-student-title">Update Location</h2>
            <Form className='add-student-form'>
                <LocationForm addLocationHandler={addLocationHandler} state={state} action='Update' />
            </Form>
        </Fragment>
    );


}

export default UpdateLocation;