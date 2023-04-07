import React, {useState} from 'react'
import { Nav, Container} from "react-bootstrap";
import Navbar from 'react-bootstrap/Navbar';
import logo  from '../../images/chatLogo.png'

function NavBar({ currentPage, handlePageChange }) {
  const [showModal, setShowModal] = useState(false)
    return(
        <Navbar bg='dark' variant='dark' className="navbar navbar-expand-lg me-auto mb-2 bg-body-tertiary">
        <Container className="nav-item name" >
        <Navbar.Brand href='#home' onClick={() => handlePageChange('Home')} 
        className={currentPage === 'Home' ? 'nav-link active' : 'nav-link'}
        >
          <img src={logo} width='30' height='30' className='d-inline-block align-top'/>
          {' '}
          
          {/* <Nav.Link
            href="#home"
            onClick={() => handlePageChange('Home')}
            className={currentPage === 'Home' ? 'nav-link active' : 'nav-link'}
          >
            The Chat Room
          </Nav.Link> */}
        </Navbar.Brand>
        </Container>
        <Container>
        {/* <li className="nav-item list me-auto mb-2 mb-lg-0"> */}
          <Nav.Link
            href="#Login"
            onClick={() => handlePageChange('Login')}
            // onClick={()=> setShowModal(true)}
            className={currentPage === 'Login' ? 'nav-link active' : 'nav-link'}
            style={{color: 'white'}}
          >
            Login
          </Nav.Link>
        {/* </li> */}
        {/* <li className="nav-item list me-auto mb-2 mb-lg-0"> */}
          <Nav.Link
            href="#Signup"
            onClick={() => handlePageChange('Signup')}
            className={currentPage === 'Signup' ? 'nav-link active' : 'nav-link'}
            style={{color: 'white'}}
          >
            Signup
          </Nav.Link>
        {/* </li> */}
        {/* <li className="nav-item list me-auto mb-2 mb-lg-0"> */}
          <Nav.Link
            href="#Join"
            onClick={() => handlePageChange('Join')}
            className={currentPage === 'Join' ? 'nav-link active' : 'nav-link'}
            style={{color: 'white'}}
          >
            Join Room 
          </Nav.Link>
        {/* </li> */}
        {/* <li className="nav-item list me-auto mb-2 mb-lg-0"> */}
          <Nav.Link
            href="#contact"
            onClick={() => handlePageChange('contact')}
            className={currentPage === 'Contact' ? 'nav-link active' : 'nav-link'}
            style={{color: 'white'}}
          >
            Contact
          </Nav.Link>
        {/* </li> */}
        </Container>
      </Navbar>
    )
}

export default NavBar