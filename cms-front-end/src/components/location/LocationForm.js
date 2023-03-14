import './LocationForm.css';
import { Fragment, useEffect, useRef, useState } from "react";
import { Row, Col, Form, Button, } from "react-bootstrap";

const LocationForm = (props) => {

    let action = props.action;
    if (props.action === 'Update') {
        action = 'update';
    }

    const [name, setName] = useState('');
    const [address, setAddress] = useState('');
    const [district, setDistrict] = useState('');
    const [province, setProvince] = useState('');
    const locationNameRef = useRef('');
    const districtRef = useRef('');
    const addressRef = useRef('');
    const provinceRef = useRef('');



    async function loadUpdateLocation(data) {
        setName(data.name);
        setAddress(data.address);
        setDistrict(data.district);
        setProvince(data.province);
    }

    useEffect(() => {
        loadUpdateLocation(props.state);
    }, [action]);



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

    const setNameValue = (e) => {
        setName(e.target.value);
    }
    const setAddressValue = (e) => {
        setAddress(e.target.value);
    }
    const setDistrictValue = (e) => {
        setDistrict(e.target.value);
    }
    const setProvinceValue = (e) => {
        setProvince(e.target.value);
    }



    return (
        <Fragment>
            <Form className="location-form" >
                <Row className='add-student-form-row'>
                    <Col className='add-student-field-col' md={6} sm={12}>
                        <Form.Control type='text' placeholder='Location Name' value={name} onChange={setNameValue} ref={locationNameRef} required />
                    </Col>
                    <Col className='add-student-field-col second-column' md={6} sm={12}>
                        <Form.Control type='text' placeholder='Address' value={address} onChange={setAddressValue} ref={addressRef} required />
                    </Col>
                </Row>
                <Row className='add-student-form-row'>
                    <Col className='add-student-field-col' md={6} sm={12}>
                        <Form.Control type='text' placeholder='District' value={district} onChange={setDistrictValue} ref={districtRef} required />
                    </Col>
                    <Col className='add-student-field-col second-column' md={6} sm={12}>
                        <Form.Control type='text' placeholder='Province' value={province} onChange={setProvinceValue} ref={provinceRef} required />
                    </Col>
                </Row>
                <Row className='add-student-form-row'>
                    <Button className='form-btn' size='md' onClick={submitFormHandler} variant="primary">{`${action} Location`}</Button>
                </Row>
            </Form>
        </Fragment>
    );
}

export default LocationForm;