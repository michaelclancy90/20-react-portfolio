import React from 'react';
import { Link } from 'react-router-dom';

function Navigation() {
  return (
    <div className='navbar'>
      <div className='navButton'>
        <button></button>
      </div>
      <div className='links'>
        <Link to='/'>About Me </Link>
        <Link to='/Contact'>Contact </Link>
        <Link to='/Portfolio'>Portfolio </Link>
        <Link to='/Resume'>Resume </Link>
      </div>
    </div>
  );
}

export default Navigation;
