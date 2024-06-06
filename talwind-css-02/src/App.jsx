import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './Card'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1 className='bg-green font-bold underline mb-4'>Talwind Test</h1>
      <Card username="Sara" designation="Develpoer"></Card>
      <Card username="Taylor" designation="Tester"></Card>
    </>
  )
}

export default App
