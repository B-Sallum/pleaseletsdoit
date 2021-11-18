import { Routes, Route } from 'react-router-dom';

import Home from './pages/Home/Home';
import New from './pages/New/New';
import Task from './pages/Task/Task'
import './App.css'

function App() {
  return (
    <div className="appBackground">      
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/new" element={<New/>} />
        <Route path="/task/:id" element={<Task/>} />
      </Routes>
    </div>   
  );
}

export default App;