import { Fragment, useState } from "react";
import { Row, Col } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import DeleteRecord from "../common/DeleteRecord";
import './LocationRow.css';

const LocationRow = ({ props }) => {
    const [deleteClicked, setDeleteClicked] = useState(false);
    const navigate = useNavigate();

    console.log(props.id);

    function updateHandler() {
        navigate('/location/update/' + props.id, {
            state: {
                id: props.id,
                name: props.name,
                district: props.district,
                province: props.province,
                address: props.address
            }
        });
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
                <Col className='list-view-col' md={1} >{props.name}</Col>
                <Col className='list-view-col' md={2} >{props.address}</Col>
                <Col className='list-view-col' md={1} >{props.district}</Col>
                <Col className='list-view-col' md={1} >{props.province}</Col>
                <Col className='list-view-col student-btn-view' md={1} ><button onClick={updateHandler}>Update</button></Col>
                <Col className='list-view-col student-btn-view' md={1} ><button onClick={deleteHandler}>Delete</button></Col>
            </Row >

            {(deleteClicked) ? <Row><DeleteRecord noClick={noClick} id={props.id} service={'location'} /></Row> : null}
        </Fragment >
    );
}

export default LocationRow;