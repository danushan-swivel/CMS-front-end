
import { Fragment, useRef } from 'react';
import { Button, Form } from 'react-bootstrap';

import './StudentPayment.css';

const StudentPayment = (props) => {
    const monthRef = useRef('');
    const yearRef = useRef('');


    function makePayment() {

        const month = monthRef.current.value;
        const year = yearRef.current.value;

        console.log(year);

        props.paymentHadler(month, year);

    }

    return (
        <div className='student-payment-div'>
            <h4>Select month and year</h4>
            <label>Alreay Paid for this month</label> <br />
            <Form className='student-payment-form'>
                <Form.Control className='student-payment-form-select-control' ref={monthRef} as={'select'} required>
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
                <Form.Control as={'select'} ref={yearRef} required>
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
                <Button className='form-btn' size='md' onClick={makePayment} variant="primary">Make Payment</Button>
            </Form>
        </div>);
}

export default StudentPayment;