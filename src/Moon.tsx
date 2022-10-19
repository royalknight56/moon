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
  const [rad, setrad] = useState(0);
  const darkColor = '#00121f';
  const lightColor = '#e6f1f9';
  useEffect(() => {

    let yr = prop.date.ya;
    let mh = prop.date.ma;
    let dy = prop.date.da;
    
    let phase = getPhaseFromDate(yr, mh, dy);
    let [h1c, h2c, h1color, h2color,radt] = calcStyleFromPh(phase);
    setH1clip(h1c);
    setH2clip(h2c);
    setH1Back(h1color);
    setH2Back(h2color);
    setrad(radt);
  })
  return (<div className="Moon"
  style={{
    boxShadow: `0 0 ${60*rad}px 2px #77bbf6`,
  }}
  >

    <div className='sphere1 sphere'
      style={{ backgroundColor: h1backcolor ? darkColor : lightColor }}>
      <div className='highlight highlight1'
        style={{
          clipPath: `ellipse(${h1clip}% 50% at 50% 50%)`,
          backgroundColor: h1backcolor ? lightColor : darkColor
        }}
      >

      </div>
    </div>
    <div className='sp2outer'>
      <div className='sphere2 sphere'
        style={{ backgroundColor: h2backcolor ? lightColor : darkColor }}>
        <div className='highlight highlight2'
          style={{
            clipPath: `ellipse(${h2clip}% 50% at 50% 50%)`,
            backgroundColor: h2backcolor ? darkColor : lightColor
          }}
        >
        </div>
      </div>
    </div>

  </div>)
}
export default Moon