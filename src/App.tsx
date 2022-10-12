import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import {getPhaseFromDate} from "./calc"
import {calcStyleFromPh} from "./calcfromPh"
function App() {
  const [count, setCount] = useState(0);
  const [h1clip,setH1clip] = useState(50);
  const [h2clip,setH2clip] = useState(0);

  let today = new Date();
  let yr = today.getFullYear();
  let mh = today.getMonth() + 1;
  let dy = today.getDate();
  getPhaseFromDate(yr,mh,dy);
  console.log(getPhaseFromDate(yr,mh,dy));

  return (
    <div className="App">
      <div className="Moon">

        <div className='sphere1 sphere'>
          <div className='highlight highlight1'
          style={{clipPath:`ellipse(${h1clip}% 50% at 50% 50%)`}}
          >

          </div>
        </div>
        <div className='sphere2 sphere'>
          <div className='highlight highlight2'
          style={{clipPath:`ellipse(${h2clip}% 50% at 50% 50%)`}}
          >

          </div>
        </div>
      </div>
    </div>
  )
}

export default App
