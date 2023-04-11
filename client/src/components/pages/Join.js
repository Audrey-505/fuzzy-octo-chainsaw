import React, { useState, useEffect } from "react";
import io from "socket.io-client";
import Convo from "../pages/Convo";
import { Button, Modal, Form, Nav } from 'react-bootstrap'
import NavBar from "./NavBar";

// const socket = io.connect("/");

export default function Join() {
  const [showConvo, setShowConvo] = useState(false);
  //Room State
  const [room, setRoom] = useState("");

  // Messages States
  const [message, setMessage] = useState("");
  const [messageReceived, setMessageReceived] = useState("");

  const [username, setUsername] = useState("");
  //const [messageReceived, setMessageReceived] = useState("");

  const joinRoom = () => {
    if (room !== "" && username !== "") {
      socket.emit("join_room", room);
      setShowConvo(true);
    }
  };

  const sendMessage = () => {
    socket.emit("send_message", { message, room });
  };

  useEffect(() => {
    socket.on("receive_message", (data) => {
      setMessageReceived(data.message);
    });
  }, [socket]);

  return (
    <div className="join">
      {/* <Modal show> */}
      <Modal.Body>
      <Modal.Header>
       <Modal.Title style={{fontFamily:'serif', fontSize:'30px', textAlign:'center'}}>
        Chat Room
       </Modal.Title>
      </Modal.Header>
      {!showConvo ? (
      <div>
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
        <div>
        <NavBar>
          <Nav.Link>Logout</Nav.Link>
        </NavBar>
        <Convo socket={socket} username={username} room={room} />
        </div>
      )}
    </Modal.Body>
    {/* </Modal> */}
    </div>
  );
}
