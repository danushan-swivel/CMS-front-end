import { Col, Row } from 'bootstrap-4-react/lib/components/layout';
import './StudentDetailView.css';
import { getAllPaymentDetailsByStudentId } from '../../lib/payment-api';
import { useLocation, useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';

const StudentDetailView = (props) => {
    const params = useParams();
    const studentId = params.studentId;
    const [paymentList, setPaymentList] = useState([]);
    const [status, setStatus] = useState(0);
    const { state } = useLocation();

    async function loadPaymentData() {
        const paymentResponse = getAllPaymentDetailsByStudentId(studentId);
        const paymentData = await paymentResponse;
        if (paymentData.statusCode === 2054) {
            // TODO Check status code and show appropriate messages
            setPaymentList(paymentData.data);
            setStatus(paymentData.statusCode);

        } else {
            Notification(paymentData.message, "error");
        }

    }
    useEffect(() => {
        loadPaymentData();
    }, [status]);

    console.log('state: ' + state.firstName);
    return (
        <div className='student-detail-view-div'>
            <h2>Student Details</h2>
            <div className='student-detail-view-row-div'>
                <Row className='student-detail-view-row'>
                    <Col className='student-detail-view-col' md={4} >First Name: <label>{state.firstName}</label></Col>
                    <Col className='student-detail-view-col' md={4}>Last Name: <label>{state.lastName}</label></Col>
                    <Col className='student-detail-view-col' md={3}>Age: <label>{state.age}</label></Col>
                </Row>
                <Row className='student-detail-view-row'>
                    <Col className='student-detail-view-col' md={4} >Class Location: <label>{state.location}</label></Col>
                    <Col className='student-detail-view-col' md={4}>Address: <label>{state.address}</label></Col>
                    <Col className='student-detail-view-col' md={3}>Gender: <label>{state.gender}</label></Col>
                </Row>
                <Row className='student-detail-view-row'>
                    <Col className='student-detail-view-col' md={4} >Phone Number: <label>{state.phoneNumber}</label></Col>
                    <Col className='student-detail-view-col' md={4}>Joined Date: <label>{state.joinedDate}</label></Col>
                    <Col className='student-detail-view-col' md={3}>Status <label>{state.studentStatus}</label></Col>
                </Row>
            </div>
            <h2>Payment Details</h2>
            <div className='student-detail-view-row-div'>
                <Row className='student-payment-detail-view-row'>
                    <Col className='student-payment-detail-col-title'>Payment Month: </Col>
                    <Col className='student-payment-detail-col-title'>Paid Date: </Col>
                </Row>
                {
                    (paymentList.length !== 0) ? paymentList.payments.map((payment) => (
                        <Row>
                            <Col className='student-payment-detail-col'>{payment.paymentMonth}</Col>
                            <Col className='student-payment-detail-col'>{payment.paidDate}</Col>
                        </Row>
                    )) : null
                }

            </div>
        </div >
    );
}


export default StudentDetailView;