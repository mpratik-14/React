import { createContext, useContext } from "react";
// since we dont return anything from this to do file
// so we make this file as js instead of jsx


//only the definition of the function will be present in context
//implementation will be provide in the component where the function will be called
export const ToDoContext = createContext({    
    todos: [
        {
            id: 1,
            todo: "Todo Msg",
            completed: false
        }
    ],
    addToDo: (todo) => {},
    updateToDo: (id, todo) => {},
    deleteToDo: (id) => {},
    toggleComplete: (id, completed) => {}
    
})


export const useToDo= () => {
    console.log(`in to do useContext.js ${Object.toString(ToDoContext.todos)}`);    
    return useContext(ToDoContext)
}

//wrap all the components under this context provider
export const ToDoProvider = ToDoContext.Provider