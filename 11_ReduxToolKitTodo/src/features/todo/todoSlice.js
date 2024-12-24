import { createSlice } from "@reduxjs/toolkit";
import { nanoid } from "@reduxjs/toolkit"; //generates unique id

const initialState = {
    todos : [{id: 1, text: "Hello World"}]
}

export const todoSlice = createSlice({
    name: 'todo',
    initialState,
    reducers: {
        addToDo : (state, action) => {
            const todo = {
                id : nanoid(),
                text : action.payload
            }
            state.todos.push(todo)
        },
        removeToDo : (state, action) => {
            state.todos = state.todos.filter((todo) => todo.id !== action.payload)
        },
        updateToDo : (state, action) => {
            if(action.id == state.todos.id){
                state.text = action.text
            }
        }
    }
})

export const {addToDo, removeToDo, updateToDo} = todoSlice.actions

export default todoSlice.reducer