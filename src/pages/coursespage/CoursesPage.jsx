import React, { useState, useEffect, useContext } from "react";
import Modal from "react-modal"; // Import react-modal
import { AuthContext } from "../../statestore/Authcontext";

// Required step for accessibility; this binds the modal to the app element
Modal.setAppElement("#root");

// Sample JSON data
const coursesData = [
  {
    id: 1,
    title: "Front End Development Using React",
    lessons: [
      "Introduction to React",
      "JSX and Components",
      "State and Props",
      "Lifecycle Methods",
      "React Hooks",
      "Handling Events",
    ],
    rating: 4.9,
    students: 10400,
  },
  {
    id: 2,
    title: "Front End Development Using Angular",
    lessons: [
      "Introduction to Angular",
      "Angular Components and Templates",
      "Data Binding and Directives",
      "Services and Dependency Injection",
      "Routing and Navigation",
      "Angular Forms",
    ],
    rating: 5.2,
    students: 15400,
  },
  {
    id: 3,
    title: "Back End Developing Using .Net",
    lessons: [
      "Introduction to .NET",
      "C# Basics",
      "ASP.NET Core Overview",
      "Working with MVC",
      "Entity Framework Core",
      "Deploying .NET Applications",
    ],
    rating: 4.5,
    students: 9500,
  },
];

const CoursesPage = () => {
  const { user, logout } = useContext(AuthContext);
  const [courses, setCourses] = useState([]);
  const [selectedCourse, setSelectedCourse] = useState(null);
  const [modalType, setModalType] = useState(null); // 'add', 'update', or 'delete'

  useEffect(() => {
    // Store the courses data in local storage
    localStorage.setItem("courses", JSON.stringify(coursesData));
    const storedCourses = localStorage.getItem("courses");
    setCourses(JSON.parse(storedCourses));
  }, []);

  const handleAddCourse = (newCourse) => {
    const updatedCourses = [...courses, newCourse];
    setCourses(updatedCourses);
    localStorage.setItem("courses", JSON.stringify(updatedCourses));
  };

  const handleUpdateCourse = (updatedCourse) => {
    const updatedCourses = courses.map((course) =>
      course.id === updatedCourse.id ? updatedCourse : course
    );
    setCourses(updatedCourses);
    localStorage.setItem("courses", JSON.stringify(updatedCourses));
  };

  const handleDeleteCourse = (id) => {
    const updatedCourses = courses.filter((course) => course.id !== id);
    setCourses(updatedCourses);
    localStorage.setItem("courses", JSON.stringify(updatedCourses));
  };

  const openModal = (type, course = null) => {
    setModalType(type);
    setSelectedCourse(course);
  };

  const closeModal = () => {
    setModalType(null);
    setSelectedCourse(null);
  };

  return (
    <div>
      {user? (
        <>
          <div>
            <h1>Courses Management</h1>
            <button onClick={() => openModal("add")}>Add New Course</button>
            <table>
              <thead>
                <tr>
                  <th>ID</th>
                  <th>Title</th>
                  <th>Lessons</th>
                  <th>Rating</th>
                  <th>Students</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {courses.map((course) => (
                  <tr key={course.id}>
                    <td>{course.id}</td>
                    <td>{course.title}</td>
                    <td>{course.lessons.length}</td>
                    <td>{course.rating}</td>
                    <td>{course.students}</td>
                    <td>
                      <button onClick={() => openModal("update", course)}>
                        Update
                      </button>
                      <button onClick={() => openModal("delete", course)}>
                        Delete
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>

            {/* Add/Update Modal */}
            {(modalType === "add" || modalType === "update") && (
              <Modal isOpen={true} onRequestClose={closeModal}>
                <h2>{modalType === "add" ? "Add Course" : "Update Course"}</h2>
                <form
                  onSubmit={(e) => {
                    e.preventDefault();
                    const newCourse = {
                      id:
                        modalType === "add"
                          ? courses.length + 1
                          : selectedCourse.id,
                      title: e.target.title.value,
                      lessons: e.target.lessons.value.split(","),
                      rating: parseFloat(e.target.rating.value),
                      students: parseInt(e.target.students.value),
                    };
                    if (modalType === "add") handleAddCourse(newCourse);
                    if (modalType === "update") handleUpdateCourse(newCourse);
                    closeModal();
                  }}
                >
                  <label>
                    Title:
                    <input
                      type="text"
                      name="title"
                      defaultValue={
                        modalType === "update" ? selectedCourse.title : ""
                      }
                      required
                    />
                  </label>
                  <br />
                  <label>
                    Lessons (comma-separated):
                    <input
                      type="text"
                      name="lessons"
                      defaultValue={
                        modalType === "update"
                          ? selectedCourse.lessons.join(",")
                          : ""
                      }
                      required
                    />
                  </label>
                  <br />
                  <label>
                    Rating:
                    <input
                      type="number"
                      name="rating"
                      defaultValue={
                        modalType === "update" ? selectedCourse.rating : ""
                      }
                      step="0.1"
                      min="0"
                      max="5"
                      required
                    />
                  </label>
                  <br />
                  <label>
                    Students:
                    <input
                      type="number"
                      name="students"
                      defaultValue={
                        modalType === "update" ? selectedCourse.students : ""
                      }
                      required
                    />
                  </label>
                  <br />
                  <button type="submit">
                    {modalType === "add" ? "Add" : "Update"} Course
                  </button>
                </form>
                <button onClick={closeModal}>Close</button>
              </Modal>
            )}

            {/* Delete Confirmation Modal */}
            {modalType === "delete" && (
              <Modal isOpen={true} onRequestClose={closeModal}>
                <h2>
                  Are you sure you want to delete "{selectedCourse.title}"?
                </h2>
                <button
                  onClick={() => {
                    handleDeleteCourse(selectedCourse.id);
                    closeModal();
                  }}
                >
                  Confirm Delete
                </button>
                <button onClick={closeModal}>Cancel</button>
              </Modal>
            )}
          </div>
        </>
      ) : (
        <h1>You are not logged in</h1>
      )}
    </div>
  );
};

export default CoursesPage;
