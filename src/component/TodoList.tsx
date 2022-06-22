import React from 'react'
import { Todo } from '../model'
import './styles.css'
import SingleTodo from './SingleTodo'
interface Props {
    todos : Todo[]
    settodos : React.Dispatch<React.SetStateAction<Todo[]>>
}
const TodoList:React.FC<Props> = ({todos,settodos}: Props) => {
  return (
    <div className='todos'>
        {todos.map(todo => (
            <SingleTodo
            todo={todo}
            todos={todos}
            settodos={settodos}
            key={todo.id}
            />
        ))}    
    </div>
  )
}

export default TodoList