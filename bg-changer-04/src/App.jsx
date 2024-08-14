import { useState } from 'react'

function App() {
  const [color, setColor] = useState("blue")

  return (
    <>
      <div className="w-full h-screen duration-200"
      style={{backgroundColor: color}}>
        <div className='fixed flex-wrap justify-center bottom-12 inset-x-0 px-2'>
          <button className='outline-none px-4 py-1 rounded-full text-white shadow-lg'
          style={{backgroundColor: "red"}}
          onClick={ ()=> setColor('red')}
          >Red</button>
          <button className='outline-none px-4 py-1 rounded-full text-white shadow-lg'
          style={{backgroundColor: "blue"}}
          onClick={ ()=> setColor('blue')}
          >Blue</button>
          <button className='outline-none px-4 py-1 rounded-full text-white shadow-lg'
          style={{backgroundColor: "green"}}
          onClick={ ()=> setColor('green')}
          >Green</button>
        </div>
      </div>
    </>
  )
}

export default App
