import { useState } from 'react'
import Games from './component/Games'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Games />
    </>
  )
}

export default App
