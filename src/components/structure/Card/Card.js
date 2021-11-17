import React from 'react';

const Card = (props) => {

  const task = props.data;

  return (
    <div key={task._id}>
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