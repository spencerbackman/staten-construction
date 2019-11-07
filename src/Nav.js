import React from 'react';
import { Link } from 'react-router-dom';
import { Navbar, NavDropdown, Nav } from 'react-bootstrap';
import dsLogo from './images/logo.png';
import './scss/nav.scss';

class NavMenu extends React.Component {
    constructor() {
        super();
        this.state = {
            navExpanded: false
        }
    }
    setNavExpanded = () => {
        this.setState({ navExpanded: !this.state.navExpanded })
    }
    closeNav = () => {
        this.setState({ navExpanded: false })
    }
    render() {
        return (
            <div>
                <Navbar id="navbar" expand="lg" fixed="top" onToggle={this.setNavExpanded} expanded={this.state.navExpanded}>
                    <Navbar.Brand> <Link className="nav-header" to="/"> <img src={dsLogo} className="nav-logo" alt="Double S, Inc"/> </Link> </Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" id="nav-toggle" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav id="nav-link-container" variant="light" className="mr-auto">
                            <Nav.Link onClick={this.closeNav} className="nav-link-holder"> <Link className="nav-link" to="/"> HOME </Link> </Nav.Link>
                            <NavDropdown eventKey={2} className="nav-dropdown-holder" title="SERVICES" id="nav-dropdown">
                                <NavDropdown.Item onClick={this.closeNav} eventKey={2.1} className="dropdown-link-holder"> <Link className="dropdown-link" to="/asphalt"> Asphalt </Link> </NavDropdown.Item>
                                <NavDropdown.Item onClick={this.closeNav} eventKey={2.2} className="dropdown-link-holder"> <Link className="dropdown-link" to="/asphalt-overlay"> Asphalt Overlay </Link> </NavDropdown.Item>
                                <NavDropdown.Item onClick={this.closeNav} eventKey={2.3} className="dropdown-link-holder"> <Link className="dropdown-link" to="/concrete"> Concrete </Link> </NavDropdown.Item>
                                <NavDropdown.Item onClick={this.closeNav} eventKey={2.4} className="dropdown-link-holder"> <Link className="dropdown-link" to="/demolition-and-repairs"> Demo & Repairs </Link> </NavDropdown.Item>
                                <NavDropdown.Item onClick={this.closeNav} eventKey={2.5} className="dropdown-link-holder"> <Link className="dropdown-link" to="/parking-lots"> Parking Lots </Link> </NavDropdown.Item>
                                <NavDropdown.Item onClick={this.closeNav} eventKey={2.6} className="dropdown-link-holder"> <Link className="dropdown-link" to="/seal-coating"> Seal Coating </Link> </NavDropdown.Item>
                                <NavDropdown.Item onClick={this.closeNav} eventKey={2.7} className="dropdown-link-holder"> <Link className="dropdown-link" to="/site-preparation"> Site Preparation </Link> </NavDropdown.Item>
                            </NavDropdown>
                            <Nav.Link onClick={this.closeNav} className="nav-link-holder"> <Link className="nav-link" to="/about"> ABOUT </Link> </Nav.Link>
                            <Nav.Link onClick={this.closeNav} className="nav-link-holder"> <Link className="nav-link" to="/contact"> CONTACT </Link> </Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
            </div>
        )
    }
}

export default NavMenu;