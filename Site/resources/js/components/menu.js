import React, {Component, Fragment} from 'react';
import {Nav, Navbar} from "react-bootstrap";
import "../../css/style.css";
import NavLogo from '../../images/logo.svg'
import {NavLink} from "react-router-dom";
class Menu extends Component {
    render() {
        return (
            <Fragment>
                <Navbar className="fixed-top" variant="light" expand="lg">
                    <Navbar.Brand href="#home"><img className="nav-logo" src={NavLogo}/></Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="mr-auto">
                            <NavLink  className="nav-font" to="/"  href="#home">Home</NavLink>
                            <NavLink className="nav-font"  to="/courseplan" href="#link">Course Plan</NavLink>
                            <NavLink className="nav-font"  to="/registration" href="#link">Registration</NavLink>
                            <NavLink className="nav-font" to="/freeclass"   href="#link">Free Class</NavLink>
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
            </Fragment>
        );
    }
}

export default Menu;
