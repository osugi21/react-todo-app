import React from 'react'
import Todo from './Todo'

const Todolist = ({ todos }) => {


  return todos.map((todo) => <Todo todo={todo} key={todo.id}/>);
};

export default Todolist