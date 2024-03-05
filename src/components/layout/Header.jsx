import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import "bootstrap/dist/css/bootstrap.css";
import Logo from "../../assets/imdb_logo.png";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";

function Header() {
  const location = useLocation();
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const checkTokenAndSetState = () => {
    const accessToken = sessionStorage.getItem("access_token");
    if (accessToken) {
      setIsLoggedIn(true);
    } else {
      setIsLoggedIn(false);
    }
  };

  useEffect(() => {
    checkTokenAndSetState();
  }, [location.pathname]);

  const handleLogOut = () => {
    sessionStorage.removeItem("access_token");
    setIsLoggedIn(false);
  };
  return (
    <Navbar
      expand="lg"
      className="bg-body-tertiary my-navbar"
      data-bs-theme="dark">
      <Container fluid>
        <Link to="/">
          <img
            src={Logo}
            width="90"
            height="50"
            className="d-inline-block align-top"
            alt="React Bootstrap logo"
          />
        </Link>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: "100px" }}
            navbarScroll></Nav>
          <Form className="d-flex gap-2">
            {isLoggedIn ? (
              <>
                <Link to="/movies">
                  <Button variant="warning">Movies</Button>
                </Link>
                <Link to="/add-movie">
                  <Button variant="warning">Add Movie</Button>
                </Link>
                <Link to="/login">
                  <Button variant="warning" onClick={handleLogOut}>
                    Log Out
                  </Button>
                </Link>
              </>
            ) : (
              <>
                <Link to="/register">
                  <Button variant="warning">Sign In</Button>
                </Link>
                <Link to="/login">
                  <Button variant="warning">Log In</Button>
                </Link>
              </>
            )}
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;
