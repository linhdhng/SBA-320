import { useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import './App.css'
import GameCarousel from './component/GameCarousel'
import Header from "./component/Header"
import RecentlyAdded from './pages/RecentlyAdded'
import Trending from './pages/Trending'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header />
       
        <GameCarousel />
        <RecentlyAdded />
        <Trending />

      {/* <Routes>
        <Route path='/main' element={<GameCarousel />} />
        <Route path='/main'element={<RecentlyAdded />}/>
        <Route path='/main' element={<Trending />} />
      </Routes> */}
    </>
  )
}

export default App
