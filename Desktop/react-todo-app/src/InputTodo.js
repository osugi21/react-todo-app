import React from 'react';
import { useState } from "react";

const InputTodo = ({ addTodo }) => {

  const [text, setText] = useState("");

  const handleClick = () => {
    addTodo(text)
    setText("")
  }
  return (
    <div>
        <input value={text}
                onChange={(event) => setText(event.target.value)}/>
        <p>{text}</p>
     <button onClick={handleClick}>追加</button>
    </div>
  );
};
export default InputTodo