import "./App.css";
import io from "socket.io-client";
import { useState } from "react";
import { Button, Modal, Form, Nav } from 'react-bootstrap'
import NavBar from "./components/pages/NavBar";


import Convo from "./components/pages/Convo";


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
  return (
      <div className="join">
      {!showConvo ? (
      <div>
      {/* <Modal show> */}
      {/* <Modal.Body> */}
      <Modal.Header>
       <Modal.Title style={{fontFamily:'serif', fontSize:'30px', textAlign:'center'}}>
        Chat Room
       </Modal.Title>
      </Modal.Header>
      {/* {!showConvo ? ( */}
      {/* <div> */}
        <Form.Group>
          <Form.Label>Username</Form.Label>
          <Form.Control
            placeholder="Nick Valentine"
            onChange={(event) => {
              setUsername(event.target.value);
            }}
          />
          </Form.Group>
          <Form.Group>
            <Form.Label>Chat Room</Form.Label>
            <Form.Control
            placeholder="Room Number/Topic"
            onChange={(event) => {
              setRoom(event.target.value);
            }}
          />
          <Button onClick={joinRoom}> Join Room</Button>
        </Form.Group>
        </div>
        ) : (
        <Convo socket={socket} username={username} room={room} setRoom={setRoom} />
        )}
     {/* </Modal.Body> */}
      {/* </Modal> */}
    </div>
  );
}

export default App;
