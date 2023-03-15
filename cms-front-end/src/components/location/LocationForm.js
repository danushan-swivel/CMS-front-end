import './LocationForm.css';

import { Fragment } from "react";
import { Row, Col, Form, } from "react-bootstrap";
import { useForm } from 'react-hook-form';
import Button from 'bootstrap-4-react/lib/components/Button';

const LocationForm = (props) => {
    console.log(props.state.name);
    const name = props.state.name;
    const address = props.state.address;
    const district = props.state.district;
    const province = props.state.province;

    const { register, handleSubmit, formState: { errors }, } = useForm({
        defaultValues: {
            locationName: name,
            address: address,
            district: district,
            province: province
        }
    });
    const action = props.action;
    function submitFormHandler(data) {
        console.log("Btn clicked");
        // TODO When we update the student, change the buttion name and data flow path based on props

        const location = {
            'locationName': data.locationName,
            'district': data.district,
            'address': data.address,
            'province': data.province
        }
        props.addLocationHandler(location);
    }
    return (
        <Fragment>
            <Form className="location-form" >
                <Row className='add-student-form-row'>
                    <Col className='add-student-field-col' md={6} sm={12}>
                        <Form.Control type='text' placeholder='Location Name' {...register("locationName", { required: true, minLength: 2 })} />
                        {errors.locationName && errors.locationName.type === "required" && <p> Required field</p>}
                        {errors.locationName && errors.locationName.type === "minLength" && <p> MinLength</p>}
                    </Col>
                    <Col className='add-student-field-col second-column' md={6} sm={12}>
                        <Form.Control type='text' placeholder='Address'  {...register("address", { required: true })} />
                        {errors.address && errors.address.type === "required" && <p> Required field</p>}
                    </Col>
                </Row>
                <Row className='add-student-form-row'>
                    <Col className='add-student-field-col' md={6} sm={12}>
                        <Form.Control type='text' placeholder='District'  {...register("district", { required: true })} />
                        {errors.district && errors.district.type === "required" && <p> Required field</p>}
                    </Col>
                    <Col className='add-student-field-col second-column' md={6} sm={12}>
                        <Form.Control type='text' placeholder='Province'  {...register("province", { required: true })} />
                        {errors.province && errors.province.type === "required" && <p> Required field</p>}
                    </Col>
                </Row>
                <Row className='add-student-form-row'>
                    <Button className='form-btn' size='md' onClick={handleSubmit(submitFormHandler)} variant="primary">{`${action} Location`}</Button>
                </Row>
            </Form>
        </Fragment>
    );
}

export default LocationForm;