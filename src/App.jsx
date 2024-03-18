
import { Route, Routes } from 'react-router-dom'
import './App.css'
import GameCarousel from './component/GameCarousel'
import Header from "./component/Header"
import RecentlyAdded from './pages/RecentlyAdded'
import Trending from './pages/Trending'
import SignIn from './component/SignIn'

function App() {
  return (
    <>
      <Header />
      <div className='hero'>
        <GameCarousel />
        <SignIn />
      </div>
      <RecentlyAdded />
      <Trending />
    </>
  )
}

export default App
