import "./App.css";
import io from "socket.io-client";
import { useState } from "react";

import Convo from "./components/pages/Convo";
//trying to commit client

const socket = io.connect("http://localhost:3001");

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
        <div>
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
      <button onClick={joinRoom}> Join Room</button>
      {/* <button onClick={sendMessage}> Send Message</button>
      <h1> Message:</h1>
      {messageReceived} */}
      </div>
      ) : (
    <Convo socket={socket} username={username} room={room} />
      )}
    </div>
  );
}

export default App;