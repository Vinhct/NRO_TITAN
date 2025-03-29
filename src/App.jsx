import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css'

// Pages
import Home from './pages/Home'
import Game from './pages/Game'
import Character from './pages/Character'
import Leaderboard from './pages/Leaderboard'
import Characters from './pages/Characters'
import Timeline from './pages/Timeline'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/game" element={<Game />} />
        <Route path="/character" element={<Character />} />
        <Route path="/leaderboard" element={<Leaderboard />} />
        <Route path="/characters" element={<Characters />} />
        <Route path="/timeline" element={<Timeline />} />
      </Routes>
    </Router>
  )
}

export default App
