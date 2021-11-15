import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

const Footer = () => {
  return (
    <nav>
      <Link to="/"><h2 className="footer">To Do List</h2></Link>
      <h2>New task</h2>
    </nav>
  )
}

export default Footer;