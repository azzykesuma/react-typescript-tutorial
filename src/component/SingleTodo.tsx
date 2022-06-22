import React from 'react'
import { Todo } from '../model'
import { AiFillEdit, AiFillDelete } from 'react-icons/ai';
import { MdDone } from 'react-icons/md'
interface Props {
    todo : Todo
    todos : Todo[]
    settodos : React.Dispatch<React.SetStateAction<Todo[]>>
}

const SingleTodo:React.FC<Props> = ({todo,todos,settodos}: Props) => {
    
    // first, map the array of object to access the individual obj
    // then check the id for each object, and compare it to the event target id 
    // lastly, spread the todo obj, toggle the isdone if match, but return nothing if not match
    const handleClick = (id : number) => {
        settodos(todos.map(todo => todo.id === id ? 
            {...todo, isDone: !todo.isDone} : todo
        ))
    }
    
    const handleDelete = (id : Number) => {
        // filter returned the id which is NOT matched with
        // the id inserted as argument
        settodos(todos.filter(todo => todo.id !== id))
    }
  return (
    <form className="todos__single">
        {todo.isDone ? (
        <s className="todos__single--text">
        {todo.todo}
        </s>
        ) 
        :
        (
        <span className="todos__single--text">
            {todo.todo}
        </span>
        )}
        <span className="icon"><AiFillEdit /></span>
        <span className="icon"><AiFillDelete onClick={() => handleDelete(todo.id)} /></span>
        <span className="icon"><MdDone onClick={() => handleClick(todo.id)}/></span>
    </form>
  )
}

export default SingleTodo