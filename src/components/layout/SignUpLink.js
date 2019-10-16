import React from 'react';
import { Nav } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

const SignUpLink = () => {
  return (
    <Nav.Link as={NavLink} to="/signup">Sign Up</Nav.Link>
  )
}

export default SignUpLink