import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import './styles/navigation.css';

function Navigation() {
  const location = useLocation;
  return (
    <div className='navbar'>
      <div className='navButton'>
        <button></button>
      </div>
      <div className='links'>
        <div>Michael Clancy</div>
        <Link to='/'>About Me </Link>
        <Link to='/Portfolio'>Portfolio </Link>
        <Link to='/Resume'>Resume </Link>
        <Link to='/Contact'>Contact </Link>
      </div>
    </div>
  );
}

export default Navigation;
