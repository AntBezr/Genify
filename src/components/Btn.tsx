import React from 'react';
import btn from './css/Button.module.css'

type ProfileProps = {
  btnText: string
}

const Btn = ({ btnText }: ProfileProps) => {
  return (
    <button className={btn.mainBtn}>{btnText}</button>
  );
};

export default Btn;