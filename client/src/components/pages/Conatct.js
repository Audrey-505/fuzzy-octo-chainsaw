import React, { useEffect, useState } from 'react';
import validator from 'validator';

export default function Contact(props) {
  const [ name, setName ] =useState('')
  const [email, setEmail ] =useState('')
  const [ text, setText ] = useState('')
  const [ error, setError] =useState(null)
  const [cursor, setCursor ] = useState(null)
  const [message, setMessage ]= useState('')
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
    if(validator.isEmail(email)) {
      setMessage('Good Email!')
    } else {
      setMessage('Email is not valid, enter a valid email!')
    }
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

    alert(`Message sent from ${name} to Landon`)
    setName('')
  }
  return (
    <form>
      <h1>Contact</h1>
      <div class="mb-3">
        <label for="exampleFormControlInput1" class="form-label">Name</label>
        <input value={name} type="text" class="form-control" id="exampleFormControlInput1" placeholder="Name" onChange={handleName}/>
      </div>
      <div class="mb-3">
        <label for="exampleFormControlInput1" class="form-label">Email address</label>
        <input value={email} type="text" class="form-control" id="exampleFormControlInput1" placeholder="name@example.com" onChange={handleEmail}/>
      </div>
      <div class="mb-3">
        <label for="exampleFormControlTextarea1" class="form-label">Message</label>
        <textarea onChange={handleInput} value={text} class="form-control" id="exampleFormControlTextarea1" rows="4"></textarea>
      </div>
      <button type='button' onClick={handleFormSubmit}>
        Send Message
      </button>
    </form>
  );
}