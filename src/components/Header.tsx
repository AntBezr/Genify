import React from 'react';
import { NavLink } from 'react-router-dom'
import headerCss from './css/Header.module.css'

const Header = () => {
  return (
    <div className={headerCss.header}>
      <div className={headerCss.menu}>
        <div className={headerCss.menuBoxUl}>
          <NavLink to={"/"} className={headerCss.logo}>Genify</NavLink>
        </div>

        <ul className={headerCss.menuBoxUl}>
          <li><NavLink to={"/"} className={headerCss.menuItem}  >Home</NavLink></li>
          <li><NavLink to={"/songlist"} className={headerCss.menuItem}>Songs</NavLink></li>
          <li><NavLink to={"/"} className={headerCss.menuItem}>About</NavLink></li>
        </ul>
      </div>
    </div >
  );
};

export default Header;