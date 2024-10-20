import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Mimage from '../assests/E3.jpg'
import './Mainsection.css'


export const Mainsection = () => {
  return (
    <Container>
      <Row>
        <Col><img src={Mimage} alt="" className='w-50' /></Col>
        
      </Row>
      <Row>
        <Col ><div className="aboutus">
        <h1>About us:</h1>
        <p>Welcome to WING<br></br>  
            At WING, we believe that education is the key to unlocking potential.
             Whether you're a student looking to<br></br> improve your skills or a professional 
             seeking to stay ahead in your field, our platform offers a range of<br></br>
              high-quality online courses designed to empower learners worldwide.</p>
            </div></Col>
        
        
        
      </Row>
      <Row>
        <Col><div className="ourm">
        <h1>Our Mission:</h1>
        <p>Our mission is simple: to provide accessible, affordable,
             and engaging education for all.<br></br> We understand that learning is 
             a lifelong journey, and we are committed to <br></br>offering the tools 
             and resources that help you achieve your personal<br></br> and professional goals.
              By bridging the gap between knowledge and opportunity,<br></br>we aim to make learning more
               inclusive and impactful.</p>
        </div>
        </Col>
        
      </Row>
    </Container>
  );
}
