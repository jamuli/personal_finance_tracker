import React from 'react';
import { Nav } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

const SignedOutLink = () => {
  return (
    <Nav.Link as={NavLink} to="/signin">login</Nav.Link>

  )
}

export default SignedOutLink

