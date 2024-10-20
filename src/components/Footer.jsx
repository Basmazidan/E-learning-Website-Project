import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Footer.css'
import ListGroup from 'react-bootstrap/ListGroup';
import ListGroupItem from 'react-bootstrap/esm/ListGroupItem';

const footerQuicklinks = [
    {
        display:'Home',
        url:'#'
    },
    {
        display:'Dashboard',
        url:'#'
    },
    {
        display:'Courses',
        url:'#'
    },
    {
        display:'Login',
        url:'#'
    },
    

]
const footerInfolinks = [
    {
        display:'Privacy Policy',
        url:'#'
    },
    {
        display:'Terms of Services',
        url:'#'
    }

]

export const Footer = () => {
    return (
        <footer className="footer">
             <Container>
          <Row>
            <Col><h2 className='d-flex align-items-center gap-1'><i class="ri-lightbulb-flash-fill"></i>WING</h2>
            <div className="follows">
                <p>Follow us</p>
                <span className='f'>
                     <a href="facebook.com"><i
                 class="ri-facebook-circle-fill"></i></a></span>
                 <span className='n'> <a href="instagram.com"><i 
                 class="ri-instagram-fill"></i></a></span>
                 <span className='l'> <a href="linkedin.com"><i 
                 class="ri-linkedin-fill"></i></a></span>
                 <span className='t'> <a href="twitter.com"><i 
                 class="ri-twitter-x-fill"></i></a></span>
            </div></Col>
            
            
          </Row>
          <Row>
            <Col>
            <h6>Explore</h6>
            <ListGroup className='linkedlist'>
  {
    footerQuicklinks.map((item, index) => ( 
      <ListGroupItem key={index} className='oo'>
        <a href={item.url}>{item.display}</a>
      </ListGroupItem>
    ))
  }
           </ListGroup>
            </Col>
            <Col>
            <h6>Infotmation</h6>
            <ListGroup className='linkedlist'>
  {
    footerInfolinks.map((item, index) => ( 
      <ListGroupItem key={index} className='oo'>
        <a href={item.url}>{item.display}</a>
      </ListGroupItem>
    ))
  }
           </ListGroup></Col>
            <Col>
            <h6>Get In Touch</h6>
            <p>Address: Alexandria,Egypt</p>
            <p>Phone:+02 01235454565</p>
            <p>Email: Wing@gmail.com</p>

            </Col>
          </Row>
        </Container>
      
        </footer>
      );
}
