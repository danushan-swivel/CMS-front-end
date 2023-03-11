import { Button } from "bootstrap-4-react/lib/components";
import { Fragment, useRef } from "react";
import { Row, Col, Form, } from "react-bootstrap";
import './StudentForm.css';

const StudentFormFields = (props) => {
    const firstNameRef = useRef('');
    const lastNameRef = useRef('');
    const addressRef = useRef('');
    const ageRef = useRef(0);
    const genderRef = useRef('');
    const phoneNumberRef = useRef('');
    const locationRef = useRef('');



    function submitFormHandler(event) {
        event.preventDefault();
        // TODO When we update the student, change the buttion name and data flow path based on props

        const student = {
            'firstName': firstNameRef.current.value,
            'lastName': lastNameRef.current.value,
            'address': addressRef.current.value,
            'age': Number(ageRef.current.value),
            'gender': genderRef.current.value,
            'phoneNumber': phoneNumberRef.current.value,
            'locationId': locationRef.current.value
        }

        console.log(student);

        props.addStudentHandler(student);
    }
    return (
        <Fragment>
            <Form className="student-form" >
                <Row className='add-student-form-row'>
                    <Col className='add-student-field-col' md={6} sm={12}>
                        <Form.Control type='text' placeholder='first name' ref={firstNameRef} required />
                    </Col>
                    <Col className='add-student-field-col second-column' md={6} sm={12}>
                        <Form.Control type='text' placeholder='last name' ref={lastNameRef} required />
                    </Col>
                </Row>
                <Row className='add-student-form-row'>
                    <Form.Control as="textarea" placeholder='address' ref={addressRef} required />
                </Row>
                <Row className='add-student-form-row'>
                    <Col className='add-student-field-col' md={4} sm={4}>
                        <Form.Control type='text' placeholder='age' ref={ageRef} required />
                    </Col>
                    <Col className='add-student-field-col second-column' md={8} sm={8}>
                        <Form.Control type='text' placeholder='phone number' ref={phoneNumberRef} required />
                    </Col>
                </Row>
                <Row className='add-student-form-row'>
                    <Col className='add-student-field-col' md={6} sm={12}>
                        <Form.Control as={'select'} ref={genderRef} required>
                            <option value='' >Gender</option>
                            <option value='male' >Male</option>
                            <option value='female' >Female</option>
                        </Form.Control>
                    </Col>
                    <Col className='add-student-field-col second-column' md={6} sm={12}>
                        <Form.Control as={"Select"} required ref={locationRef}>
                            <option value=''>Tuition Location</option>
                            {/* TODO Write a API to fetch the all tuition class location name and id */}
                            {props.location.map((loc) => (
                                <option value={loc.locationId}>{loc.district}</option>
                            ))}
                        </Form.Control>
                    </Col>
                </Row>
                <Row className='add-student-form-row'>
                    <Button className='form-btn' size='md' onClick={submitFormHandler} variant="primary">Add Student</Button>
                </Row>
            </Form>
        </Fragment>);
}

export default StudentFormFields;