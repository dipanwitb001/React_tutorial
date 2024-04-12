import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/Card'

function App() {
  const [count, setCount] = useState(0)

  let myObj = {
    usernames: "dipnwita",
    age:21
  }

  return (
    <>
      <h1 className='bg-green-400 text-black p-4 mb-4'>Tailwind test</h1>

      {/* passing of value from one components fr */}
      {/* <Card username="chaiaurcode" someObj = {myObj}/> */}
      <Card username="chaiaurcode" btnText="click me"/>
      <Card username="dipanwita" btnText="visit me"/>
      <Card username="disha" />
       

      </>
   )
} 

export default App
