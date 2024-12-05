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
              <div className="connection">
                <div className="contact-det">
                  <ul>
                   <li><FiPhoneOutgoing className='contact-icon'/></li>
                   <li><CiMail className='contact-icon' /></li>
                   <li><BsClock className='contact-icon' /></li>
                   <li><GrLocation className='contact-icon'/></li>
                 </ul>
                </div>
                <div className="contact-det1">
                  <ul>
                   <li>+91 9745224441,+91 9715030405</li>
                   <li onClick={handleMailClick}>drphysio@gmail.com</li>
                   <li>9.30AM-1.00PM (Mon-Sat)</li>
                   <li onClick={handleLocationClick}>Sahara Building, Beach Road Koyilandy (Traffic police station Road)</li>
                  </ul>
                </div>
             </div>
           </div>
    </div>
  )
}

export default Contact