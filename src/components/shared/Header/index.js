import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header>
      <div>
        <Link to="/"><button>To Do List</button></Link>
      </div>
      <div>
        <Link to="/new"><button>New Task</button></Link>
      </div>
    </header>
  )
}

export default Header;