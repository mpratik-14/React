import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  let [counter, setCounter] = useState(0);
  // let counter = 5;

  const addValue = () =>{
    // console.log("value added", Math.random());
    setCounter(counter + 1);
    checkLessThan_20()
    console.log(counter);
  }

  const checkLessThan_20 = () => {
    console.log(`inside check less than 20`);
    if(counter >= 20){
      setCounter(counter = 20);
    }
  }

  const checkLessThan_0 = () => {
    console.log(`inside check less than 0`);
    if(counter <= 0){
      console.log(`inside if of 0`);
      setCounter(counter = 0);
    }
  }
  const removeValue = () => {
    setCounter(counter - 1);
    checkLessThan_0()
    console.log(counter);
    
  }
  return (
    <>
      <h1>Chai aur react</h1>
      <h2>Counter value: {counter}</h2>

      <button
      onClick={addValue}>Add value {counter}</button>
      <br /><br />

      <button
      onClick={removeValue}>Remove value {counter}</button>

      <p>footer: {counter}</p>
    </>
  )
}

export default App
