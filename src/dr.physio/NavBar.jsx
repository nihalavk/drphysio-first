import React from 'react'
import './Home.css'
import './responcive.css'
import logo from './assets/drphysio_logo1.jpeg'
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Container from 'react-bootstrap/Container';
function NavBar() {
  return (
    <div>
        <Navbar expand="lg" className="bg-body-tertiary">
         <Container>
            <Navbar.Brand href="#home"><img src={logo}className="d-inline-block align-top"/></Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav"/>
            <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="m-auto" >
              <Nav.Link href="#home" className='nav-links'>Home</Nav.Link>
              <Nav.Link href="#about-section"  className='nav-links'>About Us</Nav.Link>
              <NavDropdown title="Our Services" id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.1" className="nav-drop">Instrument Assisted soft tissue mobilization(IASTM)</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2" className="nav-drop">Dry Needling</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3" className="nav-drop">Myofacil Release(MFR)</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.4" className="nav-drop">Ortho Physiotherapy</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.5" className="nav-drop">Neuro Physiotherapy</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.6" className="nav-drop">Pediatric Physiotherapy</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.7" className="nav-drop">Geriatric Physiotherapy </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.8" className="nav-drop">Gynacological Physiotherapy</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.9" className="nav-drop">Post Surgical Physiotherapy</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.10" className="nav-drop">Sports Physiotherapy</NavDropdown.Item>
                
              </NavDropdown>
              <Nav.Link href="#contact" className='nav-links'>Contact Us</Nav.Link>
            </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
    </div>
  )
}

export default NavBar