import { Nav, Navbar, Brand, Link } from "bootstrap-4-react/lib/components";
import { Fragment } from "react";
import { NavLink } from "react-router-dom";
import './Navigation.css';

const Navigation = () => {
    return (
        <Fragment>
            <Navbar bg="dark" veriant="dark" sticky="top">
                <Navbar.Brand className='brand' href=''>Perera's Tuition Centre</Navbar.Brand>
                <div className="nav-class">
                    <NavLink className='nav-item' to='' activeClassName=''>Payment</NavLink>
                    <NavLink className='nav-item' to='' nav-item activeClassName=''>Location</NavLink>
                </div>
                <div className="sign-out-class">
                    <Nav.Link className="nav-link" href="#home">Signout</Nav.Link>
                </div>

                {/* <Nav className="nav-item">

                </Nav> */}
            </Navbar>


        </Fragment>
    );
}

export default Navigation;