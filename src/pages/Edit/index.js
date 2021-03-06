import React, { useState, useEffect } from 'react'
import { useParams, useNavigate } from 'react-router'
import Api from '../../components/api'
import YouSay from '../../components/structure/YouSay'

const Edit = () => {

  const navigate = useNavigate();

  const [editButton, setAddButton] = useState('');

  const [task, setTask] = useState({
    title: '',
    details: '',
    priority: '',
    done: '',
    deadline: ''
  });

  useEffect(() => {
    getTaskById();
  }, []);

  const { id } = useParams();
  
  const getTaskById = async () => {

    const request = await Api.fetchGetById(id);
    const task = await request.json();
    setTask(task);
  };

  const handleFields = (event) => {

    const taskEdit = { ...task };
    taskEdit[event.target.name] = event.target.value;
    setTask(taskEdit);

    if (event.target.name === 'title') {
      if(!event.target.value) {
        setAddButton('disabled');
      } else {
        setAddButton('');
      };
    };
  };

  const editTask = async (event) => {

    event.preventDefault();
    const request = await Api.fetchPut(task, id);
    const response = await request.json();

    YouSay(response.message);
    if (request.status !== 200) {return};
    navigate(`/task/${id}`);
  };

  if (task.deadline) {
    var deadline = task.deadline.slice(0, 10);
  };

  return (
    <div className="container">
      <div className={"card-out edit " + task.priority}>
        <h1>Edit</h1>
        <form onSubmit={editTask}>
          <input id="title" value={task.title} onChange={handleFields} type="text" placeholder="Task Title" name="title" />
          <input id="details" value={task.details} onChange={handleFields} type="text" placeholder="Enter some details" name="details" />
          <div className="addPriority">
            <h3>Priority: </h3>
            <select id="priority" value={task.priority} onChange={handleFields} type="text" name="priority">
              <option value="Low">Low</option>
              <option value="Normal">Normal</option>
              <option value="High">High</option>
            </select>
          </div>
          <div className="addStatus">
            <h3>Status: </h3>
            <select id="done" value={task.done} type="text" name="done" onChange={handleFields}>
              <option value="To Do">To Do</option>
              <option value="Done">Done</option>
            </select>
          </div>
          <input id="deadline" value={deadline} onChange={handleFields} type="date" placeholder="Task Title" name="deadline" />
          <div className="addTask">
            <button id="addTask" type="submit" disabled={editButton}>Edit</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Edit