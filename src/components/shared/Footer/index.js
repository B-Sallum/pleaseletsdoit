import React from 'react';
import { Link } from 'react-router-dom';
import home from '../img/list.png'
import newTask from '../img/new.png'

const Footer = () => {
  return (
    <footer>
        <Link to="/"><button><img src={home} alt="home" /></button></Link>
        <Link to="/new"><button><img src={newTask} alt="home" /></button></Link>
    </footer>
  )
}

export default Footer;