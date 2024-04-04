import './App.css';
import { useState } from "react";
import { v4 as uuidv4 } from 'uuid';
import Todolist from './Todolist';
import InputTodo from './InputTodo';

function App() {
  
  const [todos, setTodos] = useState([{id: uuidv4(), task: "散歩", isFinished: false},{id: uuidv4(), task: "買い物", isFinished: false}, {id: uuidv4(), task: "家事", isFinished: false}]);
 

  // 追加する動作
    const addTodo = (task) => {
      setTodos((prevtodo) => {
        return [...prevtodo, { id: uuidv4(), task: task, isFinished: false}]
      });
    };

    const deleteTodo = (id) => {
      const newTodo = todos.filter((todo) => todo.id !== id)
      setTodos(newTodo);
    }


  const toggleTodo = (id) => {
    const newTodo = [...todos];
    const todo = newTodo.find((todo) => todo.id === id);
    todo.isFinished = !todo.isFinished;
    setTodos(newTodo);
  }
  return (
  <div>
    <div>
      <h1>ToDoList</h1>
      <InputTodo addTodo={addTodo}/>
    </div>
    <div>
      <Todolist todos={todos} addTodo={addTodo} deleteTodo={deleteTodo} toggleTodo={toggleTodo}/>
    </div>
  </div>
  )

}



export default App;
