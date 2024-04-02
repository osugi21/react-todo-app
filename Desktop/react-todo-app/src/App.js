import './App.css';
import { useState, useRef } from "react";
import { v4 as uuidv4 } from "uuid";
import Todolist from './Todolist';
import InputTodo from './InputTodo';

function App() {
  
  const [todos, setTodos] = useState([]);
  const todoNameRef = useRef();

  const addTodo = () => {

  }


  const toggleTodo = () =>{

  }
  return (
  <div>
    <div>
      <h1>ToDoList</h1>
      <InputTodo />
    </div>
    <div>
      <Todolist />
    </div>
  </div>
  )

}



export default App;
