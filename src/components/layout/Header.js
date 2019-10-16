import React, { Component } from 'react'
import { Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import SignedInLink from './SignedInLink.js';
import SignedOutLink from './SignedOutLink.js';
import SignUpLink from './SignUpLink.js'

export class Header extends Component {
  render() {
    return (
      <div>
        <Navbar bg="light" expand="lg">
          <Navbar.Brand as={Link} to="/">My Finances</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
              <Nav.Link as={Link} to="/">Home</Nav.Link>
              <Nav.Link as={Link} to="/budgets">Budget</Nav.Link>
              <Nav.Link as={Link} to="/investments">Investments</Nav.Link>
              <Nav.Link as={Link} to="/bills">Bills</Nav.Link>
              <Nav.Link as={Link} to="/about">About</Nav.Link>
              <SignUpLink />
              <SignedOutLink />
              <SignedInLink />
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </div>
    )
  }
}

export default Header
