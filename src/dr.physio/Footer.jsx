import React from 'react'
import './Home.css'
import './responcive.css'
import { RiWhatsappFill } from "react-icons/ri";
import { FaSquareInstagram } from "react-icons/fa6";
import { FaSquareFacebook } from "react-icons/fa6";
import { IoMdMail } from "react-icons/io";

function Footer() {
  return (
    <div>
        <div className="foot">
          <div className="foot-first">
            <div className='foot1'>Dr.Physio, where healing meets expertise. We offers tailored therapies to and enhance your quality of life.  your path to recovery begins here!</div>
            <div className="foot2">
              <div className="foot2-head">Treatments</div>
              <div className="foot2-list">
                <ul>
                  <li>Instrument Assisted soft tissue mobilization(IASTM)</li>
                  <li>Dry Needling</li>
                  <li>Myofacil Release(MFR)</li>
                  <li>Ortho Physiotherapy</li>
                  <li>Neuro Physiotherapy</li>
                  <li>Pediatric Physiotherapy</li>
                  <li>Geriatric Physiotherapy</li>
                  <li>Gynacological Physiotherapy</li>
                  <li>Post Surgical Physiotherapy</li>
                  <li>Sports Physiotherapy</li>
                </ul>
              </div>
            </div>
            <div className="foot2">
              <div className="foot2-head">Quick Links</div>
              <div className="foot2-list">
                <ul>
                  <li>Home</li>
                  <li>About Us</li>
                  <li>Services</li>
                  <li>Contact</li>
                </ul>
              </div>
            </div>
          </div>
          <div className="icon-head">Follow Us On</div>
              <div className="icons">
              <ul>
                <li><FaSquareFacebook className='icon1'/></li>
                <li ><RiWhatsappFill className='icon1'/></li>
                <li ><FaSquareInstagram className='icon1'/></li>
                <li ><IoMdMail className='icon1'/></li>
              </ul>
              <div><h5  className="foot-discr">Lorem ipsum dolor sit amet consectetur adipisicing elit.</h5></div>
            </div> 
          </div>
    </div>
  )
}

export default Footer