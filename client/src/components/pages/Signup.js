import React, { useState } from "react";
import { Form, Button, Alert, Container, Modal } from "react-bootstrap";
// import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { Link, useNavigate } from 'react-router-dom'
// import BarNav from "./NavBar";

import Login from "./Login";

import { createUser } from "../../utils/api";
import Auth from "../../utils/auth";

const SignupForm = () => {
  // set initial form state
  const [userFormData, setUserFormData] = useState({ email: "", password: "" });
  // set state for form validation
  const [validated] = useState(false);
  // set state for alert
  const [showAlert, setShowAlert] = useState(false);
  const [showModal, setShowModal] = useState(false)
  const [show, setShow] = useState(false)
  const [showLogin, setShowLogin] =useState('Login')
  const handleShow = () => setShow(true)
  const handleClose =() => setShow(false)

  const navigate = useNavigate()

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setUserFormData({ ...userFormData, [name]: value });
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();

    // check if form has everything (as per react-bootstrap docs)
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    try {
      const response = await createUser(userFormData);

      if (!response.ok) {
        throw new Error("something went wrong!");
      }

      const { token, user } = await response.json();
      console.log(user);
      Auth.login(token);
    } catch (err) {
      console.error(err);
      setShowAlert(true);
    }

    setUserFormData({
      email: "",
      password: "",
    });

    // navigate('/Join')
  };

  return (
    <div className="signup" style={{justifyContent:'center', textAlign:'center'}}>
      {/* <BarNav /> */}
      <br />
      <br />
      <br />
      <br />
      <h1>Join Chat Social!</h1>
      <h3>To get updates on chat rooms weekly,</h3>
      <h3> signup to be notified when your favorite chat room is booming</h3>
      <Button onClick={handleShow} variant='primary' size="lg">
        Signup
      </Button>
      <Modal show={show} onHide={() => setShowModal(false)}>
      <Modal.Header style={{justifyContent:'center', textAlign: 'center'}}>
        <Modal.Title style={{fontFamily:'serif', fontSize:'30px'}}>
          Signup
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
      {/* This is needed for the validation functionality above */}
      <Form noValidate validated={validated} onSubmit={handleFormSubmit}>
        {/* show alert if server response is bad */}
        <Alert
          dismissible
          onClose={() => setShowAlert(false)}
          show={showAlert}
          variant="danger"
        >
          Something went wrong with your signup!
        </Alert>

        {/* <Form.Group>
          <Form.Label htmlFor='username'>Username</Form.Label>
          <Form.Control
            type='text'
            placeholder='Your username'
            name='username'
            onChange={handleInputChange}
            value={userFormData.username}
            required
          />
          <Form.Control.Feedback type='invalid'>Username is required!</Form.Control.Feedback>
        </Form.Group> */}

        <Form.Group>
          <Form.Label htmlFor="email">Email</Form.Label>
          <Form.Control
            type="email"
            placeholder="Your email address"
            name="email"
            onChange={handleInputChange}
            value={userFormData.email}
            required
          />
          <Form.Control.Feedback type="invalid">
            Email is required!
          </Form.Control.Feedback>
        </Form.Group>

        <Form.Group>
          <Form.Label htmlFor="password">Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Your password"
            name="password"
            onChange={handleInputChange}
            value={userFormData.password}
            required
          />
          <Form.Control.Feedback type="invalid">
            Password is required!
          </Form.Control.Feedback>
        </Form.Group>
        {/* </Form> */}
        {/* <Modal.Footer> */}
        <Button
          disabled={!(userFormData.email && userFormData.password)}
          type="submit"
          variant="success"
          onClick={() => {handleFormSubmit(); navigate('/Join')}}
        >
          Sign Up
        </Button>
        <Button variant="danger" onClick={handleClose}>
          Close
        </Button>
        </Form>

      <Container>
        {/* <h3>Already have an account? Click <a href="#login">here</a></h3> */}
        <Link to='/Login'
        // onClick={() => showLogin(true)}
        >Already have an account?</Link>
        {/* <Link to='/#Join'
        // onClick={() => showLogin(true)}
        >start convo?</Link> */}
      </Container>
      {/* </Modal.Footer> */}
      {/* </Form> */}

      {/* <Container>
      <Router>
        <>
        <Routes>
        <Route 
            path='/login' 
            element={<Login />} 
          />
        </Routes>
      </>
      </Router>
     </Container> */}
     </Modal.Body>
     </Modal>
    </div>
  );
};

export default SignupForm;
