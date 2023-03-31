import React from 'react'

function NavBar({ currentPage, handlePageChange }) {
    return(
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <li className="nav-item name">
          <a
            href="#home"
            onClick={() => handlePageChange('Home')}
            className={currentPage === 'Home' ? 'nav-link active' : 'nav-link'}
          >
            Site Name
          </a>
        </li>
        <li className="nav-item list me-auto mb-2 mb-lg-0">
          <a
            href="#Login"
            onClick={() => handlePageChange('Login')}
            className={currentPage === 'Login' ? 'nav-link active' : 'nav-link'}
          >
            Login
          </a>
        </li>
        <li className="nav-item list me-auto mb-2 mb-lg-0">
          <a
            href="#Signup"
            onClick={() => handlePageChange('Signup')}
            className={currentPage === 'Signup' ? 'nav-link active' : 'nav-link'}
          >
            Signup
          </a>
        </li>
        <li className="nav-item list me-auto mb-2 mb-lg-0">
          <a
            href="#Join"
            onClick={() => handlePageChange('Join')}
            className={currentPage === 'Join' ? 'nav-link active' : 'nav-link'}
          >
            Join Room 
          </a>
        </li>
        <li className="nav-item list me-auto mb-2 mb-lg-0">
          <a
            href="#contact"
            onClick={() => handlePageChange('contact')}
            className={currentPage === 'Contact' ? 'nav-link active' : 'nav-link'}
          >
            Contact
          </a>
        </li>
      </nav>
    )
}

export default NavBar