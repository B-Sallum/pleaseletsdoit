import React from 'react'
import './New.css'
import Api from '../../components/api/api'

const New = () => {

  const addTask = async (event) => {

    event.preventDefault();

    console.log(event.target.title.value)
  
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

    await Api.fetchPost(newTask);  

  }

  return (
    <div className="container">
      <h1>Let's Add a Task!</h1>
      <form onSubmit={addTask}>
        <input type="text" placeholder="Task Title" name="title" />
        <input type="text" placeholder="Enter some details" name="details" />
        <input type="text" placeholder="Low, Normal (default) or High Priority?" name="priority" />
        <input type="text" placeholder="'To Do' is Default" name="taskStatus" />
        <input type="date" placeholder="Task Title" name="deadline" />
        <button type="submit">Add</button>
      </form>
    </div>
  )

}

export default New;