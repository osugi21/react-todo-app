import React from 'react'
import Todo from './Todo'

const Todolist = ({ todos, deleteTodo }) => {

  return todos.map((todo) => <Todo todo={todo} key={todo.id} delateTodo={deleteTodo}/>);
};

export default Todolist