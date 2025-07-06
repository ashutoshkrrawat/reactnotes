import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  /*hooks*/

  let[counter, setCounter]=useState(15) /* hooks */
    // let counter=5
    const addValue=()=>{
      console.log("clicked",counter);
      counter=counter+1
      setCounter(counter)
    }
    const removeValue=()=>{
      console.log("clicked",counter);
      counter=counter-1
      setCounter(counter)
    }
  return (
    <>
      <h1>me and who {counter}</h1>
      <h2>counter value: {counter}</h2>
      <button 
      onClick={addValue}
      >add value {counter}</button>
      <br />
      <button
      onClick={removeValue}
      >remove value {counter}</button>
    </>
  )
}

export default App
