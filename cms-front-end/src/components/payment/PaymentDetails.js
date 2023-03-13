import './PaymentDetails.css';
import { Container, Row, Col } from "react-bootstrap";
import PaymentRow from './PaymentRow';


const PaymentDetails = (props) => {

    const paymentList = props.paymentList.map(payment => {
        console.log(payment);
        return {
            id: payment.paymentId,
            studentId: payment.studentDetails.studentId,
            firstName: payment.studentDetails.firstName,
            lastName: payment.studentDetails.lastName,
            grade: payment.studentDetails.grade,
            classLocation: payment.locationDetails.locationName,
            paymentMonth: payment.paymentMonth,
            paidDate: payment.paidDate
        }
    }
    );

    console.log(props.locationList);
    return (
        <Container className="list-view-container">
            <div className='list-view-div'>
                <Row className='list-title-row'>
                    <Col md={1} className='list-view-col' >First Name</Col>
                    <Col md={1} className='list-view-col' >Last Name</Col>
                    <Col md={1} className='list-view-col' >Grade</Col>
                    <Col md={2} className='list-view-col'>Class Location</Col>
                    <Col md={1} className='list-view-col'>PaymentMonth</Col>
                    <Col md={1} className='list-view-col'>PaidDate</Col>
                    <Col md={0.5} className='list-view-col student-btn-view'>View</Col>
                    <Col md={0.5} className='list-view-col student-btn-view'>Update</Col>
                    <Col md={0.5} className='list-view-col student-btn-view'>Delete</Col>
                </Row>

                {paymentList.map((payment) => (
                    <PaymentRow props={payment} />
                ))}
            </div>
        </Container>

    );
}

export default PaymentDetails;