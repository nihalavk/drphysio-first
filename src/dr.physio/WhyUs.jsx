import React from 'react'
import './Home.css'
import './responcive.css'
import { FaHandPointRight } from "react-icons/fa";

function WhyUs() {
    const card=[{name:"Expert physiotherapists",icon:<FaHandPointRight />},{name:"Personalized Care Plans",icon:<FaHandPointRight />},{name:"Comprehensive Services",icon:<FaHandPointRight />},
        {name:"Patient-Centered Approach",icon:<FaHandPointRight />},{name:"Proven Results",icon:<FaHandPointRight />},{name:"Convenient Location & Flexible Hours",icon:<FaHandPointRight />},
    ]
  return (
    <div>
         <div className="Why-discr">
            <div className="sub-headings">Why Choose US?</div>
            <div className="para">Dr. Physio is committed to helping you regain mobility and live pain-free with personalized care that’s tailored to your unique needs. Here’s why our clinic stands out:</div>
        </div>
        <div className="reason">
        {card.map((cardItems)=>
                <div className="reason1" >
                    <div className="reason-icon">{cardItems.icon}</div>
                    <div className="reason-name">{cardItems.name}</div>                    
                </div>
            )}
        </div>
        {/* <div className="sub1">Supports we Offer</div> */}
    </div>
  )
}

export default WhyUs