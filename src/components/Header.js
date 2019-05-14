import React, { useState, useContext } from "react";
import { UserContext } from "./UserProvider";
import { NavLink, Link } from "react-router-dom";
import { Collapse, Navbar, NavbarToggler, Nav, NavItem } from "reactstrap";

function Header() {
  const context = useContext(UserContext);
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => {
    setIsOpen(!isOpen);
  };
  return (
    <React.Fragment>
      <Navbar color="dark" dark expand="md">
        <Link to="/" className="navbar-brand">
          React Context
        </Link>
        <NavbarToggler onClick={() => toggle()} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="ml-auto" navbar>
            <NavItem>
              <NavLink className="nav-link" to="/about">
                About
              </NavLink>
            </NavItem>
            {context.loggedIn ? (
              <>
                <NavItem>
                  <NavLink className="nav-link" to="/dashboard">
                    Dashboard
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink
                    className="nav-link"
                    onClick={() => context.logout()}
                    to="/login"
                  >
                    Logout
                  </NavLink>
                </NavItem>
              </>
            ) : (
              <NavItem>
                <NavLink className="nav-link" to="/login">
                  Login
                </NavLink>
              </NavItem>
            )}
          </Nav>
        </Collapse>
      </Navbar>
    </React.Fragment>
  );
}

export default Header;
