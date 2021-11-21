import React from 'react';
import { Link } from 'react-router-dom';
import './index.css';

const Header = () => {
  return (
    <header>
      <div className="navButton">
        <Link to="/"><h2>To Do List</h2></Link>
      </div>
      <div className="navButton">
        <Link to="/new"><h2>New Task</h2></Link>
      </div>
    </header>
  )
}

export default Header;