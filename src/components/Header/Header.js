import React from 'react';
import { NavLink } from 'react-router-dom';
import './Header.css'
const Header = () => {
  let activeStyle = {
   backgroundColor : "aqua",
  };

  return (
    <div className='header-design'>
      <li><NavLink className='textDec'  style={  ({ isActive }) =>isActive ? activeStyle : undefined} to='/home'>Home</NavLink></li>
      <li><NavLink className='textDec'  style={({ isActive }) =>isActive ? activeStyle : undefined } to='/about'>About</NavLink></li>
      <li><NavLink className='textDec' style={({ isActive }) =>isActive ? activeStyle : undefined} to='/products'>Users</NavLink></li>
      <li><NavLink className='textDec' style={({ isActive }) =>isActive ? activeStyle : undefined} to='/posts'>Posts</NavLink></li>
    </div>
  );
};

export default Header;