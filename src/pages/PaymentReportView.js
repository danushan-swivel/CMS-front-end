import { useRef, useState } from 'react';
import { Button, Col, Form, Row } from 'react-bootstrap';
import { getpaymentUserReport } from '../lib/payment-api';
import PaymentReportRow from '../components/payment/PaymentReportRow';
import './PaymentReportView.css';

const PaymentReportView = () => {
    const [paidUserData, setPaidUserData] = useState([]);
    const [unpaidUserData, setUnpaidUserData] = useState([]);
    const monthRef = useRef('');
    const yearRef = useRef('');

    async function searchReport() {
        const month = monthRef.current.value;
        const year = yearRef.current.value;
        const response = await getpaymentUserReport(month, year);
        const responseData = await response;

        if (responseData.statusCode === 200) {
            setPaidUserData([]);
            setUnpaidUserData([]);
            const paidUserList = responseData.data.paidUsers.map(paidUser => {
                const res = {
                    'firstName': paidUser.studentDetails.firstName,
                    'lastName': paidUser.studentDetails.lastName,
                    'grade': paidUser.studentDetails.grade,
                    'lastValue': paidUser.paidDate
                };
                return res;
            });
            setPaidUserData(paidUserList);
            const unpaidUserList = responseData.data.unPaidUsers.map(unpaidUser => {
                const resourse = {
                    'firstName': unpaidUser.studentDetails.firstName,
                    'lastName': unpaidUser.studentDetails.lastName,
                    'grade': unpaidUser.studentDetails.grade,
                    'lastValue': unpaidUser.locationDetails.locationName
                };
                return resourse;
            });
            setUnpaidUserData(unpaidUserList);
        } else {
            Notification(responseData.message, "error");
        }
    }

    return (
        <div className="payment-report-view">
            <h2 >Payment Details</h2> <br />
            <Form className='payment-report-form'>
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
                <Button className='report-form-btn' onClick={searchReport} size='md' variant="primary">Search</Button>
            </Form>
            <Row className='payment-report-row'>
                <Col className='payment-report-col'><h3>Paid Users</h3>
                    <Row>
                        <Col className='payment-report-field'>First Name</Col>
                        <Col className='payment-report-field'>Last Name</Col>
                        <Col className='payment-report-field'>Grade</Col>
                        <Col className='payment-report-field'>Paid Date</Col>
                    </Row>
                    {paidUserData.map(data =>
                        <PaymentReportRow props={data} />
                    )}
                </Col>
                <Col className='payment-report-col'> <h3>Unpaid Users</h3>
                    <Row>
                        <Col className='payment-report-field'>First Name</Col>
                        <Col className='payment-report-field'>Last Name</Col>
                        <Col className='payment-report-field'>Grade</Col>
                        <Col className='payment-report-field'>Tuition Location</Col>
                    </Row>
                    {unpaidUserData.map(data =>
                        <PaymentReportRow props={data} />
                    )}
                </Col>
            </Row>
        </div>
    );
}

export default PaymentReportView;