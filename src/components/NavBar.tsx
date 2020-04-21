import React from 'react';
import { Nav, Navbar } from 'react-bootstrap';
import { Link, useHistory } from "react-router-dom";

const NavBar = () => {
  return (
    <Navbar bg="light" expand="lg">
        <Navbar.Brand>
          <Link to="/">Michael Owens</Link>
        </Navbar.Brand>
        <Link className="nav-link" to="/">Home</Link>
        <Link className="nav-link" to="/about">About</Link>
        <Link className="nav-link" to="/todo">Todo</Link>
      </Navbar>
  );
}

export default NavBar;
