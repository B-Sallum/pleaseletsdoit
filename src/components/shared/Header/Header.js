import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
  return (
    <nav className="header">
      <Link to="/"><h2>To Do List</h2></Link>
      <Link to="/new"><h2>To Do List</h2></Link>
    </nav>
  )
}

export default Header;