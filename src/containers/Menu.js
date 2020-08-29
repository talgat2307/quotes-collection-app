import React from 'react';
import { NavLink } from 'react-router-dom';

const Menu = () => {
  return (
    <div className='categories'>
      <ul>
        <li><NavLink to='/'>All</NavLink></li>
        <li><NavLink to='/quotes/star-wars'>Star Wars</NavLink></li>
        <li><NavLink to='/quotes/famous-people'>Famous People</NavLink></li>
        <li><NavLink to='/quotes/motivational'>Motivational</NavLink></li>
        <li><NavLink to='/quotes/humour'>Humour</NavLink></li>
        <li><NavLink to='/quotes/saying'>Saying</NavLink></li>
      </ul>
    </div>
  );
};

export default Menu;