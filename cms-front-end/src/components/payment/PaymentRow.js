import './PaymentRow.css';
import { Fragment, useState } from "react";
import { Row, Col } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const PaymentRow = ({ props }) => {
    const [payClicked, setPayClicked] = useState(false);
    const [deleteClicked, setDeleteClicked] = useState(false);
    const navigate = useNavigate();

    console.log('payment row');

    function updateHandler() {
        // navigate('/students/update/' + props.id, {
        //     state: {
        //         id: props.id,
        //         firstName: props.firstName,
        //         lastName: props.lastName,
        //         gender: props.gender,
        //         address: props.address,
        //         age: props.age,
        //         location: props.locationId,
        //         studentStatus: props.studentStatus,
        //         phoneNumber: props.phoneNumber,
        //         joinedDate: props.joinedDate
        //     }
        // });
    }

    function deleteHandler() {

    }

    const noClick = () => {
        setDeleteClicked(false);
    }
    return (
        <Fragment>
            <Row className='location-row'>
                <Col md={2} className='list-view-col' >{props.firstName}</Col>
                <Col md={2} className='list-view-col' >{props.lastName}</Col>
                <Col md={1} className='list-view-col' >{props.grade}</Col>
                <Col md={1} className='list-view-col'>{props.classLocation}</Col>
                <Col md={1} className='list-view-col'>{props.paymentMonth}</Col>
                <Col md={1} className='list-view-col'>{props.paidDate}</Col>
                <Col md={1} className='list-view-col'>{props.updatedAt}</Col>
                <Col className='list-view-col student-btn-view' md={0.5} ><button onClick={updateHandler}>Update</button></Col>
                <Col className='list-view-col student-btn-view' md={0.5} ><button onClick={deleteHandler}>Delete</button></Col>
            </Row >

            {/* {(payClicked) ? <Row><StudentPayment id={props.id} /></Row> : null}
            {(deleteClicked) ? <Row><DeleteRecord noClick={noClick} id={props.id} service={'student'} /></Row> : null} */}
        </Fragment >
    );
}

export default PaymentRow;