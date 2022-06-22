import React, { useState } from 'react';
import './App.css';
import InputField from './component/InputField';
import { Todo } from './model';
import TodoList from './component/TodoList';

const App:React.FC = () => {
  const [todo, settodo] = useState<string>('');
  const [todos, settodos] = useState<Todo[]>([]);
  
  const handleAdd = (e: React.FormEvent) => {
    e.preventDefault();

    if(todo) {
      settodos([...todos, {id:Date.now(), todo, isDone : false}])
    }
    settodo('')
  }
  console.log(todos);
  return (
    <div className="App">
      <div className="span heading">TASKIFY</div>
      <InputField todo={todo} settodo={settodo} handleAdd={handleAdd} />
      <TodoList todos={todos} settodos={settodos} />
    </div>
  );
}

export default App;
