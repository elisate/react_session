import React from 'react'
import { IoSearch } from "react-icons/io5";
import { IoPersonOutline } from "react-icons/io5";
import { LiaShoppingBagSolid } from "react-icons/lia";
import { RiArrowDropDownLine } from "react-icons/ri";
import {ChevronDown } from "lucide-react";
import { Link } from 'react-router';
import "../styles/navbar.css"
function Navbar() {
  return (
    <div className='navcontainer'>
   <div>
    <span className='logo'>miniture</span>
   </div>
   <ul className='list-menu'>
    <li><Link to="/"  className='l-1'><span>Home</span>&nbsp;<ChevronDown  className='icon-size-1' /></Link></li>
    <li><Link to="/about" className='l-2'><span>Catalogue</span>&nbsp;<ChevronDown  className='icon-size-1' /></Link></li>
    <li><Link to="/contact" className='l-3'><span>Pages</span>&nbsp;<ChevronDown  className='icon-size-1' /></Link></li>
    <li><Link to="/blog">Blog</Link></li>
    <li><Link to="/contact">Contact</Link></li>
   </ul>
   <div className='icons-Navbar'>
    <IoSearch className='icon-size' />
    < IoPersonOutline className='icon-size'/>
    <span className='space'><LiaShoppingBagSolid className='icon-size'/>
    <div className='data-display'>2</div>
    </span>
   </div>
      </div>
  )
}

export default Navbar