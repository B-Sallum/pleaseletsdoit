import React, { useEffect, useState } from 'react'
import { useParams, useNavigate, Link } from 'react-router-dom'
import Api from '../../components/api/'
import './index.css'
import YouSay from '../../components/structure/YouSay'

const Task = () => {

  const navigate = useNavigate();

  const [task, setTask] = useState({});

  useEffect(() => {
    getTaskById();
  }, []);

  const { id } = useParams();

  const getTaskById = async () => {

    const request = await Api.fetchGetById(id);
    const taskId = await request.json();
    setTask(taskId);
  };
  
  const deleteTaskById = async () => {

    const request = await Api.fetchDelete(id);
    const response = await request.json();
    YouSay(response.message);
    navigate('/');
  };

  if (task.deadline) {
    var deadline = task.deadline.slice(0, 10)
  };

  if (task.date) {
    var date = task.date.slice(0, 10)
  };

  return (
    <div className="container">
    <div className={"card-out details edit " + task.priority}>
      <div className="card-in">
        <div>
          <h2>
           {task.title}
          </h2>
        </div>
        <div>
          {task.details}
        </div>
        <div>
          {task.priority}
        </div>
        <div>
          {task.taskStatus}
        </div>
        <div>
          {deadline}
        </div>
        <div>
          <p>Created {date}</p>
        </div>
        <Link to={`/edit/${task._id}`}><button id="addTask">EDIT</button></Link>
        <button id="addTask" onClick={deleteTaskById}>DELETE</button>
      </div>
    </div>
    </div>
  )
};

export default Task
