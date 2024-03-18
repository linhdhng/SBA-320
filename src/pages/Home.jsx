import RecentlyAdded from './RecentlyAdded'
import Trending from './Trending'
import GameCarousel from '../component/hero/GameCarousel'
import SignIn from '../component/hero/SignIn'
import Header from "../Header"
import { Link } from 'react-router-dom'
function Home() {
  return (
    <>
    <Header/>
        <div className='hero'>
            <GameCarousel />
            <SignIn />
        </div>
        <div className='section2'>
            <Trending/>
            <RecentlyAdded />
        </div>
    </>
  )
}

export default Home