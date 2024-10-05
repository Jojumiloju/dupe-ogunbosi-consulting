import React, { useRef } from 'react'
import sample from "../assets/Home7.jpg"
import "./Contact.css"
import { useEffect } from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLocationDot, faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons'
import emailjs from '@emailjs/browser';

const Contact = () => {

  const email = 'dupeogunbosiconsultingibadan@gmail.com';
    const subject = 'Inquiry';
    const body = 'Good day, I have a question about... '


    useEffect(() => {
      const body = document.querySelector('#root');
    
      body.scrollIntoView({
          behavior: 'smooth'
      }, 500)
    
    }, []);

    const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_6j8otul', 'template_k3bd5ab', form.current, {
        publicKey: 'p0aShVtUVT90ExMnY',
      })
      .then(
        () => {
          alert('Your message has been sent successfully');
        },
        (error) => {
          alert('Your message failed to send because... ', error);
        },
      );
  };

  return (
    <>
        <div className="map_details">
            <div className='contact_map'>
                <img src={sample} alt="sample" style={{height: '100%', width: '100%'}}/>
            </div>
            <div className='contact_map_details'>
              <div>
                <FontAwesomeIcon icon={faPhone} className='map_details_icon' /><br />
                <span>0808 654 2644</span>
              </div>
              <div>
                <FontAwesomeIcon icon={faLocationDot} className='map_details_icon'/><br />
                <a href="https://maps.app.goo.gl/hHRbyuSkrMgnVs4p7" target='_blank'>No. 142, Fajuyi Street, Adamasingba, Opposite Alafia Hospital, Mokola Ibadan, Oyo State</a>
              </div>
              <div>
                <FontAwesomeIcon icon={faEnvelope} className='map_details_icon'/><br />
                <a href={`mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`} target='_blank'>dupeogunbosiconsultingibadan @gmail.com</a>
              </div>
            </div>
        </div>

        <div className="agents_details">
          <div className='agents_card'>
            <div className='agent_img'><img src={sample} alt="" style={{height: '100%', width: '100%'}}/></div>
            <div className='agent_info'>
              <h4>Modupeoluwa Ogunbosi</h4>
              <p>Valuer</p>
              <p>B.Tech Estate Managment (FUT Minna)</p>
              <p>Based in: Ibadan</p><br />  
              <p>0808 654 2644</p>
              <p>dupeogunbosiconsultingibadan@gmail.com</p>
            </div>
          </div>
          <div className='agents_card'>
            <div className='agent_img'><img src={sample} alt="" style={{height: '100%', width: '100%'}}/></div>
            <div className='agent_info'>
              <h4>Janet Olayinka Idowu</h4>
              <p>Management Surveyor</p>
              <p>HND Estate Management (Polytechnic Ibadan)</p>
              <p>Based in: Ibadan</p><br />              
              <p>0704 297 9637</p>
              <p></p>
            </div>
          </div>
          <div className='agents_card'>
            <div className='agent_img'><img src={sample} alt="" style={{height: '100%', width: '100%'}}/></div>
            <div className='agent_info'>
              <h4>Esther Fadero</h4>
              <p>Management Surveyor</p>
              <p>HND Estate Managemenet (Polytechnic Ibadan)</p>
              <p>Based in: Ibadan</p><br />
              <p>0902 279 3545</p>
              <p></p>
            </div>
          </div>
        </div>

        <div className='form_details'>
          <form ref={form} onSubmit={sendEmail} className='form_form'>
        <label>Name</label>
        <input type="text" name="from_name" placeholder='Fullname'/>
        <label>Phone</label>
        <input type="text" name='from_phone' placeholder='Phone'/>
        <label >Email</label>
        <input type="email" name='from_email' placeholder='Email'/>
      <label>Message</label>
      <textarea name="message" placeholder='Your message'/>
      <input type="submit" value="Send" className='form_form_submit'/>
    </form>
        </div>

        

    </> 
  )
}

export default Contact
