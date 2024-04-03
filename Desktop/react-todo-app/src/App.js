import './App.css';
import { useState } from "react";
import { v4 as uuidv4 } from 'uuid';
import Todolist from './Todolist';
import InputTodo from './InputTodo';

function App() {
  
  const [todos, setTodos] = useState([{id: uuidv4(), task: "散歩", isFinished: false},{id: uuidv4(), task: "買い物", isFinished: false}, {id: uuidv4(), task: "家事", isFinished: false}]);
 

  // 追加する動作
    const addTodo = (task) => {
      setTodos((p) => {
        return [...p, { id: uuidv4(), task: task, isFinished: false}]
      });
    };

    const deleteTodo = (id) => {
       const todo = [...todos].find((todo) => todo.id === id);
       const newTodos = todos.filter((todo) => !todo);
       setTodos(newTodos);

    }
  return (
  <div>
    <div>
      <h1>ToDoList</h1>
      <InputTodo addTodo={addTodo}/>
    </div>
    <div>
      <Todolist todos={todos} addTodo={addTodo} deleteTodo={deleteTodo}/>
    </div>
  </div>
  )

}



export default App;
