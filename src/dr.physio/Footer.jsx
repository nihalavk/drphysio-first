import React from 'react'
import './Home.css'
import './responcive.css'
import logo from './assets/Logo-01.png'
import { RiWhatsappFill } from "react-icons/ri";
import { FaSquareInstagram } from "react-icons/fa6";
import { FaSquareFacebook } from "react-icons/fa6";
import { IoMdMail } from "react-icons/io";

function Footer() {
  const handleFacebookClick=()=>{
    window.open("https://www.facebook.com/", "_blank")
  }
  const handleWhatsappClick=()=>{
    window.open("https://wa.me/919745224441?text=Hello!");
      }
      const handleInstagramClick=()=>{
        window.open("https://www.instagram.com/dr_physio_koyilandy/profilecard/?igsh=ZGZmeXJjNXI0anR5")
      }
      const handleMailClick=()=>{
        window.open("https://mail.google.com/", "_blank");
      }
      
  return (
    <div>
        <div className="foot">
          {/* <div className="footLogo" ></div> */}
          <div className="foot-first">
            <div className='foot1'>Dr.Physio, where healing meets expertise. We offers tailored therapies to and enhance your quality of life.  your path to recovery begins here!</div>
            <div className="foot2">
              <div className="foot2-head">Treatments</div>
              <div className="foot2-list" >
                <ul>
                  <li>Ortho Physiotherapy</li>
                  <li>Neuro Physiotherapy</li>
                  <li>Pediatric Physiotherapy</li>
                  <li>Geriatric Physiotherapy</li>
                  <li>Gynacological Physiotherapy</li>
                  <li>Post Surgical Physiotherapy</li>
                  <li>Sports Physiotherapy</li>
                  <li>Instrument Assisted soft tissue mobilization(IASTM)</li>
                  <li>Dry Needling</li>
                  <li>Myofacil Release(MFR)</li>
                </ul>
              </div>
            </div>
            <div className="foot2">
              <div className="foot2-head">Quick Links</div>
              <div className="foot2-list">
                <ul>
                  <li><a href='#home' >Home</a></li>
                  <li><a href='#about-section'>About Us</a></li>
                  <li><a href="#action/3.1">Services</a></li>
                  <li><a href='#contact'>Contact</a></li>
                </ul>
              </div>
            </div>
          </div>
          <div className="icon-head">Follow Us On</div>
              <div className="icons">
              <ul>
                {/* <li><FaSquareFacebook className='icon1'onClick={handleFacebookClick}/></li> */}
                <li ><RiWhatsappFill className='icon1' onClick={handleWhatsappClick}/></li>
                <li ><FaSquareInstagram className='icon1' onClick={handleInstagramClick}/></li>
                <li ><IoMdMail className='icon1' onClick={handleMailClick}/></li>
              </ul>
              <div><h5  className="foot-discr">Copyright © 2024 by drphysio. All Rights Reserved.</h5></div>
            </div> 
          </div>
    </div>
  )
}

export default Footer