import { Routes, Route } from 'react-router-dom'

import Home from './pages/Home/'
import New from './pages/New/'
import Task from './pages/Task/'
import Edit from './pages/Edit/'
import './App.css'

function App() {
  return (
    <div className="appBackground">      
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/new" element={<New/>} />
        <Route path="/task/:id" element={<Task/>} />
        <Route path="/edit/:id" element={<Edit/>} />
      </Routes>
    </div>   
  )
}

export default App