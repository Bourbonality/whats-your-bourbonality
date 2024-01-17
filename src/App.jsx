import React, { useState } from 'react'
import { AgeVerification, Landing } from 'components'
import { Quiz } from 'containers'

import './App.css';

const App = () => {
  const [started, setStarted] = useState(false)
  const [verified, setVerified] = useState(false)

  return (
    <div className="App">
      <AgeVerification
        verified={verified}
        setVerified={setVerified}
      />
      <Landing
        verified={verified}
        started={started}
        setStarted={setStarted}
      />
      <Quiz />
    </div>
  );
}

export default App;
