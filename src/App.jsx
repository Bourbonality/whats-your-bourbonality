import React, { useState } from 'react'
import { Landing } from './components'
import { Quiz } from './containers'

import './App.css';

const App = () => {
  const [started, setStarted] = useState(false)

  return (
    <div className="App">
      <Landing
        started={started}
        setStarted={setStarted}
      />
      <Quiz />
    </div>
  );
}

export default App;
