import React, { useState, useEffect } from 'react';
import Card from '../Card/Card';

const API_URL = 'http://localhost:3002';

const TaskList = () => {

  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    getTasks();
  }, []);


  const getTasks = async () => {

    const request = await fetch (`${API_URL}/tasks`);

    const data = await request.json();

    setTasks(data);
  }

  return (

    <div className="container">
      
        {tasks.map((task) => (
          <Card data={task} key={task._id} />
        ))}
   
    </div>

  )

}

export default TaskList;