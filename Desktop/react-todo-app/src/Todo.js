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
      {todo.task}{todo.isFinished ? "完了" : "未完了"}
      <button onClick={toggleButton}>{todo.isFinished ? "未完了" : "完了にする"}</button>
      <button onClick={handleClick}>削除</button>
    </div>
  )
}

export default Todo