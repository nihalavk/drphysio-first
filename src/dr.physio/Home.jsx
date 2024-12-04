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
          <img className='physio_img1' src={img1} /> 
          {/* <div className="caption">
            <div className="caption1">Pain free life through Physiotherapy;</div> 
            <div className="caption1">Welcome To Dr.Physio!</div>
          </div>  */}
        <div className="about" id="about-section">    
          
              <div className="sub-headings">ABOUT US</div>
              <div className="about-contents">
                <div className="para">We are dedicated to delivering result-oriented physiotherapy services grounded in scientific protocols. Our approach emphasizes advanced physiotherapy techniques and long-term rehabilitation strategies designed to ensure our clients achieve and maintain optimal functional independence throughout their lives. By focusing on personalized care and evidence-based practices, we aim to support our clients in their journey toward sustained health, mobility, and overall well-being.</div>
              
              <img className='abt-images' src={img2} />
          </div>
          <div className="sub-headings">VISION AND MISSION</div>
          <div className="para">To emerge as a trust worthy medical rehabilitation institution, providing advanced physical therapy and rehabilitation services that enhance the quality of life for our patience and to deliver exceptional healthcare services by leveraging advanced technology and the expertise of our talented professionals, ensuring the highest quality of care for our patients.</div>
        </div>
          </div> 
         
    </div>
  )
}

export default Home