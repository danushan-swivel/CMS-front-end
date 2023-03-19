
import { Fragment, useRef } from 'react';
import { Button, Col, Form, Row } from 'react-bootstrap';
import { useForm } from 'react-hook-form';

import './StudentPayment.css';

const StudentPayment = (props) => {
    const monthValue = props.paymentObject.month;
    const yearValue = props.paymentObject.year;

    console.log(monthValue);
    console.log(yearValue);
    const { register, handleSubmit, formState: { errors }, } = useForm({
        defaultValues: {
            month: monthValue,
            year: yearValue
        }
    });

    function makePayment(data) {

        const month = data.month;
        const year = data.year;

        props.paymentHadler(month, year);

    }

    return (
        <div className='student-payment-div'>
            <h4>Select month and year</h4>
            <label>Alreay Paid for this month</label> <br />

            <Form className='student-payment-form'>
                <Row>
                    <Col className='student-payment-col'>
                        <Form.Control className='student-payment-form-select-control' as={'select'} {...register("month", { required: true })} >
                            <option value='' >Month</option>
                            <option value='January' >January</option>
                            <option value='Febuary' >Febuary</option>
                            <option value='March' >March</option>
                            <option value='April' >April</option>
                            <option value='May' >May</option>
                            <option value='June' >June</option>
                            <option value='July' >July</option>
                            <option value='August' >August</option>
                            <option value='September' >September</option>
                            <option value='October' >October</option>
                            <option value='November' >November</option>
                            <option value='December' >December</option>
                        </Form.Control>
                        {errors.month && errors.month.type === 'required' && <p>Required Field</p>}
                    </Col>
                </Row>
                <Row>
                    <Col className='student-payment-col'>
                        <Form.Control as={'select'} {...register("year", { required: true })}>
                            <option value='' >Year</option>
                            <option value='2022' >2022</option>
                            <option value='2023' >2023</option>
                            <option value='2024' >2024</option>
                            <option value='2025' >2025</option>
                            <option value='2026' >2026</option>
                            <option value='2027' >2027</option>
                            <option value='2028' >2028</option>
                            <option value='2029' >2029</option>
                            <option value='2030' >2030</option>
                        </Form.Control>
                        {errors.year && errors.year.type === 'required' && <p>Required Field</p>}
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <Button className='form-btn' size='md' onClick={handleSubmit(makePayment)} variant="primary">Make Payment</Button>
                    </Col>
                </Row>
            </Form>
        </div>);
}

export default StudentPayment;