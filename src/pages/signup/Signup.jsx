import React, { useState, useContext } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Container from "react-bootstrap/Container";
import { AuthContext } from "../../statestore/Authcontext";

export default function SignUp() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("student");

  const { login } = useContext(AuthContext);

  const handleSignup = (e) => {
    e.preventDefault();

    for (let i = 0; i < localStorage.length; i++) {
      const key = localStorage.key(i);
      const storedUser = JSON.parse(localStorage.getItem(key));
      if (storedUser && storedUser.email === email) {
        alert("user already exists. Please log in.");
        return;
      }
    }

    const userdata = { username, email, password, role };
    localStorage.setItem("username", JSON.stringify(userdata));

    login(userdata, false);
    alert("Account created successfully! You are now logged in.");
  };

  return (
    <Container className="form-container mt-5 p-4">
      <h1 className="text-center">Hello!</h1>
      <h2 className="text-center">Please Sign Up</h2>

      <Form onSubmit={handleSignup}>
        <Form.Group className="mb-3" controlId="formProfilePicture">
          <Form.Label>Upload Profile Picture (Optional)</Form.Label>
          <Form.Control type="file" accept="image/*" className="input-field" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formFirstName">
          <Form.Control
            type="text"
            placeholder="Enter Your Username"
            className="input-field"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
        </Form.Group>

        {/* <Form.Group className="mb-3" controlId="formLastName">
                    <Form.Control
                        type="text"
                        placeholder="Enter Your Last Name"
                        className="input-field"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}

                        required
                    />
                </Form.Group> */}

        <Form.Group className="mb-3" controlId="formEmail">
          <Form.Control
            type="email"
            placeholder="Enter Your Email Address"
            className="input-field"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formPassword">
          <Form.Control
            type="password"
            placeholder="Enter Your Password"
            className="input-field"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formConfirmPassword">
          <Form.Control
            type="password"
            placeholder="Confirm Your Password"
            className="input-field"
            required
          />
        </Form.Group>

        <Form.Group className="mb-3 d-flex justify-content-around">
          <Form.Check
            type="radio"
            label="Student"
            name="role"
            value="student"
            checked={role === "student"}
            onChange={(e) => setRole(e.target.value)}
          />
          <Form.Check
            type="radio"
            label="Teacher"
            name="role"
            value="teacher"
            checked={role === "teacher"}
            onChange={(e) => setRole(e.target.value)}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formPhoneNumber">
          <Form.Control
            type="tel"
            placeholder="Enter Your Phone Number (Optional)"
            className="input-field"
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formDateOfBirth">
          <Form.Label>Date of Birth (Optional)</Form.Label>
          <Form.Control type="date" className="input-field" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formCountry">
          <Form.Label>Select Your Country</Form.Label>
          <Form.Control as="select" className="input-field"></Form.Control>
        </Form.Group>

        <Button variant="primary" type="submit">
          Sign Up
        </Button>
      </Form>
    </Container>
  );
}
