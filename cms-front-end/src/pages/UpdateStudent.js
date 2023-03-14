import { Fragment, useEffect, useState } from "react";
import { Form } from "react-bootstrap";
import { useLocation, useNavigate } from "react-router-dom";
import StudentUpdateForm from "../components/students/StudentUpdateForm";
import { getAllLocationDetails } from '../lib/location-api';

const UpdateStudent = () => {
    const navigate = useNavigate();
    const [location, setLocation] = useState([]);
    const { state } = useLocation();

    const addStudentHandler = async (studentData) => {
        // const response = createNewStudent(studentData);
        // const responseData = await response;

        // if (responseData.statusCode === 2002) {
        //     navigate('/students');
        // } else if (responseData.statusCode === 2002) {
        //     // TODO Check all errr status code and do right action
        // }
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
    return (
        <Fragment>
            <h2 className="add-student-title">Update Student</h2>
            <Form className='add-student-form'>
                <StudentUpdateForm addStudentHandler={addStudentHandler} location={location} state={state} action={'Update'} />
            </Form>
            {/* <StudentForm addStudentHandler={addStudentHandler} props={state} action={'Update'} /> */}
        </Fragment>
    );
}

export default UpdateStudent;