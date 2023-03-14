import { Container, Row, Col } from "react-bootstrap";
import LocationRow from "./LocationRow";
import './LocationDetails.css';

const LocationDetails = (props) => {
    const locationList = props.locationList.map(location => {
        return {
            id: location.tuitionClassId,
            address: location.address,
            district: location.district,
            province: location.province,
            name: location.locationName
        }
    }
    );

    console.log(props.locationList);
    return (
        <Container className="list-view-container">
            <div className='list-view-div'>
                <Row className='list-title-row'>
                    <Col className='list-view-col' md={1} >Location Name</Col>
                    <Col md={2} className='list-view-col'>Address</Col>
                    <Col md={1} className='list-view-col'>District</Col>
                    <Col md={1} className='list-view-col'>Province</Col>
                    <Col md={1} className='list-view-col student-btn-view'></Col>
                    <Col md={1} className='list-view-col student-btn-view'></Col>
                </Row>

                {locationList.map((location) => (
                    <LocationRow props={location} />
                ))}
            </div>
        </Container>
    );
}

export default LocationDetails;