import React from 'react';
import { Container, Row, Col, Card, Button, Image, Table, ProgressBar } from 'react-bootstrap';
import { FaEdit, FaCertificate, FaMedal } from 'react-icons/fa';
import Sidebar from '../../components/Sidebar';
import Topbar from '../../components/Topbar';
import './Profile.css'; // Import custom CSS

function Profile() {
  return (
    <Container fluid className="dashboard-container mt-4">
      <Row>
        {/* Sidebar for Dashboard Navigation */}
        <Col md={2}>
          <Sidebar />
        </Col>

        {/* Main Profile Content */}
        <Col md={10}>
          <Topbar />

          {/* User Info Section */}
          <Row className="mb-4">
            <Col md={4}>
              <Card className="text-center shadow-sm">
                <Card.Body>
                  <Image
                    src="/path/to/profile-picture.jpg" // Replace with user's profile picture path
                    roundedCircle
                    width="150"
                    height="150"
                  />
                  <h4 className="mt-3">John Doe</h4>
                  <p className="text-muted">johndoe@example.com</p>
                  <Button variant="primary" className="btn-sm">
                    <FaEdit /> Edit Profile
                  </Button>
                </Card.Body>
              </Card>
            </Col>

            {/* Learning Progress Overview */}
            <Col md={8}>
              <Card className="shadow-sm">
                <Card.Body>
                  <h5>Learning Progress Overview</h5>
                  <Row>
                    <Col md={4}>
                      <Card className="text-center shadow-sm mb-3">
                        <Card.Body>
                          <h6>Enrolled Courses</h6>
                          <p>5 courses enrolled</p>
                        </Card.Body>
                      </Card>
                    </Col>
                    <Col md={4}>
                      <Card className="text-center shadow-sm mb-3">
                        <Card.Body>
                          <h6>Completed Courses</h6>
                          <p>3 courses completed</p>
                        </Card.Body>
                      </Card>
                    </Col>
                    <Col md={4}>
                      <Card className="text-center shadow-sm mb-3">
                        <Card.Body>
                          <h6>Pending Assessments</h6>
                          <p>2 pending assessments</p>
                        </Card.Body>
                      </Card>
                    </Col>
                  </Row>
                </Card.Body>
              </Card>
            </Col>
          </Row>

          {/* Achievements Section */}
          <Row>
            <Col md={6}>
              <Card className="shadow-sm mb-4">
                <Card.Body>
                  <h5>Achievements</h5>
                  <ul>
                    <li><FaMedal className="text-warning" /> Completed 5 courses</li>
                    <li><FaCertificate className="text-success" /> Earned 3 certificates</li>
                    <li><FaMedal className="text-primary" /> Best performer in JavaScript</li>
                  </ul>
                </Card.Body>
              </Card>
            </Col>

            {/* Course Progress Section */}
            <Col md={6}>
              <Card className="shadow-sm mb-4">
                <Card.Body>
                  <h5>Course Progress</h5>
                  <Table striped bordered hover responsive>
                    <thead>
                      <tr>
                        <th>#</th>
                        <th>Course</th>
                        <th>Progress</th>
                        <th>Action</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>1</td>
                        <td>Front-End Development with React</td>
                        <td><ProgressBar now={80} label={`${80}%`} variant="success" /></td>
                        <td><Button variant="primary">Resume</Button></td>
                      </tr>
                      <tr>
                        <td>2</td>
                        <td>Back-End Development with Node.js</td>
                        <td><ProgressBar now={60} label={`${60}%`} variant="warning" /></td>
                        <td><Button variant="primary">Resume</Button></td>
                      </tr>
                      <tr>
                        <td>3</td>
                        <td>Data Science with Python</td>
                        <td><ProgressBar now={40} label={`${40}%`} variant="danger" /></td>
                        <td><Button variant="primary">Resume</Button></td>
                      </tr>
                    </tbody>
                  </Table>
                </Card.Body>
              </Card>
            </Col>
          </Row>

          {/* Account Settings Section */}
          <Row>
            <Col md={12}>
              <Card className="shadow-sm">
                <Card.Body>
                  <h5>Account Settings</h5>
                  <Button variant="secondary" className="mr-2">Change Password</Button>
                  <Button variant="danger">Delete Account</Button>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  );
}

export default Profile;
