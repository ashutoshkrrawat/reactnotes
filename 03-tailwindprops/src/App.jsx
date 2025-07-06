import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/Card'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1 className="bg-green-400 text-black p-4 rounded-xl">
        Hello Tailwind!
      </h1>

      {/* now we can change the name of the card according to us using props*/}
       <Card username="ansh" />
       <Card username="ashutosh" />
        
    </>
  )
}

export default App
