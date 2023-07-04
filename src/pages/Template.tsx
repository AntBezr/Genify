import React, { useState, useEffect } from 'react';
import page from './CssModules/Page.module.css'
import template from './CssModules/Template.module.css'


const Template = () => {

  const [songList, setSongList] = useState()

  return (
    <div className={page.main}>
      <div className={template.search}></div>
      <label htmlFor="search">Find song</label>
      <input type="text" name='search' />
      <div className={template.songsTemplate}>

      </div>
    </div>
  );
};

export default Template;