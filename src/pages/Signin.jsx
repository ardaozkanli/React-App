import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { useState } from "react";
import { registerUser } from "../services/Service";
import { useNavigate } from "react-router-dom";

function Signin() {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [checkPassword, setCheckPassword] = useState("");
  const navigate = useNavigate();
  const handleUserName = (e) => {
    setUserName(e.target.value);
  };

  const handlePassword = (e) => {
    setPassword(e.target.value);
  };
  const handleCheckPassword = (e) => {
    setCheckPassword(e.target.value);
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (password === checkPassword) {
      try {
        const accessToken = await registerUser({
          username: userName,
          password: password,
        });

        if (accessToken) {
          navigate("/movies");
        } else {
          alert("Login failed");
        }
      } catch (error) {
        console.error("Error during login", error);

        alert("Please try again later");
      }
    } else {
      alert("Passwords are not match");
    }
    setUserName("");
    setPassword("");
    setCheckPassword("");
  };

  return (
    <Container>
      <Row className="justify-content-center">
        <Col xl={3} md={6} sm={8}>
          <Form
            onSubmit={handleSubmit}
            className="mx-auto mt-5  border-black p-3 rounded  custom-form">
            <Form.Group className="mb-3" controlId="formBasicUserName">
              <Form.Label className="fs-4 text-white">Sign In</Form.Label>
              <Form.Control
                value={userName}
                onChange={handleUserName}
                type="username"
                placeholder="Enter Your Username"
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Control
                value={password}
                onChange={handlePassword}
                type="password"
                placeholder="Password"
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicCheckPassword">
              <Form.Control
                value={checkPassword}
                onChange={handleCheckPassword}
                type="password"
                placeholder="Check Password"
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicCheckbox">
              <Form.Check
                type="checkbox"
                className="text-white"
                label="Check me out"
              />
            </Form.Group>

            <Button variant="warning" type="submit">
              Sign In
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
}

export default Signin;
