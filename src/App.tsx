import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import DataSelect from './DateSelect'
import Moon from "./Moon"

function App() {
  let [today,setToday] = useState(new Date());
  useEffect(()=>{
    const interval = setInterval(() => {
      // today.setDate(today.getDate() + 1)
      let tmp = new Date(today);
      tmp.setDate(tmp.getDate() + 1);
      setToday(tmp);
      // console.log(today.getDate())
      // today.setDate(today.getDate() + 1);

    }, 1000);
    return () => clearInterval(interval);
  })

  return (
    <div className="App">
      {today.toLocaleDateString()}
      <DataSelect ></DataSelect>
      <Moon
        date={{
          ya: today.getFullYear(),
          ma: today.getMonth() + 1,
          da: today.getDate()
        }}
      ></Moon>
    </div>
  )
}

export default App
