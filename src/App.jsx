
import { Route, Routes } from 'react-router-dom'
import './App.css'
import Header from "./Header"
import Home from './pages/Home'
import PCGames from './component/platform/PCGames'
import Manga from './pages/Manga'
import Anime from './pages/Anime'
function App() {
  return (
    <>
      <Header />

      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/category/:genre' element={<PCGames />} />
        <Route path='/pc' element={<PCGames/>} />
        <Route path='/manga' element={<Manga />}/>
        <Route path='/anime' element={<Anime />}/>
      </Routes>

    </>
  )
}

export default App
