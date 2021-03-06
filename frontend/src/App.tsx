import React from 'react';
import Main from './components/main/Main';
import { About } from './components/about/About';
import { Slider } from './components/events/Slider';
import { Officers } from './components/officers/Officers';
import { Social } from './components/social/Social';

function App() {
  return (
    <div>
      <Main />
      <About />
      <Slider />
      <Officers />
      <Social />
    </div>
  );
}

export default App;
