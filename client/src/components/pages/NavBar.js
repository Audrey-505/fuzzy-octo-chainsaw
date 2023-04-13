import React, { useState, Fragment, useContext } from "react";
import { Nav, Container } from "react-bootstrap";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from 'react-bootstrap/NavDropdown'
import logo from "../../images/chatLogo.png";
import { Link, useNavigate } from "react-router-dom";
// import Auth from "../../utils/auth";
// import props from 'prop-types'
import Auth from "../../utils/auth";
import App from '../../App'

function NavBar({ currentPage, handlePageChange }) {
  // const auth = useContext(Auth)
  // const {isUserLoggedIn, userAuth} = props
  const [showLogout, setShowLogout] = useState(false);

  const navigate = useNavigate();

  const [showModal, setShowModal] = useState(false);
  function showNav() {
    if (Auth.loggedIn()) {
      return (
        <div>
          <Nav.Link
            href="/"
            onClick={() => handlePageChange('Convo')}
            className={currentPage === "Convo" ? "nav-link active" : "nav-link"}
            style={{ color: "white" }}
          >
            Join Room
          </Nav.Link>
          <Nav.Link
            href="/"
            onClick={() => Auth.logout()}
            // onClick={()=> setShowModal(true)}
            className={currentPage === "Home" ? "nav-link active" : "nav-link"}
            style={{ color: "white" }}
          >
            Logout
          </Nav.Link>
          {/* </Container> */}
          {/* </Navbar> */}
          {/* </ul> */}
        </div>
      );
    } else {
      return (
        <div>
          {/* <ul> */}
          <Nav.Link
            href="#Login"
            onClick={() => handlePageChange("Login")}
            // onClick={()=> setShowModal(true)}
            className={currentPage === "Login" ? "nav-link active" : "nav-link"}
            style={{ color: "white" }}
          >
            Login
          </Nav.Link>
          <Nav.Link
            href="#Signup"
            onClick={() => handlePageChange("Signup")}
            className={
              currentPage === "Signup" ? "nav-link active" : "nav-link"
            }
            style={{ color: "white" }}
          >
            Signup
          </Nav.Link>
          <Nav.Link
            href="#contact"
            onClick={() => handlePageChange("contact")}
            className={
              currentPage === "Contact" ? "nav-link active" : "nav-link"
            }
            style={{ color: "white" }}
          >
            Contact
          </Nav.Link>
          {/* </ul> */}
        </div>
      );
    }
  }

  return (
    <div>
    <Navbar
      bg="dark"
      variant="dark"
      expand='lg'

    >
      <Container>
        <Navbar.Brand
          href="#home"
          onClick={() => handlePageChange("Home")}
          className={currentPage === "Home" ? "nav-link active" : "nav-link"}
        >
          <img
            src={logo}
            width="60"
            height="60"
            className="d-inline-block align-top"
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
          {/* {showNav()} */}
          {showNav()}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </div>
  );
}

export default NavBar;
