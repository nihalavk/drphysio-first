import React from 'react'
import './Home.css'
import './responcive.css'
function WhyUs() {
    const card=[{name:"Expert physiotherapist"},{name:"Personalized Care Plans"},{name:"Comprehensive Services"},{name:"State-of-the-Art Facility"},
        {name:"Patient-Centered Approach"},{name:"Proven Results"},{name:"Convenient Location & Flexible Hours"},
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
                    <div className="reason-name">{cardItems.name}</div>                    
                </div>
            )}
        </div>
        {/* <div className="sub1">Supports we Offer</div> */}
    </div>
  )
}

export default WhyUs