import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Home from "./pages/Home.jsx"
import Detail from "./pages/Detail.jsx"
import './App.css'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/detail/:index" element={<Detail />} />
      </Routes>
    </Router>
  )
}

export default App