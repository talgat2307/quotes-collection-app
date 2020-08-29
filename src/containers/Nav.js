import React from 'react';
import { Link, NavLink } from 'react-router-dom';

const Nav = () => {
  return (
    <>
      <nav className='navbar'>
        <h2 className='header'><Link to='/'>Quotes Central</Link></h2>
        <ul className='list'>
          <li><NavLink to='/'>Quotes</NavLink></li>
          <li><NavLink to='/add-quote'>Submit new quotes</NavLink></li>
        </ul>
      </nav>
    </>
  );
};

export default Nav;