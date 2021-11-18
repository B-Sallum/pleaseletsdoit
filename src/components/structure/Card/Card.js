import React from 'react';
import './Card.css'
import { Link } from 'react-router-dom';

const Card = (props) => {

  const task = props.data;

  return (
    <Link to={`/task/${task._id}`} className="card">
      <div>
        <div>
          <h1>
            {task.title}
          </h1>
        </div>
        <div>
          {task._id}
          {task.details}
        </div>
        <div>
          {task.priority}
        </div>
        <div>
          {task.taskStatus}
        </div>
        <div>
          {task.deadline}
        </div>
        <div>
          <p>Created at {task.date}</p>
        </div>

      </div>
    </Link>
  )
}

export default Card;