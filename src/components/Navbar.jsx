import React from 'react'
import logo from "../icons_assets/Logo.svg"
import './styles.css'
const Navbar = () => {
  return (
    <nav>
        <ul>
            <img src={logo} alt="logo" className='grid-col-span-2'/>
            <li><a href='/'>Home</a></li>
            <li><a href='#about'>About</a></li>
            <li><a href='#menu'>Menu</a></li>
            <li><a href='#reservations'>Reservations</a></li>
            <li><a href='#order'>Order Online</a></li>
            <li><a href='#login'>Login</a></li>
        </ul>
    </nav>
  )
}

export default Navbar