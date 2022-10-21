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
  const darkColor = '#1e1e1ed6';
  // const lightColor = '#e6f1f900';
  const lightColor = '';

  useEffect(() => {

    let yr = prop.date.ya;
    let mh = prop.date.ma;
    let dy = prop.date.da;

    let phase = getPhaseFromDate(yr, mh, dy);
    let [h1c, h2c, h1color, h2color, radt] = calcStyleFromPh(phase);
    setH1clip(h1c);
    setH2clip(h2c);
    setH1Back(h1color);
    setH2Back(h2color);
    setrad(radt);
  })
  return (
    <div
      className="outermoon"
      style={{
        // transform: `rotateZ(${rad*6}deg) scale(${1+rad*0.07})`
        transform: `scale(${0.90 + rad * 0.03})`
        // 纬度天平动 ±6 º 41' 经度天平动 ±7 º 45'
      }}
    >

      <div className="Moon"
        style={{
          boxShadow: `0 0 ${60 * rad}px 2px #77bbf6`,

        }}
      >

        <div className='sphere1 sphere'
          style={{
            backgroundColor: h1backcolor ? darkColor : lightColor,
            backgroundImage: h1backcolor ? "url(moonimg.webp)" : "url(moonimg.webp)",
            backgroundBlendMode: h1backcolor ? "saturation" : "",
          }}>
          <div className='highlight highlight1'
            style={{
              clipPath: `ellipse(${h1clip}% 50% at 50% 50%)`,
              backgroundColor: h1backcolor ? lightColor : darkColor,
              backgroundImage: h1backcolor ? "url(moonimg.webp)" : ""
            }}
          >

          </div>
        </div>
        <div className='sp2outer'
        >
          <div className='sphere2 sphere'
            style={{
              backgroundColor: h2backcolor ? lightColor : darkColor,
              backgroundImage: h2backcolor ? "url(moonimg.webp)" : ""
            }}>
            <div className='highlight highlight2'
              style={{
                clipPath: `ellipse(${h2clip}% 50% at 50% 50%)`,
                backgroundColor: h2backcolor ? darkColor : lightColor,
                backgroundImage: h2backcolor ? "" : "url(moonimg.webp)"

              }}
            >
            </div>
          </div>
        </div>
      </div>
    </div>)
}
export default Moon