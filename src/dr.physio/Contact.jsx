import React from 'react'
import './Home.css'
import './responcive.css'
import { CiMail } from "react-icons/ci";
import { BsClock } from "react-icons/bs";
import { FiPhoneOutgoing } from "react-icons/fi";
import { GrLocation } from "react-icons/gr";
function Contact() {
  const handleMailClick=()=>{
    window.open("https://mail.google.com/", "_blank");
  }
  const handleLocationClick=()=>{
    const locatioUrl="https://maps.app.goo.gl/EhNpFxp5jpdG32CP7";
    window.open(locatioUrl, "_blank");
  }
  return (
    <div>
        <div className="contact" id="contact">
            <div className="sub-headings">Contact Us</div>
            {/* <div className="sub1">Connect Us Through</div> */}
              <div className="contactContainer">
                  <div className="contacting">
                    <div className="contactIcon"><FiPhoneOutgoing className='contact-icon'/></div>
                    <div className="contactMethod">+91 9745224441, +91 9715030405</div>
                  </div> 
                  <div className="contacting">
                    <div className="contactIcon"><CiMail className='contact-icon' /></div>
                    <div className="contactMethod" onClick={handleMailClick}>drphysio@gmail.com</div>
                  </div>
                  <div className="contacting">
                    <div className="contactIcon"><BsClock className='contact-icon' /></div>
                    <div className="contactMethod">9.00 AM - 5.00 PM (Mon-Sat)</div>
                  </div>
                  <div className="contacting">
                    <div className="contactIcon"><GrLocation className='contact-icon'/></div>
                    <div className="contactMethod" onClick={handleLocationClick}>Sahara Building, Beach Road Koyilandy (Traffic police station Road)</div>
                  </div>
             </div>
           </div>
    </div>
  )
}

export default Contact