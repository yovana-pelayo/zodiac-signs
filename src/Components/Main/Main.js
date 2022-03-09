import React from 'react';
import { signs } from '../../data';
import Sign from '../Signs/Sign';
import background from '../../background.webp';
// import '../Main.css';

export default function Main() {
  return (
    <div className="app" style={{ backgroundImage: `url(${background})` }}>
      {signs.map((sign) => (
        <Sign key={sign.name} name={sign.name} dates={sign.dates} />
      ))}
    </div>
  );
}
//Main function is creating a div with className of app. Importing a background image. Sign is one of the zodiac signs being rendering to the page. With the individual Sign comes the properties attached to the Sign.

//Understanding imports
// signs importing the data properties
//Sign the component Sign that carries all that.. one of these imports is not necessary?

//background image is now displaying but it threw everything off. I need to work on my paths or need clarification on why I couldn't pull from my image tab?
