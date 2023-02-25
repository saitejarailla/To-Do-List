import React from 'react'
import {useContext} from 'react'
import { todoscontext } from '../contexts/ToDoContextProvider';


function DisplayToDo() {
  let [todos]= useContext(todoscontext) 

  return (
    <div className='text-center'>
      <h2 className='text-center'>Todos</h2>
       {
        todos.map((task,index)=><h3 key={index} className="text-primary">{index+1}.{task}</h3>)
       }
    </div>
  )
}

export default DisplayToDo
