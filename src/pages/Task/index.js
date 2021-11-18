import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Api from '../../components/api/'
import './index.css'

const Task = () => {

  const [task, setTask] = useState({});

  useEffect(() => {

    getTaskById();

  }, []);

  const { id } = useParams();

  // const params = useParams();
  // const id = params.id;

  const getTaskById = async () => {

    const request = await Api.fetchGetById(id);

    const taskId = await request.json();

    setTask(taskId)
  }

  return (
    <div className="details">
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
  )
}

export default Task
