import React from 'react'
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import C1 from '../assests/c1.jpg'
import C2 from '../assests/c2.jpg'
import C3 from '../assests/c3.png'

export const CourseCard = () => {
    return (
        <CardGroup>
          <Card>
            <Card.Img variant="top" src={C1} />
            <Card.Body>
              <Card.Title>Front_End Developing Using React</Card.Title>
              <Card.Text>
              <div className="d-flex justfy-content-between align-items-center">
                    {/* Replace <p> with <div> or <span> */}
                    <div className="lesson d-flex align-items-center gap-1">
                        <i className="ri-book-open-fill"></i> 6 Lessons
                    </div>
                    <div className="students d-flex justfy-content-between align-items-center">
                        <i className="ri-graduation-cap-fill"></i>10.4k
                    </div>
                    <div className="rating d-flex align-items-center gap-1">
                        <i className="ri-star-fill"></i> 4.9
                    </div>
                    <div className="enroll d-flex justfy-content-between align-items-center">
                        <a href="#">Enroll Now</a>
                    </div>
                </div>
              </Card.Text>
            </Card.Body>
            <Card.Footer>
              <small className="text-muted">Last updated 3 mins ago</small>
            </Card.Footer>
          </Card>

          <Card>
            <Card.Img variant="top" src={C2} />
            <Card.Body>
              <Card.Title>Front_End Developing Using Angular</Card.Title>
              <Card.Text>
              <div className="d-flex justfy-content-between align-items-center">
                    <div className="lesson d-flex align-items-center gap-1">
                        <i className="ri-book-open-fill"></i> 6 Lessons
                    </div>
                    <div className="students d-flex justfy-content-between align-items-center">
                        <i className="ri-graduation-cap-fill"></i>15.4k
                    </div>
                    <div className="rating d-flex align-items-center gap-1">
                        <i className="ri-star-fill"></i> 5.2
                    </div>
                    <div className="enroll d-flex justfy-content-between align-items-center">
                        <a href="#">Enroll Now</a>
                    </div>
                </div>
              </Card.Text>
            </Card.Body>
            <Card.Footer>
              <small className="text-muted">Last updated 3 mins ago</small>
            </Card.Footer>
          </Card>

          <Card>
            <Card.Img variant="top" src={C3} />
            <Card.Body>
              <Card.Title>Back_End Developing Using .Net</Card.Title>
              <Card.Text>
              <div className="d-flex justfy-content-between align-items-center">
                    <div className="lesson d-flex align-items-center gap-1">
                        <i className="ri-book-open-fill"></i> 6 Lessons
                    </div>
                    <div className="students d-flex justfy-content-between align-items-center">
                        <i className="ri-graduation-cap-fill"></i>9.5k
                    </div>
                    <div className="rating d-flex align-items-center gap-1">
                        <i className="ri-star-fill"></i> 4.5
                    </div>
                    <div className="enroll d-flex justfy-content-between align-items-center">
                        <a href="#">Enroll Now</a>
                    </div>
                </div>
              </Card.Text>
            </Card.Body>
            <Card.Footer>
              <small className="text-muted">Last updated 3 mins ago</small>
            </Card.Footer>
          </Card>
        </CardGroup>
      );
}
