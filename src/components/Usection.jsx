import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import UImg from '../assests/E2.jpg'
import './Usection.css'
import Button from 'react-bootstrap/Button';
import { useAuth } from "../statestore/Authcontext";
import { Link } from 'react-router-dom';



export const Usection = () => {
  const { query, setQuery, filteredProducts } = useAuth();

  const handleSearchChange = (e) => {
    setQuery(e.target.value);
  };

  return (
    <section>
      <Container>
        <Row>
          <Col lg='6' md='6'>
            <div className="Ucontent">
              <h2>Learn Today, Lead Tomorrow.</h2>
              <h4>Where Clever Ideas Blossom.</h4>
              <p>ELearning Technologies is dedicated to supporting faculty, contributing to teaching excellence, and enhancing student success through exemplary instructional design, effective application and integration of instructional technologies, interactive digital media development, administration, and enhancement of the university’s enterprise learning management system (Blackboard), and the deployment of innovative emerging technologies.</p>
            </div>
          </Col>

          <Col lg='6' md='6'>
            <img src={UImg} alt="Educational visual" className='w-100' />
          </Col>
        </Row>
        <Row>
          <Col>
            <div className="search">
              <input
                type="search"
                placeholder='Discover Your Passion'
                onChange={handleSearchChange}
                value={query}
              />
              <Button variant="primary">Search</Button>{' '}
            </div>
            {query && (
              <div className="results2">
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
          </Col>
        </Row>
      </Container>
    </section>
  );
}