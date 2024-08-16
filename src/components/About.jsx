import React from 'react'
import { useEffect } from 'react'
import { useInView } from 'react-intersection-observer'

import sample from '../assets/sample1.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBarsProgress, faCoins, faHeadset, faHelmetSafety, faMagnifyingGlassDollar, faPersonDigging, faUserTie } from '@fortawesome/free-solid-svg-icons'

import './About.css'

const About = () => {

  const {ref: ref1, inView: inView1 } = useInView({
    threshold: 1.0,
  })

  const {ref: ref2, inView: inView2 } = useInView({
    threshold: 1.0,
  })
  const {ref: ref3, inView: inView3 } = useInView({
    threshold: 1.0,
  })
  const {ref: ref4, inView: inView4 } = useInView({
    threshold: 1.0,
  })
  const {ref: ref5, inView: inView5 } = useInView({
    threshold: 1.0,
  })
  const {ref: ref6, inView: inView6 } = useInView({
    threshold: 1.0,
  })

  useEffect(() => {
    const body = document.querySelector('#root');
  
    body.scrollIntoView({
        behavior: 'smooth'
    }, 500)
  
  }, []);


  return (
    <>
      <div className='about'>
        <h1>DUPE OGUNBOSI CONSULTING</h1>
        <p>We were registered with CAC as dee-primeproperties  in 2009 and we changed to Dupe Ogunbosi Consulting in 2021 after we had completed or NIESV and ESVARBON registrations. We have a wide range of properties available for sale and rent in different locations across Nigeria. Whether you are looking for a house, an apartment, or a commercial property, we have something for everyone. Contact us today to find your dream home!</p>
      </div>


      <div className='employees'>
        <div className='employee'>
        <div>
          <img src={sample} alt="" />
        </div>        
          <div className='employee_details'>
            <h4>Owner, Principal Partner</h4>
            <p>ESV Modupeoluwa Ogunbosi</p>
            </div>
        </div>

        <div className='employee'>
        <div>
          <img src={sample} alt="" />
        </div>        
          <div className='employee_details'>
            <h3>Executive</h3>
            <p>Dr. Babatunde Ogunbosi</p>
            </div>
        </div>
        
        <div className='excecutives'>
          <div className='exec'>
          <div>
          <img src={sample} alt="" />
        </div>        
          <div className='employee_details'>
            <h4>Management Surveyor</h4>
            <p>Janet Olayinka Idowu</p>
            </div>
          </div>

          <div className='exec'>
          <div>
          <img src={sample} alt="" />
        </div>        
          <div className='employee_details'>
            <h4>Management Surveyor</h4>
            <p>Esther Fadero</p>
            </div>
          </div>

          <div className='exec'>
          <div>
          <img src={sample} alt="" />
        </div>        
          <div className='employee_details'>
            <h4>Valuer</h4>
            <p>Modupeoluwa Ogunbosi</p>
            </div>
          </div>

        </div>


      </div>


      <div className='about_services' id='services'>
        <div className='about_services_child1' >
          <div>
            <h2>Agency</h2>
            <p>We navigate the market, negotiate deals, market properties and collaborate with other professionals on behalf of the client.</p>
          </div>
          <FontAwesomeIcon icon={faUserTie} size='8x' className={inView1 ? "child2" : "child2_hidden"} ref={ref1}></FontAwesomeIcon>
        </div>
        <div className='about_services_child2'>
        <FontAwesomeIcon icon={faBarsProgress} size='8x' ref={ref2} className={inView2 ? "child2" : "child2_hidden"}></FontAwesomeIcon>
          <div>
            <h2>Management</h2>
            <p>Keep residential, commercial, and industrial real estate in good condition while creating budgets and generating income for owners.</p>
          </div>
        </div>
        <div className='about_services_child1'>
          <div>
            <h2>Consultancy</h2>
            <p>Evaluate real estate, discuess short and long-term goals and provide options for the best use of a given property.</p>
          </div>
          <FontAwesomeIcon icon={faHeadset} size='8x' ref={ref3} className={inView3 ? "child2" : "child2_hidden"}></FontAwesomeIcon>
        </div>
        <div className='about_services_child2'>
        <FontAwesomeIcon icon={faPersonDigging} size='8x' ref={ref4} className={inView4 ? "child2" : "child2_hidden"}></FontAwesomeIcon>
          <div>
            <h2>Development</h2>
            <p>Act as the contractor on a project on behalf of the client. Communicate with construction staff and monitor projects from process to completion.</p>
          </div>
        </div>
        <div className='about_services_child1'>
          <div>
            <h2>Valuation</h2>
            <p>We provide a range of services to property owners and landlords to help them effectively manage thier estate investments.</p>
          </div>
          <FontAwesomeIcon icon={faMagnifyingGlassDollar} size='8x' ref={ref5} className={inView5 ? "child2" : "child2_hidden"}></FontAwesomeIcon>
        </div>
        <div className='about_services_child2'>
        <FontAwesomeIcon icon={faCoins} size='8x' ref={ref6} className={inView6 ? "child2" : "child2_hidden"}></FontAwesomeIcon>
          <div>
            <h2>Financial</h2>
            <p>We assist clients with commercial properties on loan amount, interest rates, and capacity to pay back when dealing with lending institutions.</p>
          </div>
        </div>
      </div>      
    </>
  )
}

export default About