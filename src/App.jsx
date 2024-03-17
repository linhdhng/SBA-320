import { useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import './App.css'
import Games from './component/Games'
import Header from "./component/Header/Header"
import RecentlyAdded from './pages/RecentlyAdded'
import Trending from './pages/Trending'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header /> 
      <Routes>
        <Route path='/main' element={<Games />} />
        <Route path='/recent'element={<RecentlyAdded />}/>
        <Route path='/trending' element={<Trending />} />
      </Routes>
    </>
  )
}

export default App
