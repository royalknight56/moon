import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import { getPhaseFromDate } from "./calc"
import { calcStyleFromPh } from "./calcfromPh"
import DataSelect from './DateSelect'
let testph = 0.6;
let today = new Date();
function App() {
  const [h1clip, setH1clip] = useState(50);
  const [h2clip, setH2clip] = useState(0);
  const [h1backcolor, setH1Back] = useState(true);
  const [h2backcolor, setH2Back] = useState(false);

  useEffect(() => {

    let yr = today.getFullYear();
    let mh = today.getMonth() + 1;
    let dy = today.getDate();
    let phase = getPhaseFromDate(yr, mh, dy);
    let [h1c, h2c, h1color, h2color] = calcStyleFromPh(phase);
    setH1clip(h1c);
    setH2clip(h2c);
    setH1Back(h1color);
    setH2Back(h2color);

    const interval = setInterval(() => {

      // testph += 0.01;
      // if (testph > 1) { testph = 0 };
      today.setDate(today.getDate() + 1);
      let yr = today.getFullYear();
      let mh = today.getMonth() + 1;
      let dy = today.getDate();
      let phase = getPhaseFromDate(yr, mh, dy);
      let [h1c, h2c, h1color, h2color] = calcStyleFromPh(phase);
      setH1clip(h1c);
      setH2clip(h2c);
      setH1Back(h1color);
      setH2Back(h2color);

    }, 1000);
    return () => clearInterval(interval);
  })

  return (
    <div className="App">
      {today.toLocaleDateString()}
      <DataSelect ></DataSelect>
      <div className="Moon">

        <div className='sphere1 sphere'
          style={{ backgroundColor: h1backcolor ? '#666666' : '#e8e8e8' }}>
          <div className='highlight highlight1'
            style={{
              clipPath: `ellipse(${h1clip}% 50% at 50% 50%)`,
              backgroundColor: h1backcolor ? '#e8e8e8' : '#666666'
            }}
          >

          </div>
        </div>
        <div className='sp2outer'>
          <div className='sphere2 sphere'
            style={{ backgroundColor: h2backcolor ? '#e8e8e8' : '#666666' }}>
            <div className='highlight highlight2'
              style={{
                clipPath: `ellipse(${h2clip}% 50% at 50% 50%)`,
                backgroundColor: h2backcolor ? '#666666' : '#e8e8e8'
              }}
            >
            </div>
          </div>
        </div>

      </div>
    </div>
  )
}

export default App
