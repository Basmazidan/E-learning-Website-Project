import React from "react";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Offcanvas from "react-bootstrap/Offcanvas";
import { Link } from "react-router-dom";
import { useAuth } from "../statestore/Authcontext";
import './Navbar.css'

export function NavbarNew() {

  const { query, setQuery, filteredProducts } = useAuth();

  const handleSearchChange = (e) => {
    setQuery(e.target.value);
  };
  return (
    <>
      <Navbar expand="lg" className="Navbar bg-body-tertiary mb-3" style={{ backgroundColor: 'violet' }} >
        <Container fluid >
          <Navbar.Brand href="/">E-Learning</Navbar.Brand>
          <Navbar.Toggle aria-controls="offcanvasNavbar" />
          <Navbar.Offcanvas
            id="offcanvasNavbar"
            aria-labelledby="offcanvasNavbarLabel"
            placement="end"
          >
            <Offcanvas.Header closeButton>
              <Offcanvas.Title id="offcanvasNavbarLabel">Menu</Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
              <Nav className="justify-content-end flex-grow-1 pe-3">
                <Nav.Link as={Link} to="/">
                  Home
                </Nav.Link>
                <Nav.Link as={Link} to="/dashboard">
                  Dashboard
                </Nav.Link>
                <NavDropdown title="Courses" id="offcanvasNavbarDropdown">
                  <NavDropdown.Item href="/courses/1">
                    {" "}
                    Front End Developing Using React
                  </NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="/courses/2">
                    Front End Developing Using Angular
                  </NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="/courses/3">
                    Back End Developing Using .Net
                  </NavDropdown.Item>
                </NavDropdown>
                <Nav.Link as={Link} to="/Quizs">
                  Quizs
                </Nav.Link>
                <Nav.Link as={Link} to="/login">
                  Login
                </Nav.Link>
              </Nav>

              <Form className="d-flex">
                <Form.Control
                  type="search"
                  placeholder="Search"
                  className="me-2"
                  aria-label="Search"
                  onChange={handleSearchChange}
                  value={query}
                />
                <Button variant="btn btn-outline-dark">Search</Button>
              </Form>
              {query && (
                <div className="results">
                  <ul>
                    {filteredProducts.length > 0 ? (
                      filteredProducts.map((course) => (
                        <li key={course.id}>
                          <Link to={`/courses/${course.id}`}>{course.title}</Link>
                        </li>
                      ))
                    ) : (
                      <li>No results found</li>
                    )}
                  </ul>
                </div>
              )}
            </Offcanvas.Body>
          </Navbar.Offcanvas>
        </Container>
      </Navbar>
    </>
  );
}
