import './PaymentRow.css';
import { Fragment, useState } from "react";
import { Row, Col } from "react-bootstrap";
import DeleteRecord from '../common/DeleteRecord';
import UpdatePayment from './UpdatePayment';

const PaymentRow = ({ props }) => {
    const [updateClicked, setUpdateClicked] = useState(false);
    const [deleteClicked, setDeleteClicked] = useState(false);

    console.log('payment row');

    function updateHandler() {
        console.log('update clicked');
        (updateClicked) ? setUpdateClicked(false) : setUpdateClicked(true);
    }

    function deleteHandler() {
        console.log('Delete buttion clicked' + props.id);
        (deleteClicked) ? setDeleteClicked(false) : setDeleteClicked(true);
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

            {(deleteClicked) ? <Row><DeleteRecord noClick={noClick} id={props.id} service={'payment'} /></Row> : null}
            {(updateClicked) ? <Row><UpdatePayment noClick={noClick} props={props} /></Row> : null}
        </Fragment >
    );
}

export default PaymentRow;