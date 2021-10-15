import React, { useState } from 'react';
import useArray from './hooks/useArray';

function ToDo() {
  const {todos, addTodos} = useArray();
  const [otherTodo , setOtherTodo] = useState('');
  console.log(todos);
  
  
  return(
    <div>
      <h1>Todo</h1>
    <label htmlFor="">
      Digite uma tarefa
      <input type="text" onChange={({target}) => setOtherTodo(target.value)}/>
    </label>
    <ul>
      {todos.map((element)=> <li>{element}</li>)}
    </ul>
    <button onClick={()=> addTodos(otherTodo)}>Adicionar todo</button>
    </div>
  )
}

export default ToDo;