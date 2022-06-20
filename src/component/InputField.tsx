import React, { useState } from 'react'
import './styles.css'

interface Props {
    todo : string
    settodo : React.Dispatch<React.SetStateAction<string>>
    handleAdd : () => void
}

const InputField = ({ todo,settodo,handleAdd} : Props) => {
    
  return (
    <form className='input' onSubmit={handleAdd}>
        <input type="input" 
        className='input__box'
        placeholder='enter a task'
        value={todo}
        onChange={e => settodo(e.target.value)}
        />
        <button className='input__submit' type='submit'> Go</button>
    </form>
  )
}

export default InputField