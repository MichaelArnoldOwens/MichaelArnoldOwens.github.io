import React, { Component } from 'react';
import { Nav, Navbar } from 'react-bootstrap';
import { Link } from "react-router-dom";

export default class NavBar extends Component {
  render() {
    return (
      <Navbar bg="light" expand="lg">
        <Navbar.Brand>
          <Link to="/">Michael Owens</Link>
        </Navbar.Brand>
        <Nav.Link href="/" ><Link to="/">Home</Link></Nav.Link>
        <Nav.Link href="#about" ><Link to="/about">About</Link></Nav.Link>
        <Nav.Link href="#todo" ><Link to="/about">TODO</Link></Nav.Link>
      </Navbar>
    );
  }
}
