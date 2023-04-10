// see SignupForm.js for comments
// import { Modal } from "bootstrap";
import React, { useState, useEffect } from "react";
import { Form, Button, Alert, Container, Modal } from "react-bootstrap";
import { Link, useNavigate} from 'react-router-dom'
import Convo from './Convo'
// import Signup from './Signup'
// import BarNav from "./NavBar";

import { loginUser } from "../../utils/api";
import Auth from "../../utils/auth";



function LoginForm() {
  const [userFormData, setUserFormData] = useState({ email: "", password: "" });
  const [validated] = useState(false);
  const [showAlert, setShowAlert] = useState(false);
  const [showModal, setShowModal] = useState(false)
  const [show, setShow] = useState(false)
  const handleShow = () => setShow(true)
  const handleClose =() => setShow(false)
  // const google = window.google;

  // const [history] = useNavigate()
  // let navigate = useNavigate()

  let navigate = useNavigate()
  
  // function handleNext(){
  //   navigate('/convo')
  // }


  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setUserFormData({ ...userFormData, [name]: value });
  };

  function handleCallBackResponse(response) {
    console.log('Encoded JWT ID Token: ' + response.credential)
  }

  // useEffect(() => {
  //   /*global google*/
  //   // The google object is coming from the script in html
  //   google.accounts.id.initialize({
  //     client_id: '635497664115-ojrf4vd60dvn3jrh7h9v2odc2lr3s0ak.apps.googleusercontent.com',
  //     // when the user login -- the function we will call
  //     callback: handleCallBackResponse
  //   })

  //   google.accounts.id.renderButton(
  //     document.getElementsByClassName('loginDiv'),
  //     { theme: 'outline', size: 'large'}
  //   )

  // }, [])

  const handleFormSubmit = async (event) => {
    event.preventDefault();

    // check if form has everything (as per react-bootstrap docs)
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    try {
      const response = await loginUser(userFormData);

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

    navigate('/Join')
  };

  return (
    <div className="login" style={{justifyContent:'center', textAlign:'center'}}>
      {/* <BarNav /> */}
      <br />
      <br />
      <br />
      <br />
      <h2>
        To Begin Chatting, 
        Login Below
      </h2>
      <Button onClick={handleShow} variant='primary' size="lg">
      Login
      </Button>
      <Modal show={show}
      onHide={()=> setShowModal(false)}>
      <Modal.Header style={{textAlign:'center'}}>
        <Modal.Title style={{fontFamily:'serif', fontSize:'30px'}}>Login</Modal.Title>
      </Modal.Header>
      {/* <Modal.Dialog> */}
      <Modal.Body>
      <Form noValidate validated={validated} onSubmit={handleFormSubmit}>
        <Alert
          dismissible
          onClose={() => setShowAlert(false)}
          show={showAlert}
          variant="danger"
        >
          Something went wrong with your login credentials!
        </Alert>
        <Form.Group>
          <Form.Label htmlFor="email">Email</Form.Label>
          <Form.Control
            type="text"
            placeholder="Your email"
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
          onClick={handleFormSubmit}
        >
          Login
        </Button>
        <Button onClick={handleClose} variant='danger'>
          Close
        </Button>
        <div className="loginDiv">

        </div>

        <Container>
        {/* <h3>Create Account? Click <a href="#signup">here</a></h3> */}
        <Link to={'./Signup'}
        // onClick={() => showLogin(true)}
        >Create Account?</Link>
        </Container>
        {/* </Modal.Footer> */}
        </Form>
      </Modal.Body>
      </Modal>
    </div>
  );
};

export default LoginForm;
