// see SignupForm.js for comments
import React, { useEffect, useState } from 'react';
import { Form, Button, Alert } from 'react-bootstrap';
import { useNavigate, Link, Navigate } from 'react-router-dom';


import { loginUser } from '../utils/API';
import Auth from '../utils/auth';

import App from '../App'

const LoginForm = () => {
  const navigate = useNavigate()
  const [showConvo, setShowConvo] = useState(false)

  const [userFormData, setUserFormData] = useState({ email: '', password: '' });
  const [validated] = useState(false);
  const [showAlert, setShowAlert] = useState(false);

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
      const response = await loginUser(userFormData);

      if (!response.ok) {
        throw new Error('something went wrong!');
      }

      const { token, user } = await response.json();
      console.log(user);
      Auth.login(token);
      // console.log(user);
      // navigate('../convo')
      // return navigate("/convo")
      // return <Navigate to="/convo" />
      setShowConvo(true)
    } catch (err) {
      console.error(err);
      setShowAlert(true);
    }

    setUserFormData({
      email: '',
      password: '',
    });

    // navigate('../convo', {replace: true})
    // return navigate("/convo")
    // return <Navigate to="/convo" />

  };

  // const joinRoom = () => {
  //   setShowConvo(true)
  // }

  // const time = () => {
  //   setTimeout(() => {
  //     navigate('../convo', {replace: true})
  //   },100)
  // }


  return (
  <div>
     {!showConvo ? (
    // <div>
    //   <h1>LOGIN FORM</h1>
    // </div>
    <div>
      <h1>LOGIN FORM</h1>
      <Form noValidate validated={validated} onSubmit={handleFormSubmit}>
      {/* <Form noValidate validated={validated}> */}
        <Alert dismissible onClose={() => setShowAlert(false)} show={showAlert} variant='danger'>
          Something went wrong with your login credentials!
        </Alert>
        <Form.Group>
          <Form.Label htmlFor='email'>Email</Form.Label>
          <Form.Control
            type='text'
            placeholder='Your email'
            name='email'
            onChange={handleInputChange}
            value={userFormData.email}
            required
          />
          <Form.Control.Feedback type='invalid'>Email is required!</Form.Control.Feedback>
        </Form.Group>

        <Form.Group>
          <Form.Label htmlFor='password'>Password</Form.Label>
          <Form.Control
            type='password'
            placeholder='Your password'
            name='password'
            onChange={handleInputChange}
            value={userFormData.password}
            required
          />
          <Form.Control.Feedback type='invalid'>Password is required!</Form.Control.Feedback>
        </Form.Group>
        <Button
          // onClick={() => navigate('../convo')}
          // onClick={() => time()}
          // onClick={() => handleFormSubmit()}
          disabled={!(userFormData.email && userFormData.password)}
          type='submit'
          variant='success'>
          Submit
        </Button>
      </Form>
      </div>
      ) : (
        <App />
        )}
  </div>
  );
};

export default LoginForm;