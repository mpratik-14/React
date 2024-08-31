import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  let [counter, setCounter] = useState(0)

  // let counter = 0;
  const addValue = () => {
    if(counter >= 20){
      setCounter = 20
    } else{
        counter++;
        setCounter(counter)
        console.log(counter)
      }
    }

  const removeValue = () => {
    if(counter <= 0){
      setCounter = 0
    } else{
      counter--;
      setCounter(counter)
      console.log(counter)
    }
  }
  return (
    <>
      <h1>Chai aur react</h1>
      <h2>Counter value : {counter}</h2>

      <button
      onClick={addValue}>Add value {counter}</button>
      <br />
      <button
        onClick={removeValue}>Remove value {counter}</button>
      <p>{counter}</p>
    </>
  )
}

export default App
