import { Button } from "bootstrap-4-react/lib/components";
import { Fragment, useState } from "react";
import { Row, Col, Form, } from "react-bootstrap";
import { useForm } from 'react-hook-form';
import './StudentForm.css';

const StudentFormFields = (props) => {
    const { register, handleSubmit, formState: { errors }, } = useForm();
    const [tuitionCLassId, setTuitionClasssId] = useState('TuitionClass');



    function submitFormHandler(inputs) {
        // TODO When we update the student, change the buttion name and data flow path based on props

        const student = {
            'firstName': inputs.firstName,
            'lastName': inputs.lastName,
            'address': inputs.address,
            'age': inputs.age,
            'gender': inputs.gender,
            'grade': inputs.grade,
            'phoneNumber': inputs.phoneNumber,
            'tuitionClassId': inputs.tuitionClass
        }

        props.addStudentHandler(student);
    }
    const handleTuitionClassId = (e) => {
        console.log('handler ' + e.target.value);
        setTuitionClasssId(e.target.value);
    }
    return (
        <Fragment>
            <Form className="student-form" >
                <Row className='add-student-form-row'>
                    <Col className='add-student-field-col' md={6} sm={12}>
                        <Form.Control type='text' placeholder='First name' {...register("firstName", { required: true, pattern: /^[a-zA-Z]+$/ })} />
                        {errors.firstName && errors.firstName.type === "required" && <p> Required field</p>}
                        {errors.firstName && errors.firstName.type === "pattern" && <p>Enter a valid name</p>}

                    </Col>
                    <Col className='add-student-field-col second-column' md={6} sm={12}>
                        <Form.Control type='text' placeholder='Last name' {...register("lastName", { required: true, pattern: /^[a-zA-Z]+$/ })} />
                        {errors.lastName && errors.lastName.type === "required" && <p> Required field</p>}
                        {errors.lastName && errors.lastName.type === "pattern" && <p>Enter a valid name</p>}
                    </Col>
                </Row>
                <Row className='add-student-form-row'>
                    <Form.Control as="textarea" placeholder='Address' {...register("address", { required: true })} />
                    {errors.address && errors.address.type === "required" && <p> Required field</p>}
                </Row>
                <Row className='add-student-form-row'>
                    <Col className='add-student-field-col' md={3} sm={6}>
                        <Form.Control type='text' placeholder='Age' {...register("age", { required: true, pattern: /^[+]?(\d*)$/, max: 100 })} />
                        {errors.age && errors.age.type === "required" && <p> Required field</p>}
                        {errors.age && errors.age.type === "pattern" && <p> Invalid age</p>}
                        {errors.age && errors.age.type === "max" && <p> Invalid age</p>}
                    </Col>
                    <Col className='add-student-field-col second-column' md={3} sm={6}>
                        <Form.Control type='text' placeholder='Grade' {...register("grade", { required: true })} />
                        {errors.grade && errors.grade.type === "required" && <p> Required field</p>}
                    </Col>
                    <Col className='add-student-field-col second-column' md={6} sm={12}>
                        <Form.Control type='text' placeholder='Phone number Ex: 0771122558' {...register("phoneNumber", { required: true, pattern: /^[0-9]{10}$/ })} />
                        {errors.phoneNumber && errors.phoneNumber.type === "required" && <p> Required field</p>}
                        {errors.phoneNumber && errors.phoneNumber.type === "pattern" && <p>Enter a valid phone number</p>}
                    </Col>
                </Row>
                <Row className='add-student-form-row'>
                    <Col className='add-student-field-col' md={6} sm={12}>
                        <Form.Control as={'select'} {...register("gender", { required: true })}>
                            <option value='' >Gender</option>
                            <option value='Male' >Male</option>
                            <option value='Female' >Female</option>
                        </Form.Control>
                        {errors.gender && errors.gender.type === "required" && <p> Required field</p>}
                    </Col>
                    <Col className='add-student-field-col second-column' md={6} sm={12}>
                        <Form.Control as={"Select"} required value={tuitionCLassId} {...register("tuitionClass", { required: true })} onChange={handleTuitionClassId} >
                            <option value=''>Tuition Location</option>
                            {/* TODO Write a API to fetch the all tuition class location name and id */}
                            {props.location.map((loc) => (
                                <option value={loc.tuitionClassId}>{loc.locationName}</option>
                            ))}
                        </Form.Control>
                        {errors.tuitionClass && errors.tuitionClass.type === "required" && <p> Required field</p>}
                    </Col>
                </Row>
                <Row className='add-student-form-row'>
                    <Button className='form-btn' size='md' onClick={handleSubmit(submitFormHandler)} variant="primary">Add Student</Button>
                </Row>
            </Form>
        </Fragment >);
}

export default StudentFormFields;