import React, { useState, useEffect } from 'react'
import { useParams, useNavigate } from 'react-router'
import Api from '../../components/api'

const Edit = () => {

  const navigate = useNavigate();

  const [task, setTask] = useState({
    title: '',
    details: '',
    priority: '',
    taskStatus: '',
    deadline: ''
  });

  useEffect(() => {
    getTaskById();
  }, []);

  const { id } = useParams();

  const getTaskById = async () => {

    const request = await Api.fetchGetById(id);
    const task = await request.json();
    setTask(task)

  };

  const [editButton, setButton] = useState('disabled');

  const handleFields = (event) => {

    const taskEdit = { ...task };

    taskEdit[event.target.name] = event.target.value;

    setTask(taskEdit);

    if (event.target.value) {
      setButton('')
    } else {
      setButton('disabled')
    }

  }


  const editTask = async (event) => {

    event.preventDefault();
    const request = await Api.fetchPut(task, id);
    const response = await request.json();
    alert(response.message)

    if (request.status !== 200) {return}   

    navigate(`/task/${id}`)

  };

  if (task.deadline) {
    var deadline = task.deadline.slice(0, 10)
  }

  // const [addButton, setButton] = useState('disabled');

  // const changeButton = (event) => {
  //   if (event.target.value) {
  //     setButton('')
  //   } else {
  //     setButton('disabled')
  //   }
  // }

  return (
    <div className="container">
      <div className={"card-out edit " + task.priority}>
        <h1>Edit</h1>
        <form onSubmit={editTask}>
          <input id="title" value={task.title} onChange={handleFields} type="text" placeholder="Task Title" name="title" />
          <input id="details" value={task.details} onChange={handleFields} type="text" placeholder="Enter some details" name="details" />
          <select id="priority" value={task.priority} onChange={handleFields} type="text" name="priority">
            <option value="Low">Low</option>
            <option value="Normal">Normal</option>
            <option value="High">High</option>
          </select>
          <input id="taskStatus" value={task.taskStatus} onChange={handleFields} type="text" placeholder="'To Do' is Default" name="taskStatus" />
          <input id="deadline" value={deadline} onChange={handleFields} type="date" placeholder="Task Title" name="deadline" />
          <div className="addTask">
            <button id="addTask" type="submit" disabled={editButton}>Edit</button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Edit
