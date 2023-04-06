import React, { useEffect, useState } from 'react'
import Auth from '../utils/auth'

import Convo from '../components/pages/Convo'
import { useLocation } from "react-router-dom";

export default function DefinedConvo({}) {

    
    let location = useLocation();
    const { state } = location
    // console.log(state)
    // const userPicked = Object.keys(state)
    // console.log(userPicked)
    const userPicked = state.user
    console.log(userPicked)
    const [convo, setConvo] = useState([])
    useEffect(() => {
    const getChat = async () => {
        if(!state){
            return
        }try{
            // console.log(state)
            const res = await fetch('api/chat/' + userPicked)
            // console.log(res)
            const chat = await res.json()
            console.log(chat)
            const chatId = chat[0]._id
            console.log(chatId)
            const resTwo  = await fetch('api/message/' + chatId)
            const msg = await resTwo.json()
            console.log(msg)
            const chats = msg.map(a => a.text)
            console.log(chats)
            const each = chats.forEach(element => {
                console.log(element)
            })
            console.log(each)
            // const indiv = chats.map(b => b)
            // console.log(indiv)
            // const test = msg[0].text
            // console.log(test)
            // setConvo(test)
            // setConvo(msg)
            setConvo(chats)
            // console.log(msg[0].text)
        }catch(error){
            console.log(error)
        }
    }
    getChat()
},[])

    // const [user, setUser] = useState()
    // useEffect(() => {
    //   setUser(Auth.getProfile())
    // }, [])
    // // console.log(user)
    // const [chat, setChat] = useState([])
    // useEffect(() => {
    //     const getChats = async () => {
    //         if(!user){
    //             return
    //         } try {
    //             const convo = await fetch('api/chat/' + user.data._id)
    //             const convoInfo = await convo.json()
    //             console.log(convoInfo)
    //         }catch(error){

    //         }
    //     }
    //     getChats()
    // },[])


    return (
        <div>
        {/* why does this following below not work? */}
        {convo.forEach(e => {
            <h1>{e}</h1>
        })}
        <h1>{convo}</h1>
        </div>
    )
}