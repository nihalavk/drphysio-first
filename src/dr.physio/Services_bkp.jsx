import React from 'react'
import './Home.css'
import './responcive.css'
import img3 from './assets/ortho_img.jpg'
import img4 from './assets/Neuro-Physio.jpg'
import img5 from './assets/Child-Physiotherapy.jpg'
import img6 from './assets/gery-img.jpg'
import img7 from './assets/gynec-img.jpg'
import img8 from './assets/surgical-img.jpg'
import img10 from './assets/iastm-therapy.jpg'
import img11 from './assets/img-mfr.jpg'
import img12 from './assets/Dry-Needling.jpg'
import Carousel from 'react-bootstrap/Carousel';

function Services() {
  return (
    <div> <div className="services">
    <div className="sub-headings">SERVICES WE PROVIDE</div>
    <div className="para">At Dr.Physio we are committed to providing personalized, evidence-based physiotherapy services to help you achieve optimal health and mobility. Our services include advanced techniques such as <b>Instrument-Assisted Soft Tissue Mobilization (IASTM), dry needling, and myofascial release(MFR)</b>, alongside 
    <b> Ortho physiotherapy, Neuro Physiotherapy, Gynecological, Pediatric, Geriatric Physiotherapy , Sports physiotherapy and Post Surgical Physiotherapy.</b> 
    Contact us today to begin your journey toward better health.
    </div>
    <div className="service">
    <Carousel>
      <Carousel.Item>
        <div className="service-images">
          <img className='images' src={img3} />
        </div>
      </Carousel.Item>
    <Carousel.Item>
      <div className="service-images">
        <img className='images' src={img4} />
      </div> 
    </Carousel.Item>
    <Carousel.Item>
      <div className="service-images">
        <img className='images' src={img5} />
      </div>
    </Carousel.Item>
    <Carousel.Item>
      <div className="service-images">
        <img className='images' src={img6} />
      </div>
        </Carousel.Item>
        <Carousel.Item>
          <div className="service-images">
            <img className='images' src={img7} />
          </div>
        </Carousel.Item>
        <Carousel.Item>
          <div className="service-images">
            <img className='images' src={img8} />
          </div>
        </Carousel.Item>
        <Carousel.Item>
          <div className="service-images">
            <img className='images' src={img10} />
          </div>
        </Carousel.Item>
        <Carousel.Item>
          <div className="service-images">
            <img className='images' src={img11} />
          </div>
        </Carousel.Item>
        <Carousel.Item>
          <div className="service-images">
            <img className='images' src={img12} />
          </div>
        </Carousel.Item>
      </Carousel>
      </div>
    </div>
    </div>
  )
}

export default Services