import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { NavbarNew } from "./components/Navbar";
// import Button from 'react-bootstrap/Button';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import "remixicon/fonts/remixicon.css";
import SignUp from "./pages/signup/Signup";
import Dashboard from "./pages/dashboard/Dashboard";
import AuthProvider from "./statestore/Authcontext";
import CoursesPage from "./pages/coursespage/CoursesPage";
import CourseDetailPage from "./pages/coursedetailpage/CourseDetailPage";
function App() {
  return (
    <div className="App">
      <AuthProvider>
        <Router>
          <NavbarNew />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/courses" element={<CoursesPage />} />
            <Route path="/courses/:id" element={<CourseDetailPage />} />
          </Routes>
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
