import { Fragment, useState } from "react";
import { Row, Col } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import './LocationRow.css';

const LocationRow = ({ props }) => {
    const [payClicked, setPayClicked] = useState(false);
    const [deleteClicked, setDeleteClicked] = useState(false);
    const navigate = useNavigate();

    console.log(props.locationName);

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

    function viewHandler() {
        // console.log('View buttion clicked' + props.id);
        // navigate('/students/view/' + props.id, {
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
                <Col className='list-view-col' md={1} >{props.name}</Col>
                <Col className='list-view-col' md={2} >{props.address}</Col>
                <Col className='list-view-col' md={1} >{props.district}</Col>
                <Col className='list-view-col' md={1} >{props.province}</Col>
                <Col className='list-view-col student-btn-view' md={0.5} ><button onClick={viewHandler}>View</button></Col>
                <Col className='list-view-col student-btn-view' md={0.5} ><button onClick={updateHandler}>Update</button></Col>
                <Col className='list-view-col student-btn-view' md={0.5} ><button onClick={deleteHandler}>Delete</button></Col>
            </Row >

            {/* {(payClicked) ? <Row><StudentPayment id={props.id} /></Row> : null}
            {(deleteClicked) ? <Row><DeleteRecord noClick={noClick} id={props.id} service={'student'} /></Row> : null} */}
        </Fragment >
    );
}

export default LocationRow;