import React from 'react'
import PrimaryButton from './components/Button/PrimaryButton'
import SecondayButton from './components/Button/SecondayButton'
import ButtonCSS from './components/ButtonCSS'
import ButtonModule from './components/ButtonModule'
import ButtonSCSS from './components/ButtonSCSS'
import PrimaryContainer from './components/Container/PrimaryContainer'
import SecondaryContainer from './components/Container/SecondaryContainer'

function App() {
  return (
    <div>
      <button>Simple Button</button>
      <ButtonCSS />
      <ButtonSCSS />
      <ButtonModule />
      <button className="btn">Should not be green</button>
      <br/>
      <PrimaryButton />
      <SecondayButton />
      <PrimaryContainer />
      <SecondaryContainer />
    </div>
  );
}

export default App;
