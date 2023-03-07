import { Row, Col } from "react-bootstrap";
import './StudentsDetails.css';

const StudentList = (props) => (<Row className='list-view-row'>
    <Col className='list-view-col' md={1} >{props.firstName}</Col>
    <Col className='list-view-col' md={2} >{props.lastName}</Col>
    <Col className='list-view-col' md={2} >{props.address}</Col>
    <Col className='list-view-col' md={1} >{props.gender}</Col>
    <Col className='list-view-col' md={1} >{props.age}</Col>
    <Col className='list-view-col' md={1} >{props.phoneNumber}</Col>
    <Col className='list-view-col' md={1} >{props.status}</Col>
    <Col className='list-view-col' md={1} >{props.locationId}</Col>
    <Col className='list-view-col' md={1} >{props.joinedDate}</Col>
</Row>)

export default StudentList;