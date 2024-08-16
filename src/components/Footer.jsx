import React from 'react'
import { Link } from 'react-router-dom'
import "./Footer.css"
import { useEffect } from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faTwitter, faWhatsapp, faLinkedin, faInstagram } from '@fortawesome/free-brands-svg-icons'
import { faLocationDot, faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons'

const Footer = () => {

    const email = 'dupeogunbosiconsultingibadan@gmail.com';
    const subject = 'Inquiry';
    const body = 'Good day, I have a question about... '

    const phoneNumber = '7042920516';
    const message = 'Hello I have a question about...';

    useEffect(() => {
        const body = document.querySelector('#root');
    
        body.scrollIntoView({
            behavior: 'smooth'
        }, 500)
    
    }, []);

  return (
    <>
    <div>
        <div className='footer'>
            <div className='footer_col1'>
                <h1>DUPE OGUNBOSI CONSULTING</h1>
                <div>
                    <div><FontAwesomeIcon icon={faLocationDot} />
                    <a href="https://maps.app.goo.gl/hHRbyuSkrMgnVs4p7" target='_blank'>No. 142, Fajuyi Street, Adamasingba, Opposite Alafia Hospital, Mokola Ibadan, Oyo State</a><br /></div>
                    <div><FontAwesomeIcon icon={faPhone} /><span> (802) 364 2269</span><br /></div>
                    <div><FontAwesomeIcon icon={faEnvelope}/><a href={`mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`} target='_blank'>dupeogunbosiconsultingibadan@gmail.com</a><br /></div>
                    
                </div>
            </div>
            <div className='footer_col2'>
                <h4>Quick Links</h4>
                <Link to="/">Home</Link><br />
                <Link to="/properties">Properties</Link><br />
                <Link to="/contact">Contact</Link><br />
                <Link to="/about">About</Link><br />
            </div>
            <div className='footer_col4'>
                <h4>Connect With Us</h4>
                <a href="" className='fa-twitter'><FontAwesomeIcon icon={faTwitter} size='2x' fixedWidth/></a>
                <a href="https://www.instagram.com/dupe_ogunbosi_consulting/" target='_blank' rel='noopener nonreferrer' className='fa-instagram'><FontAwesomeIcon icon={faInstagram} size='2x' fixedWidth/></a>
                <a href={`https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`} target='_blank' rel='noopener nonreferrer' className='fa-whatsapp'><FontAwesomeIcon icon={faWhatsapp} size='2x' fixedWidth/></a>
                <a href="https://www.linkedin.com/company/dupe-ogunbosi-consulting/about/" target='_blank' rel='noopener nonreferrer' className='fa-linkedin'><FontAwesomeIcon icon={faLinkedin} size='2x' fixedWidth /></a>
            </div>
        </div>
        <div>
            <div className='footer_bottom'>            
            <p>© 2024 Deeprime Properties. All Rights Reserved</p>
            <p>Designed by Jomiloju</p>
        </div>
        </div>
        
    </div>
        
    </>
  )
}

export default Footer