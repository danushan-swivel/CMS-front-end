import { Fragment } from 'react';
import { Col, Row } from 'react-bootstrap';
import './PaymentReportRow.css';

const PaymentReportRow = ({ props }) => {
    console.log('Report row deleted' + props.lastValue);
    return (
        <Row>
            <Col className='payment-report-sub-field'>{props.firstName}</Col>
            <Col className='payment-report-sub-field'>{props.lastName}</Col>
            <Col className='payment-report-sub-field'>{props.grade}</Col>
            <Col className='payment-report-sub-field'>{props.lastValue}</Col>
        </Row>
    );
}

export default PaymentReportRow;
