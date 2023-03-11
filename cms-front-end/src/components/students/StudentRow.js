import { Button } from "bootstrap-4-react/lib/components";
import { Fragment, useEffect, useState } from "react";
import { Row, Col } from "react-bootstrap";
import { NavLink, Route } from "react-router-dom";
import UpdateStudent from "../../pages/UpdateStudent";
import StudentDetailView from "./StudentDetailView";
// import edit from '.';
import './StudentRow.css';
const StudentRow = (props) => {
    const [showDetail, setShowDetail] = useState(false);
    // console.log('Before click button: ' + props.id);

    function deleteHandler() {
        console.log('Delete buttion clicked' + props.id);
    }

    function viewHandler() {
        console.log('Delete buttion clicked' + props.id);
        if ((showDetail) ? setShowDetail(false) : setShowDetail(true));
    }

    // function checkExisting() {

    // }

    // useEffect(() => {

    // }, [showDetail]);

    return (
        <Fragment>
            <Row className=''>
                <Col className='list-view-col' md={1} >{props.firstName}</Col>
                <Col className='list-view-col' md={2} >{props.lastName}</Col>
                <Col className='list-view-col' md={1} >{props.address}</Col>
                <Col className='list-view-col' md={1} >{props.gender}</Col>
                <Col className='list-view-col' md={1} >{props.age}</Col>
                <Col className='list-view-col' md={1} >{props.phoneNumber}</Col>
                <Col className='list-view-col' md={1} >{props.studentStatus}</Col>
                <Col className='list-view-col' md={1} >{props.locationId}</Col>
                <Col className='list-view-col' md={1} >{props.joinedDate}</Col>
                <Col className='list-view-col student-btn-view' md={0.5} ><button onClick={viewHandler}>View</button></Col>
                <Route path='/students/update:studentId' exact>
                    <UpdateStudent functionName='Update' />
                </Route>
                <Col className='list-view-col' md={0.5} ><NavLink to={`/students/update:${props.id}`} >update</NavLink></Col>
                {/* <Col className='list-view-col' md={0.5} ><NavLink to={`/students/delete:${props.studentId}`} >Dalete</NavLink></Col> */}
                <Col className='list-view-col' md={0.5} ><button onClick={deleteHandler}>Delete</button></Col>
            </Row >
            {showDetail ? (<Row >
                <StudentDetailView props={props.id} />
            </Row>) : null}

        </Fragment>
    )
}

export default StudentRow;