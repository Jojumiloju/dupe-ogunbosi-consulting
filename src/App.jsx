import { useState, React } from 'react'
import './App.css'
import NavBar from './components/NavBar'
import About from './components/About'
import Home from './components/Home'
import Footer from './components/Footer'
import {Routes, Route} from 'react-router-dom'
import Listings from './components/Listings'
import Properties from './components/Properties.jsx'
import Contact from './components/Contact.jsx'
import './index.js'


function App() {

  // function smoothScroll(target) {
  //   const element = document.getElementById(target);
  //   if (element) {
  //     const elementPosition = element.offsetTop;
  //     window.scrollTo({
  //       top: elementPosition,
  //       behavior: "smooth"
  //     });
  //   }
  // }



  return (
    <>
    {/* {smoothScroll('container')} */}
      <div id="container">
        <div className="navigation">
          <NavBar/>
        </div>
        <div className="Routes">
          <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/about" element={<About/>} />
            <Route path='/listings' element={<Listings/>} />
            <Route path='/properties' element={<Properties/>} />
            <Route path='/contact' element={<Contact/>} />
          </Routes>
        </div>
        <div>
          <div>
            <Footer/>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
