import React, { useEffect, useRef, useState } from 'react'
import { Todo } from '../model'
import { FaEdit } from "react-icons/fa";
import { ImBin2 } from "react-icons/im";
import { MdOutlineDone } from "react-icons/md";

interface Props {
    todo:Todo,
    todos:Todo[];
    setTodos:React.Dispatch<React.SetStateAction<Todo[]>>
}




const SingleTodo = ({todo,todos,setTodos}:Props) => {
    const [edit,setEdit]=useState<boolean>(false)
    const [editTodo,setEditTodo]=useState<string>(todo.todo)
    const inputRef=useRef<HTMLInputElement>(null)

    const handleDone=(id:number)=>{
       setTodos(todos.map((item)=> item.id===id ? {...item,isDone:!item.isDone}:item
       ));
        };

        const handleDelete=(id:number)=>{
            setTodos(todos.filter((item)=>{
                return item.id!==id;
            }))
        }

        const handleEdit=(e:React.FormEvent,id:number)=>{
          e.preventDefault()
          setTodos(todos.map((item)=>{return item.id===id?{...item,todo:editTodo}:item}))
setEdit(!edit)
        }
        useEffect(()=>{
            inputRef.current?.focus()
        },[edit])
  return (
   <form className='todos__single' onSubmit={(e)=>{handleEdit(e,todo.id)}}>
    {
        edit? <input
        ref={inputRef}
        type="text" value={editTodo} className='todos__single__text' onChange={(e)=>{setEditTodo(e.target.value)}} />: todo.isDone ? <s className='todos__single__text'>
        {todo.todo}
    </s>: <span className='todos__single__text'>
            {todo.todo}
        </span>
    }


   
    <div>
        <span className='icon' onClick={()=>{
             if(!edit && !todo.isDone){
                setEdit(!edit)
               }
        }
          

        }>
            <FaEdit/>

        </span>
        <span className='icon' onClick={()=>{handleDelete(todo.id)}}>
           <ImBin2/>

        </span>
        <span className='icon' onClick={()=>{handleDone(todo.id)}}>
          <MdOutlineDone/>

        </span>
    </div>
    <div>

    </div>
   </form>
  )
}

export default SingleTodo
