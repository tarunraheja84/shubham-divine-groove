import React from 'react'
import './Navbar.css';

export default function Navbar() {

  return (
    <div>
      <nav className="navbar">
       
        <div className="logo">Shubham's Divine Groove</div>
        
        <ul className="nav-links">
        
        <input type="checkbox" id="checkbox_toggle" />
        <label htmlFor="checkbox_toggle" className="hamburger">&#9776;</label>
        
        <div className="menu">
        <li><a href="/">Home</a></li>
        <li><a href="/">About</a></li>
        <li className="services">
        <a href="/">Services</a>
        </li>
        <li><a href="/">Fees</a></li>
        <li><a href="/">Contact Us</a></li>
        </div>
        </ul>
        </nav>
    </div>
  )
}
