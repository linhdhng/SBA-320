
import { Route, Routes } from 'react-router-dom'
import './App.css'
import GameCarousel from './component/hero/GameCarousel'
import Header from "./component/Header"
import RecentlyAdded from './pages/RecentlyAdded'
import Trending from './pages/Trending'
import SignIn from './component/hero/SignIn'

function App() {
  return (
    <>
      <Header />
      <div className='hero'>
        <GameCarousel />
        <SignIn />
      </div>
      <Routes>
        <Route path='/' Component={<GameCarousel/>}/>
      </Routes>
      <div className='section2'>
        <Trending/>
        <RecentlyAdded />
      </div>
      
    </>
  )
}

export default App
