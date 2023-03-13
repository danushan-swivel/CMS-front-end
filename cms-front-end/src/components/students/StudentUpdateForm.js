import { Button } from "bootstrap-4-react/lib/components";
import { Fragment, useRef, useState } from "react";
import { Row, Col, Form, } from "react-bootstrap";
import './StudentUpdateForm.css';

const StudentUpdateForm = (props) => {
    const titleName = props.action;
    const [firstNameValue, setFirstNameValue] = useState(props.state.firstName);
    const [lastNameValue, setLastNameValue] = useState(props.state.lastName);
    const [ageValue, setAgeValue] = useState(props.state.age);
    const [addressValue, setAddressValue] = useState(props.state.address);
    const [locationValue, setLocationValue] = useState(props.state.location);
    const [phoneNumberValue, setPhoneNumberValue] = useState(props.state.phoneNumber);
    const [genderValue, setGenderValue] = useState(props.state.gender);
    const studentStatusValue = props.state.studentStatus;
    const firstNameRef = useRef('');
    const lastNameRef = useRef('');
    const addressRef = useRef('');
    const ageRef = useRef(0);
    const genderRef = useRef('');
    const phoneNumberRef = useRef('');
    const locationRef = useRef('');

    console.log(locationValue);

    const setFirstName = e => {
        setFirstNameValue(e.target.value);
    }

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



        props.addStudentHandler(genderValue);
    }
    return (
        <Fragment>
            <Form className="student-form" >
                <Row className='add-student-form-row'>
                    <Col className='add-student-field-col' md={6} sm={12}>
                        <Form.Control type='text' placeholder='first name' ref={firstNameRef} value={firstNameValue}
                            onChange={setFirstName} required />
                    </Col>
                    <Col className='add-student-field-col second-column' md={6} sm={12}>
                        <Form.Control type='text' placeholder='last name' value={lastNameValue} ref={lastNameRef} required />
                    </Col>
                </Row>
                <Row className='add-student-form-row'>
                    <Form.Control as="textarea" placeholder='address' value={addressValue} ref={addressRef} required />
                </Row>
                <Row className='add-student-form-row'>
                    <Col className='add-student-field-col' md={4} sm={4}>
                        <Form.Control type='text' placeholder='age' value={ageValue} ref={ageRef} required />
                    </Col>
                    <Col className='add-student-field-col second-column' md={8} sm={8}>
                        <Form.Control type='text' placeholder='phone number' value={phoneNumberValue} ref={phoneNumberRef} required />
                    </Col>
                </Row>
                <Row className='add-student-form-row'>
                    <Col className='add-student-field-col' md={6} sm={12}>
                        <Form.Control as={'select'} defaultChecked={genderValue} defaultValue={genderValue} ref={genderRef} required>
                            <option value='' >Gender</option>
                            <option value='MALE' >Male</option>
                            <option value='FEMALE' >Female</option>
                        </Form.Control>
                    </Col>
                    <Col className='add-student-field-col second-column' md={6} sm={12}>
                        <Form.Control as={"Select"} defaultChecked={locationValue} defaultValue={locationValue} required ref={locationRef}>
                            <option value=''>Tuition Location</option>
                            {/* TODO Write a API to fetch the all tuition class location name and id */}
                            {props.location.map((loc) => (
                                <option value={loc.locationId}>{loc.district}</option>
                            ))}
                        </Form.Control>
                    </Col>
                </Row>
                <Row className='add-student-form-row'>
                    <Button className='form-btn' size='md' onClick={submitFormHandler} variant="primary">{`${titleName} Student`}</Button>
                </Row>
            </Form>
        </Fragment >
    );
}

export default StudentUpdateForm;