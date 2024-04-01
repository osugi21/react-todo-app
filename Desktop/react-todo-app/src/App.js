import './App.css';
import { useState } from "react";
import Todo from './Todo';
import Todolist from './Todolist';

function App() {
  
  const [todos, setTodos] = useState([]);

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
