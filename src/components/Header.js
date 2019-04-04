import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <Navbar expand="lg" className="navbar-custom">
      <NavLink exact to="/" className="brand">
        Author&apos;s Haven
      </NavLink>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ml-auto">
          <NavLink to="/login" className="nav-link">
            Login
          </NavLink>
          <Nav.Link className="nav-link get-started">Get Started</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};
export default Header;
