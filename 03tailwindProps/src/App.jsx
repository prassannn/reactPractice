import { useState } from 'react'
import './App.css'
import Card from './component/Card'

function App() {
  const [count, setCount] = useState(0)
  return (
    <>
         <h1 class="text-cyan-300 bg-yellow-900 rounded-md font-bold underline mb-10">
          Hello world!
        </h1>
        <Card picture = "https://images.pexels.com/photos/15723344/pexels-photo-15723344/free-photo-of-couple-of-tourists-with-arms-spread-at-the-edge-of-a-volcanic-crater-with-a-lake.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load" username = "Nature Retreat" btnText = "visit" paragraph = "Explore the beauty of untouched landscapes. Perfect for a weekend getaway."/>
        <Card picture ="https://images.pexels.com/photos/27100608/pexels-photo-27100608/free-photo-of-alpine-ibexes-walking-on-a-rocky-hill.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"username = "delight" btnText = "hifi" paragraph = "test123."/>

    </>
  )
}

export default App
