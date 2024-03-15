import React from 'react'
import Todos from './Todos'
import SingleTodo from './SingleTodo'
import { Todo } from '../model'
interface Props {
   
    todos:Todo[];
    setTodos:React.Dispatch<React.SetStateAction<Todo[]>>
}
const TodoList = ({todos,setTodos}:Props) => {
  return (
    <div className='container'>
        <div className='todos'>
       <span className='todos_heading'>
        Active Tasks
       </span>
       {
        todos.map((todo)=>{
           return <SingleTodo todo={todo} todos={todos} key={todo.id} setTodos={setTodos}/>
        })
       }
        </div>
      <div className='todos remove'>
      <span className='todos_heading'>
       Completed Tasks
       </span>
       {
        todos.map((todo:Todo)=>{
          return  <SingleTodo todo={todo} todos={todos} key={todo.id} setTodos={setTodos}/>
        })
       }
      </div>
    </div>
  )
}

export default TodoList;
