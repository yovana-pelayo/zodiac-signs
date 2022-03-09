import React from 'react';
import { signs } from '../../data';
import Sign from '../Signs/Sign';
// import './Main.css';

export default function Main() {
  return (
    <div className="app">
      {signs.map((sign) => (
        <Sign key={sign.name} name={sign.name} dates={sign.dates} />
      ))}
    </div>
  );
}
