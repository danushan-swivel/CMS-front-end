import { Fragment, useState } from "react";
import { Row, Col } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import DeleteRecord from "../common/DeleteRecord";
import StudentPayment from "./StudentPayment";
import { makePayment } from '../../lib/payment-api';
import Notification from "../common/Notification";
import './StudentRow.css';
const StudentRow = ({ props }) => {
    const [payClicked, setPayClicked] = useState(false);
    const [deleteClicked, setDeleteClicked] = useState(false);
    const navigate = useNavigate();

    function deleteHandler() {
        console.log('Delete buttion clicked' + props.id);
        (deleteClicked) ? setDeleteClicked(false) : setDeleteClicked(true);
    }

    function updateHandler() {
        navigate('/students/update/' + props.id, {
            state: {
                id: props.id,
                firstName: props.firstName,
                lastName: props.lastName,
                gender: props.gender,
                address: props.address,
                age: props.age,
                location: props.locationName,
                studentStatus: props.studentStatus,
                phoneNumber: props.phoneNumber,
                joinedDate: props.joinedDate
            }
        });
    }

    const paymentObject = {
        'month': '',
        'year': '',
        'paymentId': ''
    }

    function viewHandler() {
        console.log('View buttion clicked' + props.id);
        navigate('/students/view/' + props.id, {
            state: {
                id: props.id,
                firstName: props.firstName,
                lastName: props.lastName,
                gender: props.gender,
                address: props.address,
                age: props.age,
                location: props.locationName,
                studentStatus: props.studentStatus,
                phoneNumber: props.phoneNumber,
                joinedDate: props.joinedDate
            }
        });
    }

    const noClick = () => {
        setDeleteClicked(false);
    }

    function payHandler() {
        (payClicked) ? setPayClicked(false) : setPayClicked(true);
    }

    const paymentHadler = async (month, year) => {
        const requestBody = {
            'paymentMonth': {
                'month': month,
                'year': year
            },
            'studentId': props.id
        }

        const response = await makePayment(requestBody);
        const responseData = await response;
        if (responseData.statusCode === 2050) {
            Notification(responseData.message, "success");
            setPayClicked(false);
        } else {
            Notification(responseData.message, "error");
        }

    }
    return (
        <Fragment>
            <Row className=''>
                <Col className='list-view-col' md={1} >{props.firstName}</Col>
                <Col className='list-view-col' md={1} >{props.lastName}</Col>
                <Col className='list-view-col' md={1} >{props.address}</Col>
                <Col className='list-view-col' md={1} >{props.gender}</Col>
                <Col className='list-view-col' md={1} >{props.age}</Col>
                <Col className='list-view-col' md={1} >{props.phoneNumber}</Col>
                <Col className='list-view-col' md={1} >{props.studentStatus}</Col>
                <Col className='list-view-col' md={1} >{props.locationName}</Col>
                <Col className='list-view-col' md={1} >{props.joinedDate}</Col>
                <Col className='list-view-col student-btn-view' md={0.5} ><button onClick={payHandler}>Pay</button></Col>
                <Col className='list-view-col student-btn-view' md={0.5} ><button onClick={viewHandler}>View</button></Col>
                <Col className='list-view-col student-btn-view' md={0.5} ><button onClick={updateHandler}>Update</button></Col>
                <Col className='list-view-col student-btn-view' md={0.5} ><button onClick={deleteHandler}>Delete</button></Col>
            </Row >


            {(payClicked) ? <Row><StudentPayment paymentHadler={paymentHadler} id={props.id} paymentObject={paymentObject} /></Row> : null}
            {(deleteClicked) ? <Row><DeleteRecord noClick={noClick} id={props.id} /></Row> : null}
        </Fragment >
    )
}

export default StudentRow;