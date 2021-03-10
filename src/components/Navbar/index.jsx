import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';

export default function Header({ routes = [] }) {
  return (
    <Navbar bg="dark" variant="dark" expand="lg">
      <Navbar.Brand href="/">Todo App</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          { routes.map(({ path, name }) => (
            <Link key={path} className="nav-link" to={path}>{name}</Link>
          ))}
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}
