import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  // usestate hook is use to propagate the change to the UI
  // setCounter is a function 
  let [counter , setCounter] = useState(15)
  // let counter = 5


  const addValue = () =>{
    // console.log('value added',Math.random())
    if(counter < 20)
    counter = counter + 1;
    console.log('clicked on add',counter);

    setCounter(counter)
  }

  const decreaseValue = () =>{
    if(counter > 0)
    setCounter(counter-1)
    console.log('clicked on decrease',counter);
  }
  return (
   <>
    <h1>Chai aur react</h1>
    <h2>Counter value : {counter}</h2>

    <button
    onClick={addValue}>Add value</button>
    <br />
    <button onClick={decreaseValue}>Decrease value</button>
   </>
  )
}

export default App
