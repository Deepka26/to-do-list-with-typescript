import React from 'react';
import { useState } from 'react';
import { Todo } from './model';

import './App.css';
import InputFiles from './Components/InputFiles';
import Todos from './Components/Todos';
import TodoList from './Components/TodoList';

const App: React.FC=() => {
  const [todo,setTodo]=useState<string>("")
  const [todos,setTodos]=useState<Todo[]>([])

  const handleAdd=(e: React.FormEvent)=>{
  e.preventDefault()
  if(todo)
  {
    setTodos([...todos,{id:Date.now(),todo:todo,isDone:false}])
    setTodo("")
  }
  }
  return (
    <div className="App">
   <span className="heading">Taskify</span>
   <InputFiles todo={todo} setTodo={setTodo} handleAdd={handleAdd}/>
   {/* <Todos todos={todos} setTodos={setTodos}/> */}
   <TodoList todos={todos} setTodos={setTodos}/>
  
    </div>
  );
}

export default App;
