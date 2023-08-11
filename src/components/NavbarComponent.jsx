import { useContext } from "react";
import { AuthContext } from "../context/auth.context";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function NavbarComponent() {

  const { user, logOutUser } = useContext(AuthContext);

  const getToken = () => {
    return localStorage.getItem('authToken')
  }

  return (
    <Navbar collapseOnSelect expand="lg" bg="primary" data-bs-theme="dark">
      <Container fluid>
        <Navbar.Brand href="/" >Pixels </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">

            {getToken() && (
              <>
                <Nav.Link href="/all-posts">All Posts</Nav.Link>
                <Nav.Link href="/profile">Profile</Nav.Link>
                <Nav.Link href="/add-post">Add Post</Nav.Link>
                <Nav.Link onClick={logOutUser}>Logout</Nav.Link>
                <span>{user && user.name}</span>

              </>
            )}

            {!getToken() && (
              <>
                <Nav.Link href="/signup">Sign Up</Nav.Link>
                <Nav.Link href="/login">Login</Nav.Link>
              </>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavbarComponent;

