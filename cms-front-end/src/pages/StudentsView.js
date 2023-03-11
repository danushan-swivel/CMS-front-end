import './StudentsView.css';
import React, { useState, useEffect, } from "react";
import { getAllStudentDetails } from '../lib/api';
import StudentDetails from '../components/students/StudentDetails';
import { useHistory } from 'react-router-dom';
const StudentsView = () => {
    const [student, setStudent] = useState([]);
    const [statusCode, setStatusCode] = useState(0);
    const history = useHistory();

    async function loadStudents() {
        const response = getAllStudentDetails();
        const responseData = await response;
        setStatusCode(responseData.statusCode);
        if (responseData.statusCode === 2002) {
            setStudent(responseData.data.students);
        }

    }
    console.log(statusCode);

    function addStudentHandler() {
        history.push('/student/add');
    }

    function resetToken() {
        if (statusCode === 6000) {
            localStorage.setItem('access_token', '')
            history.replace('/login')
        }
    }
    useEffect(() => {
        loadStudents();
        resetToken();
    }, [statusCode]);
    return (
        <div className="details-view">
            <div className='student-view-header'>
                <h2 >Student Details</h2>
                <button onClick={addStudentHandler}>Add</button>
            </div>
            <StudentDetails studentList={student} />
        </div>);
}
export default StudentsView;