import React from 'react';
import { Link } from 'react-router-dom';
import { Navbar, NavDropdown, Nav } from 'react-bootstrap';
import dsLogo from './images/logo.png';
import './scss/nav.scss';

class NavMenu extends React.Component {
    render() {
        return (
            <div>
                <Navbar id="navbar" expand="lg" fixed="top">
                    <Navbar.Brand> <Link className="nav-header" to="/"> <img src={dsLogo} className="nav-logo" alt="Double S, Inc"/> </Link> </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                        <Nav id="nav-link-container" className="mr-auto">
                            <Nav.Link className="nav-link-holder"> <Link className="nav-link" to="/"> HOME </Link> </Nav.Link>
                            <NavDropdown className="nav-link-holder" title="SERVICES" id="basic-nav-dropdown">
                                <NavDropdown.Item className="dropdown-link-holder"> <Link className="dropdown-link" to="/asphalt"> Asphalt </Link> </NavDropdown.Item>
                                <NavDropdown.Item className="dropdown-link-holder"> <Link className="dropdown-link" to="/asphalt-overlay"> Asphalt Overlay </Link> </NavDropdown.Item>
                                <NavDropdown.Item className="dropdown-link-holder"> <Link className="dropdown-link" to="/concrete"> Concrete </Link> </NavDropdown.Item>
                                <NavDropdown.Item className="dropdown-link-holder"> <Link className="dropdown-link" to="/demolition-and-repairs"> Demo & Repairs </Link> </NavDropdown.Item>
                                <NavDropdown.Item className="dropdown-link-holder"> <Link className="dropdown-link" to="/parking-lots"> Parking Lots </Link> </NavDropdown.Item>
                                <NavDropdown.Item className="dropdown-link-holder"> <Link className="dropdown-link" to="/seal-coating"> Seal Coating </Link> </NavDropdown.Item>
                                <NavDropdown.Item className="dropdown-link-holder"> <Link className="dropdown-link" to="/site-preparation"> Site Preparation </Link> </NavDropdown.Item>
                            </NavDropdown>
                            <Nav.Link className="nav-link-holder"> <Link className="nav-link" to="/about"> ABOUT </Link> </Nav.Link>
                            <Nav.Link className="nav-link-holder"> <Link className="nav-link" to="/contact"> CONTACT </Link> </Nav.Link>
                        </Nav>
                </Navbar>
            </div>
        )
    }
}

export default NavMenu;