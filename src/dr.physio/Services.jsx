import React from 'react'
import './Home.css'
import './responcive.css'

function Services() {
    const card=[
        {heading:"Orthopedic Physiotherapy",text:"Orthopedic physiotherapy focuses on diagnosing, managing, and treating musculoskeletal conditions effecting the bones, muscles, joints, ligaments, and tendons. It helps patients recover from injuries, surgeries, or conditions like arthritis, using exercises, manual therapy, and rehabilitation techniques to restore movement, strength, and function.",button:"More"},
        {heading:"Neuro Physiotherapy",text:"Neurophysiotherapy is a specialized branch of physiotherapy that focuses on treating individuals with neurological disorders, such as stroke, multiple sclerosis, Parkinson's disease, and spinal cord injuries. It aims to improve mobility, balance, coordination, and overall function by using targeted exercises, rehabilitation techniques, and manual therapy to help patients regain independence.",button:"More"},
        {heading:"Pediatric physiotherapy",text:"Pediatric physiotherapy focuses on diagnosing and treating physical and developmental conditions in infants, children, and adolescents. It aims to enhance motor skills, balance, strength, and coordination in young patients with conditions like cerebral palsy, developmental delays, or muscular dystrophy, using play-based therapy, and specialized techniques to support their functional independence.",button:"More"},
        {heading:"Geriatric physiotherapy",text:"Geriatric physiotherapy specializes in treating older adults to improve mobility, strength, balance, and overall physical function. It addresses age-related conditions such as arthritis, osteoporosis, joint stiffness, and balance disorders, helping seniors maintain independence, manage pain, and enhance their quality of life through tailored exercises and rehabilitation techniques.",button:"more"},
        {heading:"Gynecological Physiotherapy",text:"Gynecological physiotherapy focuses on treating women’s health issues related to the pelvic floor, pregnancy, and postpartum recovery. It helps manage conditions such as pelvic pain, incontinence, prolapse, and post-surgical rehabilitation. Through exercises, manual therapy, and education, it aims to restore and enhance overall well-being.",button:"more"},
        {heading:"Post-Surgical physiotherapy",text:"Post-surgical physiotherapy is rehabilitation focused on helping patients recover after surgery. It involves exercises, manual therapy, and mobility training to reduce pain, restore strength, improve movement, and prevent complications. The goal is to support a safe and efficient recovery, enabling patients to regain their physical function and return to daily activities.",button:"more"},
        {heading:"Sports physiotherapy",text:" focuses on preventing and treating injuries related to sports. It helps improve athletic performance and recovery through exercises, manual therapy, and rehabilitation. Sports physiotherapists work with athletes to increase strength, flexibility, and endurance, ensuring they return to their sport safely.",button:"more"},
        {heading:"Instrument Assisted Soft Tissue Mobilization (IASTM)",text:"AISTM is an Advanced physiotherapy technique using specialized tools to apply pressure, break down scar tissue, and improve soft tissue function. It helps reduce pain, enhance mobility, and speed up recovery from injuries.",button:"More"},
        {heading:"Myofacial Release (MFR)",text:"MFR is a hands-on therapy technique used to relieve tension in the fascia, the connective tissue surrounding muscles and organs. It helps reduce pain, improve flexibility, and restore normal muscle function by releasing tight or restricted areas in the soft tissues.",button:"More"},
        {heading:"Dry Needling",text:"Dry needling is an Advanced therapeutic technique in which thin needles are inserted into trigger points or tight muscle areas to relieve pain and improve muscle function. It helps reduce muscle tension, increase blood flow, and promote healing by targeting knots or tight bands in muscles.",button:"More"}]
  return (
    <div>
        <div className="service-discr">
            <div className="sub-headings">Services we Provide</div>
            <div className="para" id='action/3.1'>At Dr. Physio, we are dedicated to providing personalized, evidence-based physiotherapy services to help you achieve optimal health and mobility. Our experienced physiotherapists work with you to create customized treatment plans that address your unique needs and goals. We focus on not only relieving pain but also improving your overall well-being. Our commitment is to help you live a healthier and pain-free life with confidence.</div>
        </div>
        <div className="sub1">Supports we Offer</div>
        <div className="services" >
            {card.map((cardItems)=>
                <div className="service" >
                    <div className="service-head">{cardItems.heading}</div>
                    <hr></hr>
                    <div className="service-text">{cardItems.text}</div>
                    <div style={{ "width" : "100%",'textAlign': 'center' }}>
                        {/* <div className="service-img"><img src={cardItems.img} /></div> */}
                        {/* <button className='service-btn'>{cardItems.button}</button> */}
                    </div>
                </div>
            )}
        </div>
    </div>
  )
}

export default Services