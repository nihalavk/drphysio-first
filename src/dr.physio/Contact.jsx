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
            <div className="sub-headings">CONTACT US</div>
              <div className="connection">
                <div className="contact-det">
                  <ul>
                   <li><FiPhoneOutgoing className='contact-icon'/></li>
                   <li><a href="mail" onClick={handleMailClick} ><CiMail className='contact-icon'  /></a></li>
                   <li><BsClock className='contact-icon' /></li>
                   <li><a href='location' onClick={handleLocationClick}><GrLocation className='contact-icon'/></a></li>
                 </ul>
                </div>
                <div className="contact-det1">
                  <ul>
                   <li> <a href="number">+91 9745224441,<br></br>+91 9715030405</a></li>
                   <li><a href='mail'>drphysio@gmail.com</a></li>
                   <li>9.30AM-1.00PM (Mon-Sat)</li>
                   <li>Sahara Building, Beach Road Koyilandy (Traffic police station Road)</li>
                  </ul>
                </div>
             </div>
           </div>
    </div>
  )
}

export default Contact