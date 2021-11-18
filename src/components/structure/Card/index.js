import React from 'react';
import './index.css'
import { Link } from 'react-router-dom';

const Card = (props) => {

  const task = props.data;

  return (
    <Link to={`/task/${task._id}`} className="card-out">
      <div className="card-in">
        <div>
          <h1>
            {task.title}
          </h1>
        </div>
        <div>
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

      </div>
    </Link>
  )
}

export default Card;