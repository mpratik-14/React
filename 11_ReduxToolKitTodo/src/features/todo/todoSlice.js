import { createSlice } from "@reduxjs/toolkit";
import { nanoid } from "@reduxjs/toolkit"; //generates unique id

const initialState = {
    todos : [{id: 1, text: "Hello World"}],
    editingTodo : null
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
            const {id, text} = action.payload;
            const todo = state.todos.find((todo) => todo.id === id);
            if(todo){
                todo.text = text;
            }

        },
        setEditingTodo : (state, action) => {
            state.editingTodo = action.payload;
        },
        clearEditingTodo:(state) => {
            state.editingTodo = null;
        }
    }
})

export const {addToDo, removeToDo, updateToDo, setEditingTodo, clearEditingTodo} = todoSlice.actions

export default todoSlice.reducer