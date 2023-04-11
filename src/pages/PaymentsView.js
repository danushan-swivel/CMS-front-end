import './PaymentsView.css';
import React, { useState, useEffect, } from "react";
import { getAllPayments } from '../lib/payment-api';
import { useNavigate } from 'react-router-dom';
import PaymentDetails from '../components/payment/PaymentDetails';

const PaymentsView = () => {
    const [payment, setPayment] = useState([]);
    const [statusCode, setStatusCode] = useState(0);
    const navigate = useNavigate();

    async function loadPayment() {
        const response = getAllPayments();
        const responseData = await response;
        // console.log(responseData);
        setStatusCode(responseData.statusCode);
        if (responseData.statusCode === 200) {
            setPayment(responseData.data.payments);
        } else {
            Notification(responseData.message, "error");
        }

    }

    function addPaymentHandler() {
        navigate('/payment/report');
    }

    useEffect(() => {
        loadPayment();
    }, [statusCode]);

    console.log(payment);
    return (
        <div className="details-view">
            <div className='student-view-header'>
                <h2 >Payment Details</h2>
                <button onClick={addPaymentHandler}>Reports</button>
            </div>
            <PaymentDetails paymentList={payment} />
        </div>
    );
}

export default PaymentsView;