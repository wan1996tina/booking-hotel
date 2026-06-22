import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
// layouts
import NavBar from './components/layout/NavBar'
// pages
import HomePage from './pages/HomePage/HomePage'

function App() {
  return (
    <div className="relative">
      <NavBar></NavBar>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
