import React from 'react';
import './index.css';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer>
      <div className="navButton">
        <Link to="/new"><h2>New Task</h2></Link>
      </div>
    </footer>
  )
}

export default Footer;