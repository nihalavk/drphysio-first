import React, { useState } from 'react'
import './Home.css'
import './responcive.css'
import logo from './assets/drphysio_logo1.jpeg'
import { MdOutlineArrowDropDown } from "react-icons/md";
import { VscThreeBars } from "react-icons/vsc";


function NavigationBar() {
  const [showBar, setShowBar] = useState(false)
  return (
    <div>
        <div className="top-nav">
            <img src={logo}className="nav-logo"/>
            <div className="nav-items">
              <a href="#home">Home</a>
              <a href="#about-section">About Us</a>
              <div className="drop-down">
                <button className='drop-btn'>Our Services
                <MdOutlineArrowDropDown />
                </button>
                <div className="drop-contents">
                  <a href="#iastm">Instrument Assisted Soft Tissue Mobilization (IASTM)</a>
                  <a href="#dryneedling">Dry Needling</a>
                  <a href="#mfr">MyoFacial Release</a>
                  <a href="#ortho">Ortho Physiotherapy</a>
                  <a href="#neuro">Neuro Physiotherapy</a>
                  <a href="#gynec">Gynecological Physiotherapy</a>
                  <a href="#pedic">Pediatric Physiotherapy</a>
                  <a href="#gery">Geriatric Physiotherapy</a>
                  <a href="#sports">Sports Physiotherapy</a>
                  <a href="#surgical">Post Surgical Physiotherapy</a>
                </div>
              </div>
              <a href="#contact">Contact Us</a>
              <button className='resp-icon' onClick={()=>setShowBar(!showBar)}>{showBar?<VscThreeBars />:""}</button> 
            </div>
        </div>
    </div>
  )
}

export default NavigationBar