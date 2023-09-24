import { useState } from 'react'
import './App.css'
import Home from './Components/Home/Home'
import Header from './Components/Header/Header'
import Slider from './Components/Slider/simpleSlider'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header />
      <Home />
      <hr />
      <Slider />
      
    </>
  )
}

export default App
