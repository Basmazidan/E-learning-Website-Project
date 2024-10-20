import React, { useContext, useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Container from "react-bootstrap/Container";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../../E-learning-project/src/statestore/Authcontext";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("student"); 
  const [rememberMe, setRememberMe] = useState(false);
  
  const { login } = useContext(AuthContext);

  const handleLogin = (e) => {
    e.preventDefault();

    let userFound = false;
    for (let i = 0; i < localStorage.length; i++) {
      const key = localStorage.key(i);
      const storedUser = JSON.parse(localStorage.getItem(key));
      if (storedUser.email === email) {
        userFound = true;
        if (storedUser.password === password && storedUser.role === role) {
          login(storedUser, rememberMe); 
          alert("Login successful!");
        } else {
          alert("Invalid email, password, or role.");
        }
        break;
      }
    }

    if (!userFound) {
      alert("User not found.");
    }
  };
  return (
    <Container className="form-container mt-5 p-4">
      <h1 className="text-center">WELCOME BACK!</h1>
      <h2 className="text-center">Please Log In To Your Account</h2>

      <Form onSubmit={handleLogin}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Control
            type="email"
            placeholder="Enter Your email" 
            className="input-field"
            value={email} 
            onChange={(e) => setEmail(e.target.value)} 
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Control
            type="password"
            placeholder="Enter Your Password"
            className="input-field"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </Form.Group>

        <Form.Group className="mb-3 d-flex justify-content-around">
          <Form.Check
            type="radio"
            label="Student"
            name="role"
            value="student"
            onChange={(e) => setRole(e.target.value)}
            defaultChecked
          />
          <Form.Check
            type="radio"
            label="Teacher"
            name="role"
            value="teacher"
            onChange={(e) => setRole(e.target.value)}
          />
          <Form.Check
            type="checkbox"
            label="Remember Me"
            checked={rememberMe}
            onChange={(e) => setRememberMe(e.target.checked)}
          />
        </Form.Group>

        <div className="d-grid">
          <p>
            Don't have an account?{" "}
            <Link to="/signup" className="signup-link">
              Sign up
            </Link>
          </p>
          <div className="d-grid">
            <Button variant="primary" type="submit" className="login-button">
              Log In
            </Button>
          </div>
        </div>
      </Form>
    </Container>
  );
}
