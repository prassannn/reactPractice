import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const addValue = ()=>
    {
      if (count < 20){
      setCount(count +1)
      }else{
        console.log("maximun value rich")
      }
    }
  const reduceValue = ()=>
    {
      if(count>0){
      setCount(count -1)
      }else{
        console.log("cannot reduce less than 0")
      }
    }


  return (
    <>
      <div>
        <h1>hello world</h1>
        <h2>counter value:{count}</h2>
        <button
        onClick={addValue}>increase</button>
        <br />
        <button
        onClick={reduceValue}>decrease</button>
      </div>
    </>
  )
}

export default App
