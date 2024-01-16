import './App.css'
import NavBar from './components/NavBar'
import AllPlayers from './components/AllPlayers'
import OnePlayer from './components/OnePlayer'
import NewPlayerForm from './components/NewPlayerForm'
import { Routes, Route } from 'react-router-dom'

function App() {
  

  return (
    <>
      {" "}
      <main className="main">
        <NavBar />
        <Routes>
          <Route path="/" element={<AllPlayers />} />
          <Route path={`/players/:id`} element={<OnePlayer />} />
        </Routes>
      </main>
      <NewPlayerForm />
    </>
  )
}

export default App
