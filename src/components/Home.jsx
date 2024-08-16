import React, { useState } from 'react'
import { useFormik } from 'formik'
import { useEffect } from 'react'

import Popup from '../components/TestimonialsPopup.jsx'
import logo from '../assets/DP logo.png'


import "./Home.css"
import sample from '../assets/Home10.jpeg'
import { Link } from 'react-router-dom'
// import { ReactComponent as AddIcon } from '../assets/add.svg'


const Home = () => {

  let formik = useFormik({
    initialValues: {
      status: "",
      location: "",
      rooms: "",
    },
    onSubmit : (values)=> {
      console.log(values)
    }
  })

  useEffect(() => {
    const body = document.querySelector('#root');
  
    body.scrollIntoView({
        behavior: 'smooth'
    }, 500)
  
  }, []);




  const [modalIsOpen, setModalIsOpen] = useState(false);

  const openModal = () => {
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };
  
  

  return (
    <>

      {/* Contains the logo and the headline */}
      <div className='headline'>
        <div className='headline_left'>
          <img src={logo} alt="Dupe Ogunbosi Consulting logo" />
        </div>
        <div className='headline_right'>
          <h3>DUPE OGUNBOSI CONSULTING</h3><br />
          <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Amet modi, officiis accusantium, deserunt, incidunt nam quia mollitia ipsa sed fugit illo! Sunt maxime voluptas quam delectus autem veritatis aperiam illum?</p>
        </div>
      </div>

      {/* Contains the search form */}
      <div className='search'>
        <div><Link  to='/listings'><button className='search_button'>Search for Your Dream Home</button></Link></div>
      </div>

      <div className='contact'>
        <div className='contact_text'>
          <h1>Landing page title</h1>
          <p>Add a subheading describing your site, too</p><br />
          <Link to="/contactus"><button>Contact Us</button></Link>
        </div>
        <div className='contact_image'><img src={sample} alt="sample" loading='lazy' /></div>
      </div>

      <div className='services'>
        <h1>Our services</h1><br /><br /><br /><br />
        <div className='services_flexbox'>
          <div className='services_card'>
            <p>Agency</p><br />
            <p>We navigate the market, negotiate deals, market properties and collaborate with other professionals on behalf of the client.</p><br />
            <Link to="/about">Read More</Link>
          </div>
          <div className='services_card'>
            <p>Management</p><br />
            <p>Keep residential, commercial, and industrial real estate in good condition while creating budgets and generating income for owners.</p><br />
            <Link to="/about">Read More</Link>
          </div><div className='services_card'>
            <p>Consultancy</p><br />
            <p>Evaluate real estate, discuss short and long-term goals and provide options for the best use of a given property.</p><br />
            <Link to="/about">Read More</Link>
          </div><div className='services_card'>
            <p>Development</p><br />
            <p>Act as the contractor on a project on behalf of the client. Communicate with construction staff and monitor projects from process to completion.</p><br />
            <Link to="/about">Read More</Link>
          </div><div className='services_card'>
            <p>Valuation</p><br />
            <p>We provide a range of services to property owners and landlords to help them effectively manage thier estate investments.</p><br />
            <Link to="/about">Read More</Link>
          </div><div className='services_card'>
            <p>Financial</p><br />
            <p>We assist clients with commercial properties on loan amount, interest rates, and capacity to pay back when dealing with lending institutions.</p><br />
            <Link to="/about">Read More</Link>
          </div>
        </div>
      </div>

      {/* <div className='testimonials'>
        <h1>Testimonials</h1><br /><br /><hr />
        <div className='testimonials_flexbox'>
          <div className='testimonials_card'>
            <p>1Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptates.</p><br />
            <img src={sample} alt="photo" />
            <span>- John Doe</span>
          </div>
          <div className='testimonials_card'>
            <p>2Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptates.</p><br />
            <img src={sample} alt="photo" />
            <span>- John Doe</span>
          </div>
          <div className='testimonials_card'>
            <p>3Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptates.</p> <br />
            <img src={sample} alt="photo" />
            <span>- John Doe</span>
          </div>
          <div className='testimonials_card'>
            <p>1Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptates.</p><br />
            <img src={sample} alt="photo" />
            <span>- John Doe</span>
          </div>
          <div className='testimonials_card'>
            <p>2Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptates.</p><br />
            <img src={sample} alt="photo" />
            <span>- John Doe</span>
          </div>
          <div className='testimonials_card'>
            <div className='App'>
            <h1>Reat Modal Popup Example</h1>
            <button onClick={openModal}>Open Modal</button>
            <Popup
              isOpen={modalIsOpen}
              onRequestClose={closeModal}
              content={<div>this is the content of the modal popup.</div>}/>
          </div>
          </div>
          <div className='testimonials_card'>
            <button> <img src={add} alt="add element" /></button>
           
          </div>
        </div>
      </div> */}
    </>
  )
}

export default Home