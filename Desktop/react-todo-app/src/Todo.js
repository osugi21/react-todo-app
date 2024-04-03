import React from 'react'
// import { useState } from "react";


const Todo = ({ todo, deleteTodo, toggleTodo}) => {

  const toggleButton = () => {
    toggleTodo(todo.isFinished)
  }
  const handleClick = () => {
    deleteTodo(todo.id)
  }

  return (
    <div>
      {todo.task}
      <button onClick={handleClick}>削除</button>
    </div>
  )
}

export default Todo