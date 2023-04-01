import React, { useState } from 'react'
import { Tab, Nav, Button, Modal } from 'react-bootstrap'
import { Link } from 'react-router-dom'

import './Sidebar.css'

export default function Sidebar() {
const [showModal, setShowModal] = useState(false)

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
                    <Nav.Link as={Link} to='/convo'>#Gaming</Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link>#Politics</Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link>#TrueCrime</Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link>#Movies</Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link>#News</Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link>#Music</Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link>#TvShows</Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link>#AITA</Nav.Link>
                  </Nav.Item>
                </Nav>
              </Nav.Item>
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