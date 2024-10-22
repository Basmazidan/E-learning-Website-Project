import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { FaBell, FaUserCircle } from 'react-icons/fa';
import { Link } from 'react-router-dom'; // Import Link for navigation
import './Topbar.css'; 

function Topbar() {
  return (
    <Navbar className="custom-topbar mb-3">
      <Navbar.Brand>WING Dashboard</Navbar.Brand>
      <Nav className="ml-auto">
        <Nav.Link><FaBell /> Notifications</Nav.Link>
        <Nav.Link as={Link} to="/profile"><FaUserCircle /> Profile</Nav.Link>

       
      </Nav>
    </Navbar>
  );
}

export default Topbar;
