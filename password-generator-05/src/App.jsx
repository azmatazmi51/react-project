import { useCallback, useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [length, setLength] = useState(8)
  const [numberAllowed, setNumberAllowed] = useState(false)
  const [charAllowed, setCharAllowed] = useState(false)
  const [password, setPassword] = useState("")
  const passwordRef = useState(null)

  const passwordGenerator = useCallback( ()=>{
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    let num = "0123456789";
    let special = "!@#$%^&*()_+"
    let password = ""
    if(numberAllowed) str += num
    if(charAllowed) str += special
    for(let i = 1; i <= length; i++){
      let random = Math.floor(Math.random() * str.length + 1)
      password += str.charAt(random)
    }
    setPassword(password)
  }, [length, numberAllowed, charAllowed, setPassword])

  const copyPassword = useCallback(()=> {
    passwordRef.current?.select()
    navigator.clipboard.writeText(password)
  }, [password])

  useEffect( ()=> {
    passwordGenerator()
  }, [length, numberAllowed, charAllowed, passwordGenerator])

  return (
    <>
    <div className="w-full max-w-md mx-auto shadow-md rounded-1g px-4 py-3 my-8 •bg-gray-800 text-orange-500">
      <h1 className=' text-white text-center'>Password generator</h1>
      <div className="flex shadow rounded-lg overflow-hidden mb-4">
      <input
        type="text"
        value={password}
        className="out line-none w-full py-1 px-up" placeholder="Password"
      readonly
      ref={passwordRef}
      />
      <button className='outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0'
      onClick={copyPassword}>Copy</button>
      </div>
      <div className=' flex text-sm gap-x-2'>
        <div className='flex items-center gap-x-1'>
          <input
          type="range"
          min={6}
          max={100}
          value={length}
          className='cursor-pointer'
          onChange={(e) => { setLength(e.target.value) }}></input>
          < label>Length: {length}</label>
        </div>
      </div>
      <div className="flex items-center gap-x-1">
          <input
          type="checkbox"
          defaultChecked={numberAllowed}
          id="numberInput"
          onChange={() => setNumberAllowed(prev => !prev)}></input>
        </ div>
        < label htmlFor="numberInput">Numbers</label>
      <div className="flex items-center gap-x-1">
          <input
          type="checkbox"
          defaultChecked={charAllowed}
          id="characterInput"
          onChange={() => setCharAllowed(prev => !prev)}/>
        </ div>
        < label htmlFor="characterInput">Characters</label>
    </div>
    </>
  )
}

export default App
