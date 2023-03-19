import { Fragment, useEffect, useState } from "react";
import { Form } from "react-bootstrap";
import { useLocation, useNavigate } from "react-router-dom";
import StudentUpdateForm from "../components/students/StudentUpdateForm";
import { getAllLocationDetails } from '../lib/location-api';
import { updateStudent } from '../lib/api';

const UpdateStudent = () => {
    const navigate = useNavigate();
    const [tuitionClass, setTuitionClass] = useState([]);
    const { state } = useLocation();

    const addStudentHandler = async (studentData) => {
        const response = updateStudent(studentData);
        const responseData = await response;

        if (responseData.statusCode === 2001) {
            Notification(responseData.message, "success");
            Notification(responseData.message, 'success');
            navigate('/students');
        } else {
            // TODO Check all errr status code and do right action
            Notification(responseData.message, "error");
        } else if (responseData.statusCode === 2002) {
            Notification(responseData.message, 'error');
        }
    }

    async function fetchTuitionClassList() {
        const response = getAllLocationDetails();
        const tuitionClassData = await response;
        const tuitionClassList = tuitionClassData.data.locations;
        setTuitionClass(tuitionClassList);
    }

    useEffect(() => {
        fetchTuitionClassList();
    }, []);
    return (
        <Fragment>
            <h2 className="add-student-title">Update Student</h2>
            <Form className='add-student-form'>
                <StudentUpdateForm addStudentHandler={addStudentHandler} tuitionClass={tuitionClass} state={state} action={'Update'} />
            </Form>
            {/* <StudentForm addStudentHandler={addStudentHandler} props={state} action={'Update'} /> */}
        </Fragment>
    );
}

export default UpdateStudent;