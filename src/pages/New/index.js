import React, { useState, useEffect } from 'react'
import YouSay from '../../components/structure/YouSay'
import { useNavigate } from 'react-router-dom'
import Api from '../../components/api'
import './index.css'

const New = () => {

  const navigate = useNavigate();

  const addTask = async (event) => {

    event.preventDefault();
  
    const title = event.target.title.value;
    const details = event.target.details.value;
    const priority = event.target.priority.value;
    const done = event.target.done.value;
    const deadline = event.target.deadline.value;
    let newTask = {
      title,
      details,
      priority,
      done,
      deadline
    }
    const request = await Api.fetchPost(newTask);
    const { message } = await request.json();
    YouSay(message);
    navigate('/');
  };

  const [priorityState, setPriority] = useState('Normal');
  const handleChange = (event) => {
    const newPriority = event.target.value;
    setPriority(newPriority)
  }

  const [addButton, setButton] = useState('disabled');
  const changeButton = (event) => {

    if (event.target.value) {
      setButton('')
    } else {
      setButton('disabled')
    }
  }

  return (
    <div className="container">
      <div className={"card-out edit " + priorityState}>
        <h1>Let's Add a Task!</h1>
        <form onSubmit={addTask}>
          <input type="text" placeholder="Task Title" name="title" onChange={changeButton} />
          <input type="text" placeholder="Enter some details" name="details" />
          <div className="addPriority">
            <h3>Priority: </h3>
            <select id="priority" defaultValue={priorityState} type="text" name="priority" onChange={handleChange}>
              <option value="Low">Low</option>
              <option value="Normal">Normal</option>
              <option value="High">High</option>
            </select>
          </div>
          <div className="addStatus">
            <h3>Status: </h3>
            <select id="done" defaultValue="To Do" type="text" name="done">
              <option value="To Do">To Do</option>
              <option value="Done">Done</option>
            </select>
          </div>
          <input type="date" placeholder="Task Title" name="deadline" />
          <div className="addTask">
            <button id="addTask" type="submit" disabled={addButton}>Add</button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default New;