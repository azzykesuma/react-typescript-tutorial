import React, { useState } from 'react';
import './App.css';
import InputField from './component/InputField';
import { Todo } from './model';

const App:React.FC = () => {
  const [todo, settodo] = useState<string>('');
  const [todos, settodos] = useState<Todo[]>([]);
  
  const handleAdd = (e: React.FormEvent) => {
    e.preventDefault();
  }
  return (
    <div className="App">
      <div className="span heading">TASKIFY</div>
      <InputField todo={todo} settodo={settodo} handleAdd={handleAdd} />
    </div>
  );
}

export default App;
