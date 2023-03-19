import { Button } from "bootstrap-4-react/lib/components";
import { Fragment, useState } from "react";
import { Row, Col, Form, } from "react-bootstrap";
import { useForm } from 'react-hook-form';
import './StudentUpdateForm.css';

const StudentUpdateForm = (props) => {

    const titleName = props.action;
    const [firstNameValue, setFirstNameValue] = useState(props.state.firstName);
    const [lastNameValue, setLastNameValue] = useState(props.state.lastName);
    const [ageValue, setAgeValue] = useState(props.state.age);
    const [addressValue, setAddressValue] = useState(props.state.address);
    const [tuitionClassValue, setTuitionClassValue] = useState(props.state.location);
    const [phoneNumberValue, setPhoneNumberValue] = useState(props.state.phoneNumber);
    const [genderValue, setGenderValue] = useState(props.state.gender);
    const [studentStatusValue, setStudentStatusValue] = useState(props.state.studentStatus);
    const { register, handleSubmit, formState: { errors }, } = useForm({
        defaultValues: {
            firstName: firstNameValue,
            lastName: lastNameValue,
            age: ageValue,
            address: addressValue,
            phoneNumber: phoneNumberValue,
            tuitionClass: tuitionClassValue,
            gender: genderValue,
            studentStaus: studentStatusValue
        }
    });


    function submitFormHandler(data) {
        const student = {
            'studentId': props.state.id,
            'firstName': data.firstName,
            'lastName': data.lastName,
            'address': data.address,
            'age': data.age,
            'gender': data.gender,
            'studentStatus': data.studentStaus,
            'phoneNumber': data.phoneNumber,
            'tuitionClassId': data.tuitionClass
        }

        console.log(student);
        props.addStudentHandler(student);
    }
    return (
        <Fragment>
            <Form className="student-form" >
                <Row className='add-student-form-row'>
                    <Col className='add-student-field-col' md={6} sm={12}>
                        <Form.Control type='text' placeholder='first name' {...register("firstName", { required: true, pattern: /^[a-zA-Z]+$/ })} />
                        {errors.firstName && errors.firstName.type === "required" && <p> Required field</p>}
                        {errors.firstName && errors.firstName.type === "pattern" && <p>Enter a valid name</p>}
                    </Col>
                    <Col className='add-student-field-col second-column' md={6} sm={12}>
                        <Form.Control type='text' placeholder='last name'  {...register("lastName", { required: true, pattern: /^[a-zA-Z]+$/ })} />
                        {errors.lastName && errors.lastName.type === "required" && <p> Required field</p>}
                        {errors.lastName && errors.lastName.type === "pattern" && <p>Enter a valid name</p>}
                    </Col>
                </Row>
                <Row className='add-student-form-row'>
                    <Form.Control as="textarea" placeholder='address' {...register("address", { required: true })} />
                    {errors.address && errors.address.type === "required" && <p> Required field</p>}
                </Row>
                <Row className='add-student-form-row'>
                    <Col className='add-student-field-col' md={4} sm={4}>
                        <Form.Control type='text' placeholder='age'  {...register("age", { required: true, pattern: /^[+]?(\d*)$/, max: 100 })} />
                        {errors.age && errors.age.type === "required" && <p> Required field</p>}
                        {errors.age && errors.age.type === "pattern" && <p> Invalid age</p>}
                        {errors.age && errors.age.type === "max" && <p> Invalid age</p>}
                    </Col>
                    <Col className='add-student-field-col second-column' md={8} sm={8}>
                        <Form.Control type='text' placeholder='phone number'  {...register("phoneNumber", { required: true, pattern: /^[0-9]{10}$/ })} />
                        {errors.phoneNumber && errors.phoneNumber.type === "required" && <p> Required field</p>}
                        {errors.phoneNumber && errors.phoneNumber.type === "pattern" && <p>Enter a valid phone number</p>}
                    </Col>
                </Row>
                <Row className='add-student-form-row'>
                    <Col className='add-student-field-col' md={4} sm={12}>
                        <Form.Control as={'select'} defaultChecked={genderValue} defaultValue={genderValue} {...register("gender", { required: true })}>
                            <option value='' >Gender</option>
                            <option value='Male' >Male</option>
                            <option value='Female' >Female</option>
                        </Form.Control>
                        {errors.gender && errors.gender.type === "required" && <p> Required field</p>}
                    </Col>
                    <Col className='add-student-field-col' md={4} sm={12}>
                        <Form.Control as={'select'} defaultChecked={studentStatusValue} defaultValue={studentStatusValue} {...register("studentStaus", { required: true })}>
                            <option value='' >Status</option>
                            <option value='Coming' >Coming</option>
                            <option value='Stopped' >Stopped</option>
                            <option value='Suspended' >Suspended</option>
                        </Form.Control>
                        {errors.studentStaus && errors.studentStaus.type === "required" && <p> Required field</p>}
                    </Col>
                    <Col className='add-student-field-col second-column' md={4} sm={12}>
                        <Form.Control as={"Select"} defaultChecked={tuitionClassValue} defaultValue={tuitionClassValue} {...register("tuitionClass", { required: true })}>
                            <option value=''>Tuition Location</option>
                            {/* TODO Write a API to fetch the all tuition class location name and id */}
                            {props.tuitionClass.map((tuition) => (
                                <option value={tuition.tuitionClassId}>{tuition.locationName}</option>
                            ))}
                        </Form.Control>
                        {errors.tuitionClass && errors.tuitionClass.type === "required" && <p> Required field</p>}
                    </Col>
                </Row>
                <Row className='add-student-form-row'>
                    <Button className='form-btn' size='md' onClick={handleSubmit(submitFormHandler)} variant="primary">{`${titleName} Student`}</Button>
                </Row>
            </Form>
        </Fragment >
    );
}

export default StudentUpdateForm;