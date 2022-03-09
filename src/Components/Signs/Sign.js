import React from 'react';
import './Signs.css';
// import { zodiac } from '../data';
export default function Sign(props) {
  return (
    <div className="sign">
      <img src={`${process.env.PUBLIC_URL}/images/${props.name}.webp`} />
      <span>{props.name}</span>
      <span>{props.dates}</span>
    </div>
  );
}

//Sign is the comp
