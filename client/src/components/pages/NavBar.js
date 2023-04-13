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
            style={{ color: "black" }}
          >
            Join Room
          </Nav.Link>
          <Nav.Link
            href="/"
            onClick={() => Auth.logout()}
            // onClick={()=> setShowModal(true)}
            className={currentPage === "Home" ? "nav-link active" : "nav-link"}
            style={{ color: "black" }}
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
            style={{ color: "black" }}
          >
            Login
          </Nav.Link>
          <Nav.Link
            href="#Signup"
            onClick={() => handlePageChange("Signup")}
            className={
              currentPage === "Signup" ? "nav-link active" : "nav-link"
            }
            style={{ color: "black" }}
          >
            Signup
          </Nav.Link>
          <Nav.Link
            href="#contact"
            onClick={() => handlePageChange("contact")}
            className={
              currentPage === "Contact" ? "nav-link active" : "nav-link"
            }
            style={{ color: "black" }}
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
    {/* <Nav> */}
    {/* <Container> */}
    <Navbar
      collapseOnSelect
      bg="dark"
      variant="dark"
      className="navbar navbar-expand-lg me-auto mb-2 bg-body-tertiary"
    >
      <Container fluid>
      {/* <Container className="nav-item name"> */}
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
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav className="me-auto my-2 my-lg-0" 
          style={{maxHeight: '100px'}}
          navbarScroll
          >
          {/* {showNav()} */}
          <NavDropdown title='Menu' id="navbarScrollDropdown">
            <NavDropdown.Item>
              {showNav()}
            </NavDropdown.Item>
          </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      {/* </Container> */}
      {/* <Container> */}
      {/* <Nav>
      {showNav()}
      </Nav> */}
      </Container>
    </Navbar>
    {/* </Nav> */}
    {/* </Container> */}
    </div>
  );
}

export default NavBar;
