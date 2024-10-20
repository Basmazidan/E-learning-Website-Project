import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import E4 from '../assests/E4.jpg'
import line2 from '../assests/line2.jpg'

import './Chooseus.css'

export const Chooseus = () => {
    return (
        <Container>
            <Row>
            <Col><img src={line2} alt="" /></Col>
          </Row>
          <Row>
            <Col>
        <h1>Why Choose Us?</h1>
             </Col>
            
          </Row>
          <Row>
            <Col>
            <p>Expert Instructors: Our courses are taught by industry experts with real-world experience.</p>
            <p>Community Support: Join a global community of learners, collaborate on projects, and exchange ideas.</p>
            </Col>
            <Col><p>Flexible Learning: Learn on your schedule—pause, rewind, and revisit lessons anytime</p>
            <p>Certifications: Receive verified certificates upon course completion to showcase your skills.</p>
            
            </Col>
            <Col><img src={E4} alt="" className='w-100' /></Col>
          </Row>
        </Container>
      );
}
