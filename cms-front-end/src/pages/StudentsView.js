import './StudentsView.css';
import React, { useState, useEffect, } from "react";
import { getAllStudentDetails } from '../lib/api';
import StudentDetails from '../components/students/StudentDetails';
import { useNavigate } from 'react-router-dom';
const StudentsView = () => {
    const [student, setStudent] = useState([]);
    const [statusCode, setStatusCode] = useState(0);
    const navigate = useNavigate();

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
        navigate('/student/add');
    }

    useEffect(() => {
        loadStudents();
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