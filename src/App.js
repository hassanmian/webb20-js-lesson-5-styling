import React from 'react'
import ButtonCSS from './components/ButtonCSS'
import ButtonModule from './components/ButtonModule'
import ButtonSCSS from './components/ButtonSCSS'

function App() {
  return (
    <div>
      <button>Simple Button</button>
      <ButtonCSS />
      <ButtonSCSS />
      <ButtonModule />
      <button className="btn">Should not be green</button>
    </div>
  );
}

export default App;
