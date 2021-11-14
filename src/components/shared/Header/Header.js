import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
  return (
    <nav>
      <Link to="/"><h2 className="navTitle">To Do List</h2></Link>
      <h2>New task</h2>
    </nav>
  )
}

export default Header;