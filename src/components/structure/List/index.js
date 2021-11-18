import React, { useState, useEffect } from 'react';
import Card from '../Card';
import Api from '../../api'

const TaskList = () => {

  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    getTasks();
  }, []);


  const getTasks = async () => {

    const request = await Api.fetchGetAll();

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