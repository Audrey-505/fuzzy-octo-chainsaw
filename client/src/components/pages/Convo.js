import React from 'react'
import { useState, useEffect } from 'react'
//import { Tab, Nav, Button, Modal } from 'react-bootstrap'

import Sidebar from './Sidebar'
import './Convo.css'
import ScrollToBottom from 'react-scroll-to-bottom'


const meta = { display: 'flex', fontSize: '12px'}
const convoHeading = {height: '45px', position: 'relative', cursor: 'pointer', borderRadius: '6px', background: '#7149C6'}

function Convo({ socket, username, room }) {
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
        }
    }

    // useEffect(() => {
    //     //setMessageHistory([])
    //     socket.on('obtained_message', (data) => {
    //         console.log('this is from socket it',messageHistory)
    //         setMessageHistory((messageHistory) => [...messageHistory, data]) 
    //         // return () => {
    //         //     socket.off('obtained_message', data)
    //         //     setMessageHistory(data)
    //         // }
    //         //setMessageHistory(messageHistory)
    //     })
    // }, [socket])

    useEffect(() => {
        const handler = (data) => {
            setMessageHistory((messageHistory) => [...messageHistory, data]);
        };
        socket.on('obtained_message', handler);
        // Otherwise you'll start getting errors when the component is unloaded
        return () => socket.off('obtained_message', handler);
    }, [socket]);


    return (
        // <div className="d-flex">

        //     <Sidebar/>

        //     <div>
        //         <div style={convoHeading}>
        //             <h1>Live Chat</h1>
        //         </div>
        //         <div className='convo-section'>
        //         {messageHistory.map((messageBody) => {
        //             return (
        //                 <div id={username === messageBody.creator ? "me" : "friend"}>
        //                     <div>
        //                     <h3>{messageBody.message}</h3>
        //                     </div>
        //                     <div style={meta}>
        //                     <p>{messageBody.creator} {messageBody.time}</p>
        //                     </div>
        //                 </div>)
        //         })}
        //         </div>
            
        //         <div className='convo-footer'>
        //         <input
        //             placeholder='Type a message...'
        //             value={message}
        //             onChange={(event) => {
        //                 setMessage(event.target.value)
        //             }}
        //             onKeyUp={(event) => { event.key === 'Enter' && sendMessage() }}
        //         />
        //         <button onClick={() => sendMessage()}>send</button>
        //         </div>
        //     </div>

        // </div>

        <div className='d-flex'>

            <Sidebar room={room}/>

        <div className='convoHolder'>
      <div style={convoHeading}>
        <h3>{room} Chat Room</h3>
      </div>
      <div className='convo-section'>
        <ScrollToBottom className='.message-container'>
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
          </ScrollToBottom>
      </div>
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