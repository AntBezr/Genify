import React from 'react';
import page from './CssModules/Page.module.css'
import landing from './CssModules/landing.module.css'
import Button from '../components/Btn'
import { Link } from 'react-router-dom';
import GetGenres from '../components/GetGenres';




const Landing = () => {
  return (
    <div className={page.main}>
      <div className={landing.heroBanner}>

        <div className={landing.insipiringText}>
          Stop just listen to music! Start to feel and understand it with Genify!
        </div>
        <div><Button btnText={'Start Now'} /></div>
      </div>

      <div className={landing.ganres}>
        <GetGenres />
        <Link to={'/'}><div className={landing.ganresBox}><h2>Rock</h2></div></Link>
        <Link to={'/'}><div className={landing.ganresBox}><h2>Pop</h2></div></Link>
        <Link to={'/'}><div className={landing.ganresBox}><h2>Rep</h2></div></Link>
        <Link to={'/'}><div className={landing.ganresBox}><h2>Latin</h2></div></Link>

      </div>
    </div>
  );
};

export default Landing;