import React, { useState } from 'react'
import './Home.css'
import './responcive.css'
import img1 from './assets/about.jpg'
import img2 from './assets/physio_img2.jpg'
import img9 from './assets/icon-whatsapp.svg'

function Home() {

  const handleWhatsappClick=()=>{
window.open("https://wa.me/919745224441?text=Hello!");
  }
  return (
    <div>
        <div class="entry-image" id='home'> 
        <div className="whatsp">
          <img className='whatsp-icon' src={img9} onClick={handleWhatsappClick}/>
        </div>
          
          <div className="caption">
            <div className="caption1">Pain free life through Physiotherapy;</div> 
            <div className="caption1">Welcome To Dr.Physio!</div>
          </div> 
          <img className='physio_img1' src={img1} /> 
        <div className="about" id="about-section">    
          
              <div className="sub-headings"> Dr Physio</div>
              <div className="about-contents">
                <div className="para">Dr. Physio is a trusted physiotherapy center located in Koyilandy, Calicut. We offer high-quality, personalized physiotherapy treatments for individuals of all ages dealing with pain or physical limitations due to lifestyle conditions, injuries, aging, or other factors. Our team is committed to providing effective and comprehensive care to help you recover, manage pain, and improve your mobility for a better, more active life.</div>
              
              <img className='abt-images' src={img2} />
          </div>
          <div className="sub-headings">Vision & Mission</div>
          <div className="para">To emerge as a trust worthy medical rehabilitation institution, providing advanced physical therapy and rehabilitation services that enhance the quality of life for our patience and to deliver exceptional healthcare services by leveraging advanced technology and the expertise of our talented professionals, ensuring the highest quality of care for our patients.</div>
        </div>
          </div> 
         
    </div>
  )
}

export default Home