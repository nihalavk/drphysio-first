import React, { useState } from 'react'
import './Home.css'
import './responcive.css'
import logo from './assets/drphysio_logo1.jpeg'
import img1 from './assets/physio_img1.jpeg'
import img2 from './assets/physio_aboutimg.jpg'
import img3 from './assets/ortho_img.jpg'
import img4 from './assets/neuro-img.jpg'
import img5 from './assets/pediat-img.jpeg'
import img6 from './assets/gery-img.jpg'
import img7 from './assets/gynec-img.jpg'
import img8 from './assets/surgical-img.jpg'
import { IoReorderThreeOutline } from "react-icons/io5";
import { IoCall } from "react-icons/io5";
import { IoMailOpenOutline } from "react-icons/io5";
import { MdOutlineAccessTime } from "react-icons/md";
import { CiLocationOn } from "react-icons/ci";
import { FaWhatsapp } from "react-icons/fa";
import { FaSquareInstagram } from "react-icons/fa6";
import Carousel from 'react-bootstrap/Carousel';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';


function Home() {
  return (
    <div>
       <Navbar expand="lg" className="bg-body-tertiary">
         <Container>
            <Navbar.Brand href="#home"><img src={logo}width="400" height="100"className="d-inline-block align-top"/></Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav"/>
            <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="m-auto" >
              <Nav.Link href="#home" className='nav-links'>Home</Nav.Link>
              <Nav.Link href="#about" className='nav-links'>About Us</Nav.Link>
              <NavDropdown title="Our Services" id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.1" className="nav-drop">Ortho Physiotherapy</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2" className="nav-drop">Neuro Physiotherapy</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3" className="nav-drop">Pediatric Physiotherapy</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.4" className="nav-drop">Geriatric Physiotherapy </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.4" className="nav-drop"> Gynacological Physiotherapy</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.4" className="nav-drop">Post Surgical Physiotherapy</NavDropdown.Item>
              </NavDropdown>
              <Nav.Link href="#about" className='nav-links'>Contact Us</Nav.Link>
            </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      <div className="body">
         <div class="entry-image"> 
           <img className='physio_img1' src={img1} /> 
           <div className="head">
             <div className="head1">Say Goodbye to Pain...</div> 
             <div className="head2">WELCOME TO DR.PHYSIO</div>
           </div>
          <div className="about">
            <div className="about-image">
              <img className='abt-images' src={img2} />
            </div>
            <div className="sub-headings">ABOUT US</div>
            <div className="para">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quas consectetur culpa nesciunt fugit officia earum veniam aperiam illo atque esse officiis quam quos magni, temporibus dolorum vel? Tempore, deleniti ex?</div>
            <div className="about-head">Our Vision</div>
            <div className="para">Our vision is to emerge as a trust worthy medical rehabilitation institution, providing advanced physical therapy and rehabilitation services that enhance the quality of life for our patience.</div>
            <div className="about-head">Our Mission</div>
            <div className="para">Our mission is to deliver exceptional healthcare services by leveraging advanced technology and the expertise of our talented professionals, ensuring the highest quality of care for our patients.</div>
          </div>
          <div className="services">
            <div className="sub-headings">SERVICES WE PROVIDE</div>
            <div className="service">
            <Carousel>
              <Carousel.Item>
                <div className="service-images">
                  <img className='images' src={img3} />
                </div>
                <Carousel.Caption><h3 style={{color:"rgb(88, 88, 238)"}}>Ortho Physiotherapy</h3></Carousel.Caption> 
              </Carousel.Item>
              <Carousel.Item>
                <div className="service-images">
                  <img className='images' src={img4} />
                </div>
                <Carousel.Caption><h3 style={{color:"rgb(88, 88, 238)"}}>Neuro Physiotherapy</h3></Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
                <div className="service-images">
                <img className='images' src={img5} />
                </div>
                <Carousel.Caption><h3 style={{color:"rgb(88, 88, 238)"}}>Pediatric Physiotherapy</h3></Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
                <div className="service-images">
                  <img className='images' src={img6} />
                </div>
                <Carousel.Caption><h3 style={{color:"rgb(88, 88, 238)"}}>Geriatric Physiotherapy</h3></Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
                <div className="service-images">
                  <img className='images' src={img7} />
                </div>
                <Carousel.Caption><h3 style={{color:"rgb(88, 88, 238)"}}>Gynecological Physiotherapy</h3></Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
                <div className="service-images">
                  <img className='images' src={img8} />
                </div>
                <Carousel.Caption><h3 style={{color:"rgb(88, 88, 238)"}}>Post Surgical Physiotherapy</h3></Carousel.Caption>
              </Carousel.Item>
            </Carousel>
            </div>
          </div>
          <div className="contact">
            <div className="sub-headings">CONTACT US</div>
              <div className="connection">
                <div className="contact-det">
                  <ul>
                   <li><IoCall /></li>
                   <li><IoMailOpenOutline /></li>
                   <li><MdOutlineAccessTime /></li>
                   <li><CiLocationOn /></li>
                 </ul>
                </div>
                <div className="contact-det">
                  <ul>
                   <li>+91 9745224441</li>
                   <li>drphysio@gmail.com</li>
                   <li>9.00AM-1.30PM (Mon-Sat)</li>
                   <li>Sahara Building, Beach Road Koyilandy</li>
                  </ul>
                </div>
             </div>
           </div>
          </div> 
          <div className="foot">
            
            <div className="foot-service">
              sevices provide
              <ul>
                <li>ortho physiotherapy</li>
                <li>neuro physiotherapy</li>
                <li>pediatric physiotherapy</li>
                <li>geriatric physiotherapy</li>
                <li>gynecological physiotherapy</li>
                <li>post surgical physiotherapy</li>
              </ul>
              <div className="icons">
              <ul>
                <li className='icon1'><FaWhatsapp /></li>
                <li className='icon1'><FaSquareInstagram /></li>
                <li className='icon1'><IoMailOpenOutline /></li>
              </ul>
            </div>
            </div>
            <div className="foot-discr">2022 dr.physio-physiotherapy clinic</div>
          </div>
        </div>
    </div>
  )
}

export default Home