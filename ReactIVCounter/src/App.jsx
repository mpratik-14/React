import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [counter, setCounter] = useState(0);

  const addValue = () => {
    setCounter(precounter => precounter + 1);
    setCounter(precounter => precounter + 1);
    setCounter(precounter => precounter + 1);
    setCounter(precounter => precounter + 1);
  }

  const removeValue = () =>{
    setCounter(counter - 1);
  }

  return (
    <>
      <h1>React IV counter project</h1>
      <h2>Counter value: {counter}</h2>

      <button
        onClick={addValue}
      >Add Value</button>

      <button
        onClick={removeValue}
      >Remove value Value</button>
    </>
  )
}

export default App
