import React, { useEffect, useState } from 'react'
import { Tab, Nav, Button, Modal, TabContainer } from 'react-bootstrap'
import { Link } from 'react-router-dom'

import Auth from '../utils/auth';

import './Sidebar.css'
import Convo from './pages/Convo'
import ConvoHistory from './ConvoHistory';

export default function Sidebar({ room, setRoom}) {
  const [showModal, setShowModal] = useState(false)

  //new setting up convos
  // const user = Auth.getProfile()
  // console.log(user)

  //const [convo, setConvo] = useState()
  const [user, setUser] = useState()

  useEffect(() => {
    setUser(Auth.getProfile())
  }, [])

  const [chat, setChat] = useState([])
  useEffect(() => {
    const getChats = async () => {
      if (!user) {
        return
      }
      try {
        //const res = await fetch(`/chat/${user._id}`)
        const res = await fetch('api/chat/' + user.data._id)
        console.log(user)
        const data = await res.json()
        console.log(data)
        // console.log(data[0])
        // console.log(data[0].members)
        // console.log(data[1].members)
        //Do I have to map over each data to get each array of members?
        //let members = data.map(({m}) => console.log(m))
        var each = data.map(a => a.members)
        console.log(each)
        var results = each.map(b => b)
        console.log(results)
        setChat(results)
        //setChat(res.data)
        //correct one below
        //setChat(data[0].members)
      } catch (error) {
        console.log(error)
      }
    }
    getChats()
  }, [user])


  return (
    <div style={{ width: '250px' }} className="d-flex flex-column">
      <Tab.Container>
        <Nav variant='tabs' className="col-md-12 d-md-block bg-light sidebar">
          <Nav.Item>
            <Nav.Link onClick={() => setShowModal(true)}>Rules</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link>Rooms</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav variant='tabs'>
              <Nav.Item>
                <Nav.Link room={'Gaming'} as={Link} to='/convo' onClick={() => setRoom('Gaming')}>#Gaming</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link as={Link} to='/convo' onClick={() => setRoom('Politics')}>#Politics</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link as={Link} to='/convo' onClick={() => setRoom('TrueCrime')}>#TrueCrime</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link as={Link} to='/convo' onClick={() => setRoom('Movies')}>#Movies</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link as={Link} to='/convo' onClick={() => setRoom('News')}>#News</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link as={Link} to='/convo' onClick={() => setRoom('Music')}>#Music</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link as={Link} to='/convo' onClick={() => setRoom('TvShows')}>#TvShows</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link as={Link} to='/convo' onClick={() => setRoom('AITA')}>#AITA</Nav.Link>
              </Nav.Item>
            </Nav>
          </Nav.Item>

          {/* <Nav>
            {chat.map((c) => (
              <Nav.Item>
                <Nav.Link>{c}</Nav.Link>
              </Nav.Item>
            ))}
          </Nav> */}
            {chat.map((e) => (
              <ConvoHistory chat={e} currentUser={user}/>
            ))}

          
            {/* <ConvoHistory chat={chat} currentUser={user} /> */}
          
         

        </Nav>
      </Tab.Container>

      <Modal
        size='lg'
        show={showModal}
        onHide={() => setShowModal(false)}>
        <Tab.Container>
          <Modal.Header closeButton>
            <Modal.Title>
              Rules of App
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Tab.Content>
              <h4>Age 13+</h4>
              <p>All users must be 13 years of age or older</p>
              <h4>Ethics</h4>
              <p>in an effort to conduct our platform in an ethical way any information or representation deemed harmful, misleading, or behaviour that could place parents or admins in a legal predicament will be removed.</p>
              <h4>Privacy</h4>
              <p>Being part of this platform requires mutual trust. Authentic, expressive discussions make groups great, but may also be sensitive and private. What's shared in the group should stay in the group.</p>
              <h4>No hate speech</h4>
              <p>Make sure that everyone feels safe. Bullying of any kind isn't allowed, and degrading comments about things such as race, religion, culture, sexual orientation, gender or identity will not be tolerated.</p>
              <h4>Warning</h4>
              <p>Choosing to break any of these rules will result in either a warning or a ban from the server at the discretion of the server owner or moderation crew.</p>
            </Tab.Content>
          </Modal.Body>
        </Tab.Container>
      </Modal>

    </div>
  )

}