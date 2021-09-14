import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { MenuList } from './menuList';
import './navbar.css';

const Navbar = () => {
  const [clicked, setClicked] = useState(false);
  const menuList = MenuList.map(({ url, title }, index) => {
    return (
      <li key={index}>
        <NavLink exact to={url} activeClassName="active">
          {title}
        </NavLink>
      </li>
    );
  });

  const handleClick = () => {
    setClicked(!clicked);
  };

  return (
    <nav>
      <div className="logo">
        <img
          src="https://www.roadrules.info/images/logo-roadrules.svg"
          className="pic"
          alt="LOGO"
        ></img>
      </div>
      <div className="menu-icon" onClick={handleClick}>
        <i className={clicked ? 'fas fa-times' : 'fas fa-bars'}></i>
      </div>
      <ul className={clicked ? 'menu-list' : 'menu-list close'}>{menuList}</ul>
    </nav>
  );
};

export default Navbar;
