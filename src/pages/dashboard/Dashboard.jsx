import React from 'react';
import { Container, Row, Col, Card, ProgressBar, Table, Button } from 'react-bootstrap';
import { Line } from 'react-chartjs-2';
import { FaBookOpen, FaCheckCircle, FaTasks } from 'react-icons/fa';
import './Dashboard.css'; // Import the custom CSS
import Sidebar from '../../components/Sidebar';
import Topbar from '../../components/Topbar';
import Profile from '../profile/Profile';


import {
  Chart as ChartJS,
  CategoryScale, 
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
} from 'chart.js';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const data = {
  labels: ['January', 'February', 'March', 'April', 'May', 'June'],
  datasets: [
    {
      label: 'Completed Courses',
      data: [1, 2, 4, 5, 6, 8],
      borderColor: 'rgba(75, 192, 192, 1)',
      backgroundColor: 'rgba(75, 192, 192, 0.2)',
      fill: true,
    },
  ],
};

function Dashboard() {
  return (
    
    
    <Container fluid className="dashboard-container"> {/* Added custom class */}
      <Row>
        {/* Sidebar */}
        <Col md={2}>
          <Sidebar />
        </Col>

        {/* Main Dashboard */}
        <Col md={10}>
          <Topbar />

          {/* Overview Cards */}
          <Row className="mb-4">
            <Col md={4}>
              <Card className="shadow-sm">
                <Card.Body>
                  <FaBookOpen size={24} className="text-primary" />
                  <Card.Title>Enrolled Courses</Card.Title>
                  <Card.Text>5 courses enrolled</Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col md={4}>
              <Card className="shadow-sm">
                <Card.Body>
                  <FaCheckCircle size={24} className="text-success" />
                  <Card.Title>Completed Courses</Card.Title>
                  <Card.Text>3 courses completed</Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col md={4}>
              <Card className="shadow-sm">
                <Card.Body>
                  <FaTasks size={24} className="text-warning" />
                  <Card.Title>Pending Tasks</Card.Title>
                  <Card.Text>2 pending assessments</Card.Text>
                </Card.Body>
              </Card>
            </Col>
          </Row>

          {/* Chart Section */}
          <Row className="mb-4">
            <Col>
              <Card>
                <Card.Body>
                  <Card.Title>Progress Overview</Card.Title>
                  <Line data={data} />
                </Card.Body>
              </Card>
            </Col>
          </Row>

          {/* Course Progress Table */}
          <Row>
            <Col>
              <Card className="shadow-sm">
                <Card.Body>
                  <Card.Title>Course Progress</Card.Title>
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
                        <td>Front_End Developing Using React
                        </td>
                        <td><ProgressBar now={80} label={`${80}%`} variant="success" /></td>
                        <td><Button variant="primary">Resume</Button></td>
                      </tr>
                      <tr>
                        <td>2</td>
                        <td>Front_End Developing Using Angular
                        </td>
                        <td><ProgressBar now={60} label={`${60}%`} variant="warning" /></td>
                        <td><Button variant="primary">Resume</Button></td>
                      </tr>
                      <tr>
                        <td>3</td>
                        <td>Back_End Developing Using .Net
                        </td>
                        <td><ProgressBar now={40} label={`${40}%`} variant="danger" /></td>
                        <td><Button variant="primary">Resume</Button></td>
                      </tr>
                    </tbody>
                  </Table>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>

    
  );
}

export default Dashboard;
