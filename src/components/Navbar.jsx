import React from 'react'
import logo from "../icons_assets/Logo.svg"
import { Link } from 'react-router-dom'
import './styles.css'
const Navbar = () => {
  return (
    <nav>
        <ul>
            <img src={logo} alt="logo" className='grid-col-span-2'/>
            <div className='navLinks'>
            <li><Link to='/'>Home</Link></li>
            <li><Link to='/about'>About</Link></li>
            <li><Link to='/menu'>Menu</Link></li>
            <li><Link to='/reservations'>Reservations</Link></li>
            <li><Link to='/order'>Order Online</Link></li>
            <li><Link to='/login'>Login</Link></li>
            </div>
            
        </ul>
    </nav>
  )
}

export default Navbar