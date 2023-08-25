import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Chicken from './Chicken'

function App() {
  const [count, setCount] = useState(0)

  return (
    <Chicken/>
  )
}

export default App
