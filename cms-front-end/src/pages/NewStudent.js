import { Button, Form } from "bootstrap-4-react/lib/components";
import { Container, Row } from "bootstrap-4-react/lib/components/layout";
import { Fragment, useContext, useEffect, useState } from "react";
import { useHistory, useParams } from "react-router-dom";
import StudentForm from "../components/students/StudentForm";
import './NewStudent.css';
import { createNewStudent } from '../lib/api';
import getAllLocationDetails from '../lib/location-api';
import StudentContext from '../context/StudentContext';

const NewStudent = () => {
    const { dispatchStudentEvent } = useContext(StudentContext);
    const history = useHistory();
    const [location, setLocation] = useState([]);
    const [status, setStatus] = useState(0);
    const addStudentHandler = async (studentData) => {
        const response = createNewStudent(studentData);
        const responseData = await response;

        if (responseData.statusCode === 2002) {
            dispatchStudentEvent('ADD_STUDENT', { newStudent: responseData.data });
            history.replace('/students');
        } else if (responseData.statusCode === 2002) {
            // TODO Check all errr status code and do right action
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

    return (
        <Fragment>
            <h2 className="add-student-title">Add New Student</h2>
            <Form className='add-student-form'>
                <StudentForm addStudentHandler={addStudentHandler} location={location} />
                {/* <Row className='add-student-form-row'>
                <Button className='form-btn' size='md' variant="primary" onClick={addStudentHandler} >{`Add Student`}</Button>
            </Row> */}
            </Form>
        </Fragment>
    );
}

export default NewStudent;