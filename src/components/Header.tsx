import React from 'react';
import { Link } from 'react-router-dom'
import headerCss from './css/Header.module.css'

const Header = () => {
  return (
    <div className={headerCss.header}>
      <div className="logo">
        <Link to={"/"}>Genify</Link>
      </div>
      <div className="menuBox">
        <ul>
          <li><Link to={"/"}>Home</Link></li>
          <li><Link to={"/songlist"}>Songs</Link></li>
          <li><Link to={"/"}>About</Link></li>
        </ul>
      </div>
    </div>
  );
};

export default Header;