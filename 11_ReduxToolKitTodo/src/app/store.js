import {configureStore} from '@reduxjs/toolkit';
import todoReducer from '../features/todo/todoSlice';
/*
steps to create store
1. import configure method

*/

export const store = configureStore({
    reducer: todoReducer
})
