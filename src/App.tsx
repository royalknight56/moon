import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <div className="Moon">

        <div className='sphere1 sphere'>
          <div className='highlight highlight1'>

          </div>
        </div>
        <div className='sphere2 sphere'>
          <div className='highlight highlight2'>

          </div>
        </div>
      </div>
    </div>
  )
}

export default App
