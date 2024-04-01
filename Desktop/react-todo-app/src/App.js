import './App.css';
import { useState, useRef } from "react";
import { v4 as uuidv4 } from "uuid";
import Todo from './Todo';
import Todolist from './Todolist';

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
    <input type="text"/>
    <button onClick={addTodo}>タスクを追加</button>
    </div>
    <div>
      <ul>
      </ul>
    </div>
  </div>
  )

}



export default App;
