import React from 'react'
import { useState, useEffect } from 'react'
import io from "socket.io-client";
import { Tab, Nav, Button, Modal } from 'react-bootstrap'

import Sidebar from './Sidebar'

import ScrollToBottom from 'react-scroll-to-bottom'




const meta = { display: 'flex', fontSize: '12px' }
const convoHeading = { height: '45px', position: 'relative', cursor: 'pointer', borderRadius: '6px', background: '#7149C6' }

function Convo({ socket, username, room, chat, setRoom }) {
  const [message, setMessage] = useState('')
  const [messageHistory, setMessageHistory] = useState([])
  //const [messageObtained, setMessageObtained] = useState('')
  const sendMessage = async () => {
    if (message !== '') {
      const messageContent = {
        room: room,
        creator: username,
        message: message,
        time: new Date(Date.now()).getHours()
      }
      await socket.emit('send_message', messageContent)
      setMessageHistory((messageHistory) => [...messageHistory, messageContent])
      console.log('this is from send msg', messageHistory)
      setMessage('')
      // setMessageHistory([])
      // await axios.post(`api/message`)
    }
  }

  useEffect(() => {
    const handler = (data) => {
      setMessageHistory((messageHistory) => [...messageHistory, data]);
    };
    socket.on('obtained_message', handler);
    // Otherwise you'll start getting errors when the component is unloaded
    return () => socket.off('obtained_message', handler);
  }, [socket]);


  return (
    <div className='d-flex'>

      <Sidebar room={room} setRoom={setRoom}/>

      <div className='convoHolder'>
        <div style={convoHeading}>
          <h3>{room} Chat Room</h3>
        </div>
        <ScrollToBottom className='.message-container'>
        <div className='convo-section'>
          {/* <ScrollToBottom className='.message-container'> */}
            {messageHistory.map((messageBody) => {
              return (
                <div
                  className='msg'
                  id={username === messageBody.creator ? "me" : "friend"}>
                  <div>
                    <div className='messageBody'>
                      <p>{messageBody.message}</p>
                    </div>
                    <div className='meta' style={meta}>
                      <p>{messageBody.time} {messageBody.creator}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          {/* </ScrollToBottom> */}
        </div>
        </ScrollToBottom>
        <div className='convo-footer'>
          <input
            type='text'
            value={message}
            placeholder='Type a message'
            onChange={(event) => {
              setMessage(event.target.value);
            }}
            onKeyUp={(event) => {
              event.key === 'Enter' && sendMessage();
            }}
          />
          <button onClick={sendMessage}>send</button>
        </div>
      </div>
    </div>

  )
}

export default Convo