import React from 'react'
// import io from "socket.io-client";
import {BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Signup from '../src/components/pages/Signup'
import Login from '../src/components/pages/Login'
import Convo from '../src/components/pages/Convo'
import Main from '../src/components/pages/mainPage'
import Join from '../src/components/pages/Join'
import DefinedConvo from './components/pages/DefinedConvo'

// const socket = io.connect("/");

import App from './App'

function AppTwo() {
    // const [showConvo, setShowConvo] = useState(false)
    // //Room State
    // const [room, setRoom] = useState('');
  
    // // Messages States
    // // const [message, setMessage] = useState("");
    // // const [messageReceived, setMessageReceived] = useState("");
  
    // const [username, setUsername] = useState('');
    // //const [messageReceived, setMessageReceived] = useState("");
  
    // const joinRoom = () => {
    //   if (room !== '' && username !== '') {
    //     socket.emit("join_room", room);
    //     setShowConvo(true)
    //   }
    // };
    return (
        <Router>
            <>
            <Routes>
                {/* <Route
                exact
                path='/join'
                element={<Join />}
                /> */}
                <Route
                exact
                path='/signup'
                element={<Signup />}
                />
                <Route
                exact
                path='/login'
                element={<Login />}
                />
                <Route
                exact
                path='/convo'
                element={<App />}
                />
                <Route
                exact
                 path='/'
                 element={<Main />}
                 />
                <Route
                path='/convoTwo'
                element={<DefinedConvo />}
                />
            </Routes>
            </>
        </Router>
    )
}
export default AppTwo