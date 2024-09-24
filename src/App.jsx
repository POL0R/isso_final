import React from "react"
import Scoreboard from "./Components/Scoreboard"
import Navbar from "./Components/Navbar"
import Leaderboard from "./Components/Leaderboard"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Loading from "./Components/Loading"

function App() {
  return (
    <div className="mainApp">
      <BrowserRouter>
      
        <Navbar />
        <Routes>
        <Route path='/' element={<Loading />} />
          <Route path="/scoreboard" element={<Scoreboard />} />
          <Route path="/leaderboard" element={<Leaderboard />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
