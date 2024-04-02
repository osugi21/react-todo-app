import './App.css';
import { useState, useRef } from "react";
import { v4 as uuidv4 } from 'uuid';
import Todolist from './Todolist';
import InputTodo from './InputTodo';

function App() {
  
  const [todos, setTodos] = useState([{id: uuidv4(), task: "散歩", isFinished: false},{id: uuidv4(), task: "買い物", isFinished: false}, {id: uuidv4(), task: "家事", isFinished: false}]);
  const todoNameRef = useRef();

  //入力する動作
  const inputTask = () => {
    const task = todoNameRef.current.value
  

  // 追加する動作
    const addTodo = () => {
      setTodos((p) => {
        return [...p, { id: uuidv4(), task: task, isFinished: false}]
      });
     };
  };


  const toggleTodo = () =>{

  }
  return (
  <div>
    <div>
      <h1>ToDoList</h1>
      <InputTodo inputtask={inputTask} />
    </div>
    <div>
      <Todolist todos={todos} inputtask={inputTask} addTodo={addTodo}/>
    </div>
  </div>
  )

}



export default App;
