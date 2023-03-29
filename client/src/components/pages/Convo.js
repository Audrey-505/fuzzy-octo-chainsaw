import React from 'react'
import { useState, useEffect } from 'react'

function Convo({socket, username, room}){
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
        setMessageHistory((history) => [...history, messageContent])
        setMessage('')
    }
}

    useEffect(() => {
        socket.on('obtained_message', (data) => {
            setMessageHistory((history) => [...history, data]) 
        })
    }, [socket])

    return (
        <div>

           <div>
            <input 
            placeholder='Type a message...'
            value={message}
            onChange={(event) => {
                setMessage(event.target.value)
            }}
            onKeyUp = {(event) => {event.key === 'Enter' && sendMessage()}}
            />
            <button onClick={sendMessage}>send</button>
            </div>

            <div>
                {messageHistory.map((messageBody) => {
                    return (
                    <div>
                        <h1>{messageBody.message}</h1>
                        <p>{messageBody.creator}</p>
                        <p>{messageBody.time}</p>
                    </div> )
                })}
            </div>

        </div>
    )
}

export default Convo