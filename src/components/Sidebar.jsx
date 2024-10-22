import React from 'react';
import { Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { FaHome,   FaUser } from 'react-icons/fa';
import { NavLink } from 'react-router-dom';

import './Sidebar.css'; 

function Sidebar() {
  return (
    <Nav className="flex-column vh-100 p-3 sidebar">
      <h5 className="text-center">WING</h5>
      <Nav.Item>
        <Nav.Link as={Link} to="/dashboard"><FaHome /> Dashboard</Nav.Link>
      </Nav.Item>
     
      
      <Nav.Item>
      <NavLink to="/profile" className="nav-link" activeClassName="active">
            <FaUser /> Profile
          </NavLink>
      </Nav.Item>
    </Nav>
  );
}

export default Sidebar;
