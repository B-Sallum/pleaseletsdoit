import React from 'react'
import './New.css'

const API_URL = 'http://localhost:3002';

const addTask = async () => {

  

  // const request = new Request(

  //   API_URL,

  //   {
  //     method: "POST",
  //     body: JSON.stringify({
  //       title: 
  //     })
  //   }


  // )
}

const New = () => {

  return (
    <div className="container">
      <h1>Let's Add a Task!</h1>
      <form>
        <input type="text" placeholder="Task Title" name="title" />
        <input type="text" placeholder="Enter some details" name="details" />
        <input type="text" placeholder="Low, Normal (default) or High Priority?" name="priority" />
        <input type="text" placeholder="'To Do' is Default" name="taskStatus" />
        <input type="date" placeholder="Task Title" name="title" />
        <button onClick={addTask()}>Add</button>
      </form>
    </div>
  )

}

export default New;