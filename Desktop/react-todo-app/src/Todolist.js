import React from 'react'
import Todo from './Todo'

const Todolist = ({ todos, inputtask, addTodo }) => {


  return todos.map((todo) => <Todo todo={todo} key={todo.id}/>);
};

export default Todolist