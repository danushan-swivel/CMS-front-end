import { Form } from "bootstrap-4-react/lib/components";
import { Fragment, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import StudentForm from "../components/students/StudentForm";
import './NewStudent.css';
import { createNewStudent } from '../lib/api';
import { getAllLocationDetails } from '../lib/location-api';
import Notification from "../components/common/Notification";

const NewStudent = () => {
    const navigate = useNavigate();
    const [location, setLocation] = useState([]);

    const addStudentHandler = async (studentData) => {
        console.log('Create Button Clicked');
        const response = createNewStudent(studentData);
        const responseData = await response;

        if (responseData.statusCode === 2000) {
            navigate('/students');
            Notification(responseData.message, "success");
        } else {
            Notification(responseData.message, "error");
        }
    }

    async function fetchLocationList() {
        const response = getAllLocationDetails();
        const locationData = await response;
        const locationList = locationData.data.locations;
        setLocation(locationList);
    }

    useEffect(() => {
        fetchLocationList();
    }, []);

    console.log('location: ' + location.locationId);

    return (
        <Fragment>
            <h2 className="add-student-title">Add New Student</h2>
            <Form className='add-student-form'>
                <StudentForm addStudentHandler={addStudentHandler} location={location} action={'Create'} />
            </Form>
        </Fragment>
    );
}

export default NewStudent;