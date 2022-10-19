import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import DataSelect from './DateSelect'
import Moon from "./Moon"

function App() {
  let [today, setToday] = useState(new Date());
  // useEffect(()=>{
  //   const interval = setInterval(() => {
  //     let tmp = new Date(today);
  //     tmp.setDate(tmp.getDate() + 1);
  //     setToday(tmp);
  //   }, 1000);
  //   return () => clearInterval(interval);
  // })
  function onDataChange(e: number) {
    let tmp = new Date();
    tmp.setDate(tmp.getDate() + Math.floor(e / 5));
    // console.log(tmp.getDate())
    setToday(tmp);
  }
  return (
    <div className="App">
      {today.toLocaleDateString()}
      <DataSelect onChange={onDataChange}></DataSelect>
      <div className="thmoon">
        <Moon

          date={{
            ya: today.getFullYear(),
            ma: today.getMonth() + 1,
            da: today.getDate()
          }}
        ></Moon>
      </div>

    </div>
  )
}

export default App
