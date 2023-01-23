import React ,{useState}from 'react'
import logo from "../icons_assets/Logo.svg"
import { Link,useNavigate } from 'react-router-dom';
import icon from '../icons_assets/hamburgerMenu.svg';
import './styles.css'
const Navbar = () => {
  const[open,setOpen]= useState(false);
  const navigate= useNavigate()
  const openClicked = ()=>{
    setOpen(!open)
  }
  return (
    <nav>
        <ul>
            <img src={logo} alt="logo" className='grid-col-span-2' onClick={()=>navigate('/')}/>
            <div className='navLinks'>
            <li><Link to='/'>Home</Link></li>
            <li><Link to='/about'>About</Link></li>
            <li><Link to='/menu'>Menu</Link></li>
            <li><Link to='/reservations'>Reservations</Link></li>
            <li><Link to='/order'>Order Online</Link></li>
            <li><Link to='/login'>Login</Link></li>
            </div>
            <div className='navIcon' onClick={openClicked}>
              <img src={icon} alt="Hamburger_icon"/>
            </div>
            { open &&
              <div className='hiddenLinks'>
                   <li><Link to='/'>Home</Link></li>
            <li><Link to='/about'>About</Link></li>
            <li><Link to='/menu'>Menu</Link></li>
            <li><Link to='/reservations'>Reservations</Link></li>
            <li><Link to='/order'>Order Online</Link></li>
            <li><Link to='/login'>Login</Link></li>
              </div>
            }
            
        </ul>
    </nav>
  )
}

export default Navbar