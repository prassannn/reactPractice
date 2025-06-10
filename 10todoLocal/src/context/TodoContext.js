import { createContext,useContext } from "react";

export const TodoContext = createContext({
    todos : [
        {
            id:1,
            todo:"todo msg",
            completed : false
        }
    ],
    addTodo : (name) =>{},
    updateTodo : (id,name)=>{},
    deleteTodo : (id)=>{},
    toggleTodo : (id)=>{}
})

export const useTodo = () => {
    return useContext(TodoContext)
}
export const TodoProvider = TodoContext.Provider