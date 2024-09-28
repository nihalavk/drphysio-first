import React from 'react'
import './Home.css'
import './responcive.css'
import { IoCall } from "react-icons/io5";
import { MdOutlineAccessTime } from "react-icons/md";
import { IoMailOpenOutline } from "react-icons/io5";
import { CiLocationOn } from "react-icons/ci";
function Contact() {
  return (
    <div>
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
                   <li>+91 9745224441,<br></br>+91 9715030405</li>
                   <li>drphysio@gmail.com</li>
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