import React from 'react';
import './index.css'
import { Link } from 'react-router-dom';

const Card = (props) => {


  const task = props.data;

  if (task.deadline) {
    var deadline = task.deadline.slice(0, 10)
  }
  if (task.details) {
    var details = task.details.slice(0, 40)
  }


  return (
    <div className={"card-out " + task.priority}>
      <div className="card-in">
      <Link to={`/task/${task._id}`}>
        <div>
          <h3>
            {task.title}
          </h3>
        </div>
      </Link>
        <div>
          <p>{details}</p>
        </div>
        <div>
          {task.priority}
        </div>
        <div>
          {task.done}
        </div>
        <div>
          {deadline}
        </div>
      </div>
    </div>
  )
}

export default Card;