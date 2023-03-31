import React, { useState } from 'react'
import { Tab, Nav, Button, Modal } from 'react-bootstrap'

// import './Sidebar.css'

export default function Sidebar() {


    return (
        <div style={{ width: '250px' }} className="d-flex flex-column">
          <Tab.Container>
            <Nav variant="tabs" className="col-md-12 d-md-block bg-light sidebar">
              <Nav.Item>
                <Nav.Link>Rooms</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link>Rules</Nav.Link>
              </Nav.Item>
            </Nav>
          </Tab.Container>
          
          </div>
 )

}