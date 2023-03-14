import { Col, Container, Row } from "react-bootstrap";
import './StudentDetails.css';
import StudentPayment from "./StudentPayment";

import StudentRow from "./StudentRow";
const StudentDetails = (props) => {
    const tuitionClassList = props.tuitionClassList;
    const tuitionMap = new Map(tuitionClassList.map(obj => {
        return [obj.tuitionClassId, obj.locationName];
    }));
    // const tuitionClassMap = tuitionClassList.map((item) => {
    //     this.key = item.tuitionClassId;
    //     this.value = item.locationName;
    //     return (this.item.tuitionClassId, this.item.locationName);
    // });
    console.log('map: ' + tuitionMap);
    const studentList = props.studentList.map(studentData => {
        return {
            id: studentData.studentId,
            firstName: studentData.firstName,
            lastName: studentData.lastName,
            address: studentData.address,
            gender: studentData.gender,
            age: studentData.age,
            phoneNumber: studentData.phoneNumber,
            studentStatus: studentData.studentStatus,
            locationName: tuitionMap.get(studentData.tuitionClassId),
            joinedDate: studentData.joinedDate,
            updatedAt: studentData.updatedAt,
            isDeleted: studentData.isDeleted
        }
    });
    return (
        <Container className="list-view-container">
            <div className='list-view-div'>
                <Row className='list-view-row'>
                    <Col className='list-view-col' md={1} >First Name</Col>
                    <Col md={1} className='list-view-col'>Last Name</Col>
                    <Col md={1} className='list-view-col'>Address</Col>
                    <Col md={1} className='list-view-col'>Gender</Col>
                    <Col md={1} className='list-view-col'>Age</Col>
                    <Col md={1} className='list-view-col'>phone number</Col>
                    <Col md={1} className='list-view-col'>Status</Col>
                    <Col md={1} className='list-view-col'>Tuition Location</Col>
                    <Col md={1} className='list-view-col'>Joined Date</Col>
                    <Col md={0.5} className='list-view-col student-btn-view'>Pay</Col>
                    <Col md={0.5} className='list-view-col student-btn-view'>View</Col>
                    <Col md={0.5} className='list-view-col'>Update</Col>
                    <Col md={0.5} className='list-view-col'>Delete</Col>

                </Row>
                {studentList.map((std) => (
                    <StudentRow props={std} />
                ))}
            </div>
        </Container>
    );
}

export default StudentDetails;