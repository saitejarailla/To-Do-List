import { createContext, useState } from "react";

//create context
export let todoscontext=createContext();
//create context provider
function ToDOContextProvider({children }){
    //state
    let [todos,setTodos]=useState([]);

    let addNewTodo=(todo)=>{
        setTodos([...todos,todo]);
    }
    return(
        <todoscontext.Provider value={[todos ,addNewTodo]}>
            {children}
        </todoscontext.Provider>
    )
}

export default ToDOContextProvider;