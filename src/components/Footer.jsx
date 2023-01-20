import React from 'react';
import footerLogo from "../icons_assets/Logo .svg"

const Footer = () => {
  return (
    <div>
    <img src={footerLogo} alt="logo"/>
    <div>
     
        <ul>
        <h3>Doormat Navigation</h3>
        <li><a>Home</a></li>
        <li><a href='#about'>About</a></li>
        <li><a href='#menu'>Menu</a></li>
        <li><a href='#reservations'>Reservations</a></li>
        <li><a href='#order'>Order Online</a></li>
        <li><a href='#login'>Login</a></li>
        </ul>
    </div>
    <div>
     
     <ul>
     <h3>Contact</h3>
     <li>Address</li>
     <li>Phone Number</li>
     <li>Email</li>
     </ul>
 </div>
 <div>
     
     <ul>
     <h3>Social Media Links</h3>
     <li>Address</li>
     <li>Phone Number</li>
     <li>Email</li>
     </ul>
 </div>
    </div>
  )
}

export default Footer