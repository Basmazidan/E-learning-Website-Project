import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Line from '../assests/line.jpg';
import bl from '../assests/bl.png'
import './Courses.css'



export const Courses = () => {
    return (
        <Container fluid="md">
          <Row>
            <Col><img src={Line} alt="" /></Col>
          </Row>
          <Row>
            <Col><img src={bl} alt="" className='w-100'/></Col>
          </Row>
          <Row>
            <Col><img src={Line} alt="" /></Col>
          </Row>
          
          
        
      
        </Container>
        
      );
}
