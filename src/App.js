import { Routes, Route } from 'react-router-dom';

import Home from './pages/Home/Home';
import New from './pages/New/New';
import './App.css'

function App() {
  return (
    <div className="appBackground">      
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/new" element={<New/>} />
      </Routes>
    </div>   
  );
}

export default App;