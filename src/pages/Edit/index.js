import React, { useState, useEffect } from 'react'
import { useParams, useNavigate } from 'react-router'
// import Api from '../../components/api'

const Edit = () => {

  const navigate = useNavigate();

  const { id } = useParams();



  const editTask = () => {

  }




  return (
    <div className="container">
      <div className="card-out edit Normal">
        <h1>Edit</h1>
        <form onSubmit={editTask}>
          <input type="text" placeholder="Task Title" name="title" />
          <input type="text" placeholder="Enter some details" name="details" />
          <input type="text" placeholder="Low, Normal (default) or High Priority?" name="priority" />
          <input type="text" placeholder="'To Do' is Default" name="taskStatus" />
          <input type="date" placeholder="Task Title" name="deadline" />
          <button type="submit">EDIT</button>
        </form>
      </div>
    </div>
  )
}

export default Edit
