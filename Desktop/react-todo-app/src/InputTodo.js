import React from 'react'

const InputTodo = ({ inputtask }) => {


  return (
    <div>
        <input type="text"/>
     <button onClick={inputtask}>追加</button>
    </div>
  )
  }
export default InputTodo