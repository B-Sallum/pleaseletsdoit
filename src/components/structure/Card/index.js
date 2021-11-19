import React from 'react';
import './index.css'
import { Link } from 'react-router-dom';

const Card = (props) => {

  const task = props.data;

  if (task.deadline) {
    var deadline = task.deadline.slice(0, 10)
  }

  return (
    <Link to={`/task/${task._id}`} className={"card-out " + task.priority}>
      <div className="card-in">
        <div>
          <h3>
            {task.title}
          </h3>
        </div>
        <div>
          <p>{task.details.slice(0, 40)}...</p>
        </div>
        <div>
          {task.priority}
        </div>
        <div>
          {task.taskStatus}
        </div>
        <div>
          {deadline}
        </div>

      </div>
    </Link>
  )
}

export default Card;