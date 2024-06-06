import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(10)

  const addCounter = () => {
    if(count >= 20) return;
    else setCount(count + 1)
  }

  const RemoveCounter = () => {
    if(count <= 0) return;
    else setCount(count - 1)
  }

  return (
    <>
      <h1>Counter value is: {count}</h1>
      <button onClick={addCounter}>
        Add Counter {count}
      </button>
      <br />
      <button onClick={RemoveCounter}>
        Remove Counter {count}
      </button>
    </>
  )
}

export default App
