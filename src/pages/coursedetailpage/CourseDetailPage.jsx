// export default CourseDetailPage;
import React from 'react';
import { useParams } from 'react-router-dom';
import './CourseDetailPage.css'; // Import the CSS file

const CourseDetailPage = () => {
  const { id } = useParams(); // Get the course ID from the URL
  const courses = JSON.parse(localStorage.getItem('courses'));
  const course = courses.find(course => course.id === parseInt(id));

  return (
    <div className="course-detail">
      <h1 className="course-title">{course.title}</h1>
      <h3 className="lessons-heading">Lessons:</h3>
      <ul className="lessons-list">
        {course.lessons.map((lesson, index) => (
          <li key={index} className="lesson-item">{lesson}</li>
        ))}
      </ul>
    </div>
  );
};

export default CourseDetailPage;
