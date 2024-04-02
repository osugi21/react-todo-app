import './App.css';
import { useState, useRef } from "react";
import { v4 as uuidv4 } from "uuid";
import Todolist from './Todolist';
import InputTodo from './InputTodo';

function App() {
  
  const [todos, setTodos] = useState(["Todo1", "Todo2"]);
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
      <Todolist todos={todos}/>
    </div>
  </div>
  )

}



export default App;
