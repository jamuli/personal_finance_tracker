import React from 'react';
import { Nav } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

const SignedInLink = () => {
  return (
    <Nav.Link as={NavLink} to="/logout">logout</Nav.Link>
    
  )
}

export default SignedInLink
