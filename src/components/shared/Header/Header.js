import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
  return (
    <nav>
      <Link to="/"><h1>To Do List</h1></Link>
      <Link to="/new"><h2>New task</h2></Link>
    </nav>
  )
}

export default Header;