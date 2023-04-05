import "./App.css";
import io from "socket.io-client";
import { useState } from "react";

import Convo from "./components/pages/Convo";
import SignupForm from "./components/Signup";
import LoginForm from "./components/Login";

// import Button from 'react-bootstrap/Button';
import { Tab, Nav, Button, Modal, Form } from 'react-bootstrap'


//trying to commit client

const socket = io.connect("/");

function App() {
  const [showConvo, setShowConvo] = useState(false)
  //Room State
  const [room, setRoom] = useState('');

  // Messages States
  // const [message, setMessage] = useState("");
  // const [messageReceived, setMessageReceived] = useState("");

  const [username, setUsername] = useState('');
  //const [messageReceived, setMessageReceived] = useState("");

  const joinRoom = () => {
    if (room !== '' && username !== '') {
      socket.emit("join_room", room);
      setShowConvo(true)
    }
  };

  // const sendMessage = () => {
  //   socket.emit("send_message", { message, room });
  // };

  // useEffect(() => {
  //   socket.on("receive_message", (data) => {
  //     setMessageReceived(data.message);
  //   });
  // }, [socket]);

  return (
    <div className="App">
      {!showConvo ? (
        <div className="justify-content-center">
          {/* <Form.Group className='mb-3'>
          <Form.Label row sm='2'>Username</Form.Label>
          <Form.Control row sm='2' type='email' placeholder='Username'
          onChange={(event) => {
            setUsername(event.target.value);
          }}>
          </Form.Control>
          <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text>
        </Form.Group> */}
       <input
        placeholder="Username..."
        onChange={(event) => {
          setUsername(event.target.value);
        }}
      />
      <input
        placeholder="Room Number..."
        onChange={(event) => {
          setRoom(event.target.value);
        }}
      />
      <Button variant='secondary' onClick={joinRoom}>Join Room</Button>
      {/* <button variant='light' onClick={joinRoom}> Join Room</button> */}
      {/* <button onClick={sendMessage}> Send Message</button>
      <h1> Message:</h1>
      {messageReceived} */}
      </div>
      ) : (
    <Convo socket={socket} username={username} room={room} setRoom={setRoom}/>
    //<SignupForm />
    //<LoginForm />
      )}
    </div>
  );
}

export default App;