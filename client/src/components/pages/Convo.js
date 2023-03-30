import React from 'react'
import { useState, useEffect } from 'react'
import { Tab, Nav, Button, Modal } from 'react-bootstrap'

import Sidebar from '../Sidebar'

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
        <div className="d-flex">

            <Sidebar/>

            <div>
                {messageHistory.map((messageBody) => {
                    return (
                        <div>
                            <h1>{messageBody.message}</h1>
                            <p>{messageBody.creator}</p>
                            <p>{messageBody.time}</p>
                        </div>)
                })}
            

           
                <input
                    placeholder='Type a message...'
                    value={message}
                    onChange={(event) => {
                        setMessage(event.target.value)
                    }}
                    onKeyUp={(event) => { event.key === 'Enter' && sendMessage() }}
                />
                <button onClick={() => sendMessage()}>send</button>
            </div>

        </div>
    )
}

export default Convo