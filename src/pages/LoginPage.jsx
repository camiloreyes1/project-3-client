import { useState, useContext } from "react";
import { AuthContext } from "../context/auth.context";
import { Link, useNavigate } from "react-router-dom";
import { postRoute } from "../services/authService";

import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';


function LoginPage() {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState(undefined);

  const { storeToken, authenticateUser } = useContext(AuthContext)


  const navigate = useNavigate();

  const handleEmail = (e) => setEmail(e.target.value);
  const handlePassword = (e) => setPassword(e.target.value);


  const handleLoginSubmit = (e) => {
    e.preventDefault();
    const requestBody = { email, password };

    postRoute('/auth/login', requestBody)
      .then((response) => {

        console.log('JWT token', response.data.authToken);
        storeToken(response.data.authToken)
        authenticateUser()
        navigate('/');                             // <== ADD      
      })
      .catch((error) => {
        const errorDescription = error.response.data.message;
        setErrorMessage(errorDescription);
      })
  };

  return (
    <div class="m-3" className="LoginPage">
      <h1>Login</h1>
      <br></br>
      <Row className="mb-3">
        <form onSubmit={handleLoginSubmit}>
          <Form.Group as={Col} md="3" controlId="validationCustom01">

            <Form.Label>Email</Form.Label>
            <Form.Control
              onSubmit={handleLoginSubmit}
              type="email"
              name="email"
              value={email}
              onChange={handleEmail}
            >
            </Form.Control>
            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
          </Form.Group>

          <Form.Group as={Col} md="3" controlId="validationCustom02">
            <Form.Label>Password</Form.Label>
            <Form.Control
              onSubmit={handleLoginSubmit}
              type="password"
              name="password"
              value={password}
              onChange={handlePassword}
            />
          </Form.Group>
          <br></br>
          <Button type="submit">Login</Button>
        </form>
      </Row>

      {errorMessage && <p className="error-message">{errorMessage}</p>}

      <p>Don't have an account yet?</p>

      <Link to="/signup"> Sign Up</Link>
    </div>
  )
}

export default LoginPage;