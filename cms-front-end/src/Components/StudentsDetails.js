import './StudentsDetails.css';
import React, { useState } from "react";
import { Button, Col, Container, Row } from 'react-bootstrap';
import StudentList from './StudentList';

const getAllStudentUrl = 'http://localhost:8104/api/v1/student';



const StudentsDetails = () => {
    const [student, setStudent] = useState([]);

    async function loadStudents() {
        const token = localStorage.getItem('access_token');
        console.log('token: ' + token);
        await fetch(getAllStudentUrl, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'access_token': token
            }
        }).then(response => {
            return response.json();
        }).then(studentsData => {
            if (studentsData.statusCode === 2002) {
                const studentList = studentsData.data.students.map(studentData => {
                    // console.log(studentData.studentId);
                    return {
                        id: studentData.studentId,
                        firstName: studentData.firstName,
                        lastName: studentData.lastName,
                        address: studentData.address,
                        gender: studentData.gender,
                        age: studentData.age,
                        phoneNumber: studentData.phoneNumber,
                        studentStatus: studentData.studentStatus,
                        locationId: studentData.locationId,
                        joinedDate: studentData.joinedDate,
                        updatedAt: studentData.updatedAt,
                        isDeleted: studentData.isDeleted
                    }
                });
                setStudent(studentList);
            }
        });
        console.log(student);
    }

    // loadStudents();



    return (<div className="details-view">
        <h2>Hello Students</h2>
        <Button className='form-btn' size='md' variant="primary" onClick={loadStudents}>Load Students</Button>

        <Container className="list-view-container">
            <Row className='list-view-row'>
                <Col className='list-view-col' md={1} >
                    First Name
                </Col>
                <Col md={2} className='list-view-col'>
                    Last Name
                </Col>
                <Col md={2} className='list-view-col'>
                    Address
                </Col>
                <Col md={1} className='list-view-col'>
                    Gender
                </Col>
                <Col md={1} className='list-view-col'>
                    Age
                </Col>
                <Col md={1} className='list-view-col'>
                    phone number
                </Col>
                <Col md={1} className='list-view-col'>
                    Status
                </Col>
                <Col md={1} className='list-view-col'>
                    Tuition Location
                </Col>
                <Col md={1} className='list-view-col'>
                    Joined Date
                </Col>
                <Col md={1} className='list-view-col'>
                    Update
                </Col>
                {/* <Col md={1} className='list-view-col'>
                    Delete
                </Col> */}
            </Row>
            {/* <Row>
                <ul className='list-view-items'>
                    <li>First Name</li>
                    <li>Last Name</li>
                    <li>Address</li>
                    <li>Gender</li>
                    <li>Age</li>
                    <li>Phone Number</li>
                    <li>Status</li>
                    <li>Location</li>
                    <li>Joined Date</li>


                </ul>
            </Row> */}
            {student.map((std) => (
                <StudentList
                    firstName={std.firstName}
                    lastName={std.lastName}
                    address={std.address}
                    gender={std.gender}
                    age={std.age}
                    phoneNumber={std.phoneNumber}
                    status={std.status}
                    locationId={std.locationId}
                    joinedDate={std.joinedDate} />
            ))}
            {/* <StudentList studentList={student} /> */}

        </Container>
    </div>);
}

export default StudentsDetails;