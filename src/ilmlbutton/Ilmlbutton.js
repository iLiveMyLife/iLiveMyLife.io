import React from 'react';
import './Ilmlbutton.css';

const Ilmlbutton = ({ text, className='btn1', onClick=null }) => {
  return (
    <button className={`btnHover ${className}`} onClick={onClick}>
      {text}
    </button>
  );
};

export default Ilmlbutton;
