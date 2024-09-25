import React, { useState } from 'react'
import './Home.css'
import './responcive.css'
import logo from './assets/drphysio_logo1.jpeg'
import img1 from './assets/physio_img1.jpeg'
import img2 from './assets/physio_aboutimg.jpg'
import img3 from './assets/ortho_img.jpg'
import img4 from './assets/Neuro-Physio.jpg'
import img5 from './assets/Child-Physiotherapy.jpg'
import img6 from './assets/gery-img.jpg'
import img7 from './assets/gynec-img.jpg'
import img8 from './assets/surgical-img.jpg'
import img9 from './assets/icon-whatsapp.svg'
import img10 from './assets/iastm-therapy.jpg'
import img11 from './assets/img-mfr.jpg'
import img12 from './assets/Dry-Needling.jpg'
import { IoCall } from "react-icons/io5";
import { IoIosMail } from "react-icons/io";
import { MdOutlineAccessTime } from "react-icons/md";
import { IoMailOpenOutline } from "react-icons/io5";
import { CiLocationOn } from "react-icons/ci";
import { RiWhatsappFill } from "react-icons/ri";
import { FaSquareInstagram } from "react-icons/fa6";
import { FaSquareFacebook } from "react-icons/fa6";
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
            <Navbar.Brand href="#home"><img src={logo}className="d-inline-block align-top"/></Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav"/>
            <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="m-auto" >
              <Nav.Link href="#home" className='nav-links'>Home</Nav.Link>
              <Nav.Link href="#about-section"  className='nav-links'>About Us</Nav.Link>
              <NavDropdown title="Our Services" id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.1" className="nav-drop">Ortho Physiotherapy</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2" className="nav-drop">Neuro Physiotherapy</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3" className="nav-drop">Pediatric Physiotherapy</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.4" className="nav-drop">Geriatric Physiotherapy </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.4" className="nav-drop"> Gynacological Physiotherapy</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.4" className="nav-drop">Post Surgical Physiotherapy</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.4" className="nav-drop">Instrument Assisted soft tissue mobilization(IASTM)</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.4" className="nav-drop">Dry Needling</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.4" className="nav-drop">Myofacil Release(MFR)</NavDropdown.Item>
              </NavDropdown>
              <Nav.Link href="#contact" className='nav-links'>Contact Us</Nav.Link>
            </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      <div className="main-body">
        <div class="entry-image"> 
        <div className="whatsp">
          <img className='whatsp-icon' src={img9}/>
        </div>
          <img className='physio_img1' src={img1} /> 
          
          <div className="caption">
            <div className="caption1">Say Goodbye to Pain...</div> 
            <div className="caption2">Welcome To Dr.Physio</div>
          </div>
          
        <div className="about" id="about-section">    
          <div className="about-contents">
            
              <div className="sub-headings">ABOUT US
                <div className="abt-para">We are dedicated to delivering result-oriented physiotherapy services grounded in scientific protocols. Our approach emphasizes advanced physiotherapy techniques and long-term rehabilitation strategies designed to ensure our clients achieve and maintain optimal functional independence throughout their lives. By focusing on personalized care and evidence-based practices, we aim to support our clients in their journey toward sustained health, mobility, and overall well-being.</div>
              </div>
              <img className='abt-images' src={img2} />
          </div>
          <div className="sub-headings">VISION AND MISSION</div>
          <div className="para">To emerge as a trust worthy medical rehabilitation institution, providing advanced physical therapy and rehabilitation services that enhance the quality of life for our patience and to deliver exceptional healthcare services by leveraging advanced technology and the expertise of our talented professionals, ensuring the highest quality of care for our patients.</div>
        </div>
        
        <div className="services">
          <div className="sub-headings">SERVICES WE PROVIDE</div>
          <div className="service">
          <Carousel>
            <Carousel.Item>
              <div className="service-images">
                <img className='images' src={img3} />
              </div>
              <Carousel.Caption><h3 style={{color:"black"}}>Ortho Physiotherapy</h3></Carousel.Caption> 
            </Carousel.Item>
          <Carousel.Item>
            <div className="service-images">
              <img className='images' src={img4} />
            </div>
            <Carousel.Caption><h3 style={{color:"black"}}>Neuro Physiotherapy</h3></Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <div className="service-images">
              <img className='images' src={img5} />
            </div>
            <Carousel.Caption><h3 style={{color:"black"}}>Pediatric Physiotherapy</h3></Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <div className="service-images">
              <img className='images' src={img6} />
            </div>
            <Carousel.Caption><h3 style={{color:"black"}}>Geriatric Physiotherapy</h3></Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
                <div className="service-images">
                  <img className='images' src={img7} />
                </div>
                <Carousel.Caption><h3 style={{color:"black"}}>Gynecological Physiotherapy</h3></Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
                <div className="service-images">
                  <img className='images' src={img8} />
                </div>
                <Carousel.Caption><h3 style={{color:"black"}}>Post Surgical Physiotherapy</h3></Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
                <div className="service-images">
                  <img className='images' src={img10} />
                </div>
                <Carousel.Caption><h3 style={{color:"black"}}>IASTM</h3></Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
                <div className="service-images">
                  <img className='images' src={img11} />
                </div>
                <Carousel.Caption><h3 style={{color:"black"}}>MFR</h3></Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
                <div className="service-images">
                  <img className='images' src={img12} />
                </div>
                <Carousel.Caption><h3 style={{color:"black"}}>Dry needling</h3></Carousel.Caption>
              </Carousel.Item>
            </Carousel>
            </div>
          </div>
          <div className="contact" id="contact">
            <div className="sub-headings">CONTACT US</div>
              <div className="connection">
                <div className="contact-det">
                  <ul>
                   <li><IoCall style={{height:"45px"}}/></li>
                   <li><IoMailOpenOutline /></li>
                   <li><MdOutlineAccessTime /></li>
                   <li><CiLocationOn /></li>
                 </ul>
                </div>
                <div className="contact-det">
                  <ul>
                   <li>+91 9745224441,<br></br>+91 8714440503</li>
                   <li>drphysio@gmail.com</li>
                   <li>9.00AM-1.00PM (Mon-Sat)</li>
                   <li>Sahara Building, Beach Road Koyilandy</li>
                  </ul>
                </div>
             </div>
           </div>
          </div> 
          <div className="foot">
              <div className="icons">
              <ul>
                <li><FaSquareFacebook className='icon1'/></li>
                <li ><RiWhatsappFill className='icon1'/></li>
                <li ><FaSquareInstagram className='icon1'/></li>
                <li ><IoIosMail className='icon1'/></li>
              </ul>
            
            </div>
            <div><h5  className="foot-discr">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae cum exercitationem, quas dolor, eligendi voluptate id deleniti nostrum est natus tenetur</h5></div>
          </div>
        </div>
    </div>
  )
}

export default Home