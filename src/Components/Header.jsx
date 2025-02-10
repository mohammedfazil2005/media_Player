import React from 'react'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <div>
       <Navbar className="bg-body-tertiary sticky-top">
        <Container>
          <Link to={'/'}>
          <Navbar.Brand style={{color:'orange'}}>
          <i class="fa-solid fa-music me-2"></i>
            MediaPlayer
          </Navbar.Brand>
          </Link>
        </Container>
      </Navbar>
    </div>
  )
}

export default Header
