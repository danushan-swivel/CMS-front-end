import './LocationForm.css';
import { Fragment, useRef } from "react";
import { Row, Col, Form, Button, } from "react-bootstrap";

const LocationForm = (props) => {
    const locationNameRef = useRef('');
    const districtRef = useRef('');
    const addressRef = useRef('');
    const provinceRef = useRef('');



    function submitFormHandler(event) {
        event.preventDefault();
        // TODO When we update the student, change the buttion name and data flow path based on props

        const location = {
            'locationName': locationNameRef.current.value,
            'district': districtRef.current.value,
            'address': addressRef.current.value,
            'province': provinceRef.current.value
        }
        console.log(location);
        props.addLocationHandler(location);
    }



    return (
        <Fragment>
            <Form className="location-form" >
                <Row className='add-student-form-row'>
                    <Col className='add-student-field-col' md={6} sm={12}>
                        <Form.Control type='text' placeholder='Location Name' ref={locationNameRef} required />
                    </Col>
                    <Col className='add-student-field-col second-column' md={6} sm={12}>
                        <Form.Control type='text' placeholder='Address' ref={addressRef} required />
                    </Col>
                </Row>
                <Row className='add-student-form-row'>
                    <Col className='add-student-field-col' md={6} sm={12}>
                        <Form.Control type='text' placeholder='District' ref={districtRef} required />
                    </Col>
                    <Col className='add-student-field-col second-column' md={6} sm={12}>
                        <Form.Control type='text' placeholder='Province' ref={provinceRef} required />
                    </Col>
                </Row>
                <Row className='add-student-form-row'>
                    <Button className='form-btn' size='md' onClick={submitFormHandler} variant="primary">Add Location</Button>
                </Row>
            </Form>
        </Fragment>
    );
}

export default LocationForm;