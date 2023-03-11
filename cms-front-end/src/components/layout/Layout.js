import { Fragment } from "react";
import Navigation from "./Navigation";
import './Layout.css';

const Layout = (props) => {
    return (
        <Fragment>
            <Navigation />
            <main className="main"> {props.children}</main>
        </Fragment>
    );
}

export default Layout;