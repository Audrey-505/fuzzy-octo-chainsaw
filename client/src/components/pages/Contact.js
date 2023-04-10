import React, { useEffect, useState } from 'react';
import { Form, Button, Modal } from "react-bootstrap";
import validator from 'validator';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faGitHubSquare} from '@fortawesome/free-solid-svg-icons'
import laptopIcon from '../../laptop.svg'


export default function Contact(props) {
  const [ name, setName ] =useState('')
  const [email, setEmail ] =useState('')
  const [ text, setText ] = useState('')
  const [ error, setError] =useState(null)
  const [cursor, setCursor ] = useState(null)
  const [message, setMessage ]= useState('')
  const [showModal, setShowModal] = useState(false)
  const [show, setShow] = useState(false)
  const handleShow = () => setShow(true)
  const handleClose =() => setShow(false)
  const { onChange } = props


  const validateEmail =(e) => {
    var email = e.target.value
    if(validator.isEmail(email)) {
      setMessage('Good Email!')
    } else {
      setMessage('Email is not valid, enter a valid email!')
    }
  }

  const handleName =(e) => {
    setName((e.target.value))
    // setCursor((e.target.selectionStart(cursor, cursor)))
    onChange && onChange(e)
  }
  const handleInput = (e) => {
    setText((e.target.value))
    // setCursor((e.target.selectionStart(cursor, cursor)))
    onChange && onChange(e)
  }

  const handleEmail = (e) => {
    setEmail((e.target.value))
    // setCursor((e.target.selectionStart(cursor, cursor)))
    var email = e.target.value
    // if(validator.isEmail(email)) {
    //   setMessage('Good Email!')
    // } else {
    //   setMessage('Email is not valid, enter a valid email!')
    // }
  }

  // required name and message effect if not filled out
  useEffect(function() {
    if(name.length === 0 || message.length === 0)
    // name.setSelectionRange(cursor, cursor)
    {
      setError('* Name and Message Required')
    }
  }, [message, name, cursor])

// email effect used to check email validation
  // useEffect(function(){
  //   let checkEmail = /^([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/
  //   let result = checkEmail.test(email)

  //   if(!result){
  //     setError('Email is not a valid email!')
  //   } else {
  //     setError(null)
  //   }
  // }, [email, error])

  const handleFormSubmit = (event) => {
    event.preventDefault()

    alert(`Message sent from ${name} to the Chat Room Developers`)
    setName('')
  }
  return (
    <div>
    <div className='contactSupport'>
    <h1 style={{fontSize: '40px', textAlign:'left'}}>Contact Chat Social</h1>
    <br /><br /><br /><br /><br /><br />
    {/* <h3 style={{fontSize:'30px',position:'relative', textAlign:'left'}} >Give us some details and we will</h3>
    <h3 style={{fontSize:'30px',position:'relative', textAlign:'left'}}>return the support. Connect by email</h3> */}
    {/* <h4>Contact us below</h4> */}
    <br />
    </div>
    <div className='contact' style={{justifyContent:'center', textAlign:'center'}}>
    {/* <FontAwesomeIcon icon={faGitHubSquare} style={{color: "#0b0c0f",}} size='10x' /> */}
    <img src={laptopIcon} className='laptop' style={{fill:'black'}} />
    <br /><br />
    <h3 style={{fontSize:'30px',position:'relative', textAlign:'center'}} >Give us some details and we will</h3>
    <h3 style={{fontSize:'30px',position:'relative', textAlign:'center'}}>return the support. Connect by email</h3>
    <br /><br />
    <Button onClick={handleShow} className='btn btn-dark'>
      Contact Form
    </Button>
    <Modal show={show} onHide={()=> setShowModal()}>
    <Modal.Header style={{textAlign:'center'}}>
      <Modal.Title style={{fontFamily:'serif', fontSize:'30px'}}>
        Contact
      </Modal.Title>
    </Modal.Header>
    <Modal.Body>
    <Form.Group className='mb-3'>
        <Form.Label for="exampleFormControlInput1" class="form-label">Name</Form.Label>
        <Form.Control type='text' placeholder='Jessica Rabbit' onChange={handleName} value={name} required/>
        <Form.Control.Feedback type='invalid'>
        Name is required!
        </Form.Control.Feedback>
    </Form.Group>
    <Form.Group className='mb-3'>
        <Form.Label for="exampleFormControlInput1" class="form-label">Email</Form.Label>
        <Form.Control type='text' placeholder='name@example.com' onChange={handleEmail} required/>
        <Form.Control.Feedback type='invalid'>
          Email is required!
        </Form.Control.Feedback>
    </Form.Group>
    <Form.Group className='mb-3'>
        <Form.Label for="exampleFormControlTextarea1" class="form-label">Message</Form.Label>
        <Form.Control as='textArea' type='text' onChange={handleInput} value={text} rows={4}/>
      <Button
      type='button' onClick={handleFormSubmit}>
        Send Message
      </Button>
      <Button onClick={handleClose} variant='danger'>
        Cancel
      </Button>
    </Form.Group>
    </Modal.Body>
    </Modal>
    </div>
    </div>
  );
}