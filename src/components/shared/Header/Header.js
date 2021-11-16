import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
  return (
    <nav>
      <Link to="/"><h2 className="navTitle">To Do List</h2></Link>
      <Link to="/new"><h2 className="navTitle">To Do List</h2></Link>
    </nav>
  )
}

export default Header;