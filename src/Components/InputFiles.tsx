import React, { useRef } from 'react'
import '../../../typescript-to-do-list/src/style.css';
interface Props{
    todo:string;
    setTodo:React.Dispatch<React.SetStateAction<string>>;
    handleAdd:(e: React.FormEvent)=> void;
}
const InputFiles: React.FC<Props> = ({todo,setTodo,handleAdd}) => {
   const inputRef=useRef<HTMLInputElement>(null);
  return (
    <form action="" className='input' onSubmit={(e)=>{handleAdd(e)
    inputRef.current?.blur()
    }}>
       <input type="input"
       value={todo}
       ref={inputRef}
       onChange={(e)=>{setTodo(e.target.value)}}
       placeholder='Enter your task here...' className='input__box' />
       <button type="submit" className='input_submit'>Go</button>
    </form>
  )
}

export default InputFiles
