import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

const Footer = () => {
  return (
    <nav className="footer">
      <Link to="/"><h2>To Do List</h2></Link>
      <Link to="/new"><h2>To Do List</h2></Link>
    </nav>
  )
}

export default Footer;