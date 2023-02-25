import React from 'react'
import { todoscontext } from '../contexts/ToDoContextProvider'
import { useContext } from 'react'

function CountToDo() {
  let [todos] =useContext(todoscontext)

  return (
    <div>
      <h2 className='text-center'>Count:<span className='text-danger'>{todos.length}</span></h2>
    </div>
  )
}

export default CountToDo
