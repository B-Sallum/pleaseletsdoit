import React from 'react';
import './Card.css'

const Card = (props) => {

  const task = props.data;

  return (
    <div className="card" key={task._id}>
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
    </div>
  )
}

export default Card;