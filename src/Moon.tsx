import { useEffect, useState } from "react";
import { getPhaseFromDate } from "./calc"
import { calcStyleFromPh } from "./calcfromPh";
import "./Moon.css"
function Moon(prop: {
  date: {
    ya: number,
    ma: number,
    da: number
  }
}) {
  const [h1clip, setH1clip] = useState(50);
  const [h2clip, setH2clip] = useState(0);
  const [h1backcolor, setH1Back] = useState(true);
  const [h2backcolor, setH2Back] = useState(false);

  useEffect(() => {

    let yr = prop.date.ya;
    let mh = prop.date.ma;
    let dy = prop.date.da;
    let phase = getPhaseFromDate(yr, mh, dy);
    let [h1c, h2c, h1color, h2color] = calcStyleFromPh(phase);
    setH1clip(h1c);
    setH2clip(h2c);
    setH1Back(h1color);
    setH2Back(h2color);
  })
  return (<div className="Moon">

    <div className='sphere1 sphere'
      style={{ backgroundColor: h1backcolor ? '#303030' : '#e8e8e8' }}>
      <div className='highlight highlight1'
        style={{
          clipPath: `ellipse(${h1clip}% 50% at 50% 50%)`,
          backgroundColor: h1backcolor ? '#e8e8e8' : '#303030'
        }}
      >

      </div>
    </div>
    <div className='sp2outer'>
      <div className='sphere2 sphere'
        style={{ backgroundColor: h2backcolor ? '#e8e8e8' : '#303030' }}>
        <div className='highlight highlight2'
          style={{
            clipPath: `ellipse(${h2clip}% 50% at 50% 50%)`,
            backgroundColor: h2backcolor ? '#303030' : '#e8e8e8'
          }}
        >
        </div>
      </div>
    </div>

  </div>)
}
export default Moon