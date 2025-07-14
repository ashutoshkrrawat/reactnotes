import { useCallback, useState, useEffect, useRef } from 'react'


function App() {
  const [length, setLength] = useState(8)
  const [numberAllowed,setNumberAllowed]=useState(false);
  const[characterAllowed,setCharacterAllowed]=useState(false);
  const[password,setPassword]=useState("")
  const passwordref=useRef(null)//useref hook
  
  const passwordGenerator=useCallback(()=>{//we can only pass a function in usecall back
      let pass=""
      let str="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
      if(numberAllowed)
      {
        str+="0123456789"
      }
      if(characterAllowed)
      {
        str+="!@#$%^&*()"
      }

      /* loop for generating random numbers */
      for (let i = 0; i < length; i++) {
          let char=Math.floor(Math.random()*str.length+1)    
          pass+=str.charAt(char)    
      } 
      setPassword(pass)

  },[length, numberAllowed, characterAllowed, setPassword])


  /* function to copy the text */
  const copypasswordtoclipboard=useCallback(()=>{
    passwordref.current?.select();  //here password ref is used so we can give effect to user that the text is copied and we can also check many otheer things using password ref
    passwordref.current?.setSelectionRange(0,3);
    
    window.navigator.clipboard.writeText(password)//as we are executing this is core react therefore we can use the "window" keyword, only this line can also word for copying but 
  },[password])
  useEffect(()=>{
    passwordGenerator()
  },[length, numberAllowed, characterAllowed, passwordGenerator])
  return (
    <>
      <div className='w-full max-w-md mx-auto shadow-md
      rounded-lg px-4 my-8 text-orange-500 bg-gray-700 ' >
        <div className='flex shadow rounded-lg overflow-hidden mb-4'>
          <input type="text"
          value={password}
          className='outline-none w-full py-1 px-3'
          placeholder='password'
           />
           <button onClick={copypasswordtoclipboard} 
           className='outline-none bg-blue-700 text-whitepx-3 py-0.5 shrink-0'>copy</button>
        </div>
        <div className='flex text-sm gap-x-2'>
          <div className='flex items-center gap-x-1'>
            {/* this is the part of length slider */} 
            <input type="range"//This makes it a slider
            min={6}
            max={100}
            value={length}
            className='cursor-pointer'
            onChange={(e)=>{setLength(e.target.value)}}//update state when slider moves
            />
             <label > length:{length}</label>{/* this line display the current val */}
          </div>
          <div className='flex items-center gap-x-1'>
              <input type="checkbox"
                  defaultChecked={numberAllowed}
                  id='numberInput'
                  onChange={()=>{
                    setNumberAllowed((prev)=>!prev)
                  }}              
              /> <label htmlFor="numberInput">Numbers</label>
          </div>
          <div className='flex items-center gap-x-1'>
              <input type="checkbox"
                  defaultChecked={characterAllowed}
                  id='numberInput'
                  onChange={()=>{
                    setCharacterAllowed((prev)=>!prev)
                  }}              
              /> <label htmlFor="numberInput">Characters</label>
          </div>
        </div>
      </div>
    </>
  )
  
}
console.log("message only for testing github changes")
export default App
