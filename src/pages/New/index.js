import React, { useState, useEffect } from 'react'
import Messenger from '../../components/structure/Messenger'
import { useNavigate } from 'react-router-dom';
import Api from '../../components/api'
import './index.css'

const New = () => {

  const navigate = useNavigate();

  const addTask = async (event) => {

    event.preventDefault();
  
    const title = event.target.title.value;
    const details = event.target.details.value;
    const priority = event.target.priority.value;
    const taskStatus = event.target.taskStatus.value;
    const deadline = event.target.deadline.value;

    let newTask = {
      title,
      details,
      priority,
      taskStatus,
      deadline
    }

    const request = await Api.fetchPost(newTask);

    const { message } = await request.json();

    console.log(message)

    Messenger(message)

    // try {
    //   const response = await Api.fetchPost(newTask);
    //   console.log(response)
    // }
    // catch (error) {
    //   console.log(error)
    // }

    if (!title) {return}

    navigate('/');

  }

  const [priorityState, setPriority] = useState('Normal');

  const handleChange = (event) => {
    const newPriority = event.target.value;
    setPriority(newPriority)
  }


  return (
    <div className="container">
      <div className={"card-out edit " + priorityState}>
        <h1>Let's Add a Task!</h1>
        <form onSubmit={addTask}>
          <input type="text" placeholder="Task Title" name="title" />
          <input type="text" placeholder="Enter some details" name="details" />
          <select id="priority" defaultValue={priorityState} type="text" name="priority" onChange={handleChange}>
            <option value="Low">Low</option>
            <option value="Normal">Normal</option>
            <option value="High">High</option>
          </select>
          <input type="text" placeholder="'To Do' is Default" name="taskStatus" />
          <input type="date" placeholder="Task Title" name="deadline" />
          <button type="submit">Add</button>
        </form>
      </div>

    </div>
  )

}

export default New;