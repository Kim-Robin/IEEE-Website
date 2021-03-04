import React from 'react';
import Main from './components/main/Main';
import { Slider } from './components/events/Slider';
import { Officers } from './components/officers/Officers';
import { Social } from './components/social/Social';


function App() {
  return (
    <div>
      <Main />
      <Slider />
      <Officers />
      <Social />
    </div>
  );
}

export default App;
