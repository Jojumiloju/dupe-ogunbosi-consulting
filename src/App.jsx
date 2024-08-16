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
        <div className="row"></div>
        <div>
          <div>
            <Footer/>
          </div>
        </div>
      </div>






      {/* <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p> */}
    </>
  )
}

export default App
