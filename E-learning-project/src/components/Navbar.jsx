import React from 'react';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { Link } from "react-router-dom";

export function NavbarNew () {
  return (
    <>
      <Navbar expand="lg" className="bg-body-tertiary mb-3">
        <Container fluid>
          <Navbar.Brand href="#">E-Learning</Navbar.Brand>
          <Navbar.Toggle aria-controls="offcanvasNavbar" />
          <Navbar.Offcanvas
            id="offcanvasNavbar"
            aria-labelledby="offcanvasNavbarLabel"
            placement="end"
          >
            <Offcanvas.Header closeButton>
              <Offcanvas.Title id="offcanvasNavbarLabel">
                Menu
              </Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
              <Nav className="justify-content-end flex-grow-1 pe-3">
                <Nav.Link as={Link} to="/">Home</Nav.Link>
                <Nav.Link as={Link} to="/dashboard">Dashboard</Nav.Link>
                <NavDropdown title="Courses" id="offcanvasNavbarDropdown">
                  <NavDropdown.Item href="#action3"> Digital Marketing</NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="#action4">
                    Web Development
                  </NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="#action5">
                    Mobile Development
                  </NavDropdown.Item>
                </NavDropdown>
                <Nav.Link as={Link} to="/login">Login</Nav.Link>
              </Nav>

              <Form className="d-flex">
                <Form.Control
                  type="search"
                  placeholder="Search"
                  className="me-2"
                  aria-label="Search"
                />
                <Button variant="outline-success">Search</Button>
              </Form>
            </Offcanvas.Body>
          </Navbar.Offcanvas>
        </Container>
      </Navbar>
    </>
  );
}
