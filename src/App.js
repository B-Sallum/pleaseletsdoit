import { Routes, Route } from 'react-router-dom';

import Header from './components/shared/Header/Header';
import Home from './pages/Home/Home';
import New from './pages/New/New';

function App() {
  return (
    <div className="appBackground">
    <Header/>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/new" element={<New/>} />
      </Routes>
    </div>   
  );
}

export default App;