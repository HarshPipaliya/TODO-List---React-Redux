import { createSlice } from "@reduxjs/toolkit";

export const todoSlice = createSlice({
    name: 'todos',
    initialState: [],
    reducers: {
        addTodo: (state, action) => {
            const newTodo = {
                id: action.payload.id,
                title: action.payload.title,
                completed: action.payload.completed
            }
            state.push(newTodo)
        },
        deleteTodo: (state, action) => {
			return state.filter((todo) => todo.id !== action.payload.id);
		},
    }
})

export const { addTodo, deleteTodo } = todoSlice.actions;

export default todoSlice.reducer;