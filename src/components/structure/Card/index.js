import React from 'react';
import './index.css'
import { Link } from 'react-router-dom';

const Card = (props) => {

  const task = props.data;

  return (
    <Link to={`/task/${task._id}`} className="card-out">
      <div className="card-in">
        <div>
          <h3>
            {task.title}
          </h3>
        </div>
        <div>
          <p>{task.details}</p>
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