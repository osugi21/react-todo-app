import React from 'react'
// import { useState } from "react";


const Todo = ({ todo, deleteTodo }) => {
   
  // const [tasks, setTasks] = useState("")

  const handleClick = () => {
    deleteTodo(todo.id)
    // setTasks(deleteTodo)
  }

  return (
    <div>
      {todo.task}
      <button onClick={handleClick}>削除</button>
    </div>
  )
}

export default Todo