import React from 'react'
import {useForm } from 'react-hook-form'
import {useContext} from 'react'
import { todoscontext } from '../contexts/ToDoContextProvider';

function AddToDo(props) {

    let [ todos,addNewTodo]= useContext(todoscontext) 

    let {register,handleSubmit }=useForm();

    let formSubmit=(todoObj)=>{
        console.log(todoObj.todos);
        addNewTodo(todoObj.todos)
    }

  return (
    <div>
        <form onSubmit={handleSubmit(formSubmit)}>
            <div className='d-block mx-auto'>
               
                <input className='mb-3 d-block mx-auto                                                             ' type="text" id='todo' {...register("todos")} placeholder="Enter Todo" />
            </div>
            <div>
                <button className='btn btn-success d-block mx-auto' type='submit'>add</button>
            </div>
        </form>
    </div>
  )
}

export default AddToDo
