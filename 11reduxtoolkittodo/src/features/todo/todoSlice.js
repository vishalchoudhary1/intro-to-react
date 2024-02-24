import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
  todos: [{ id: 1, text: "hello" }],
};

export const todoSlice = createSlice({
  name: "todo", // this name will be visible in browser extention
  initialState,
  reducers: {
    // Add a new todo to the state by generating a unique ID and using the text from the action payload
    addTodo: (state, action) => {
      // Create a new todo object with a unique ID and the text from the action payload
      const todo = {
        id: nanoid(),
        text: action.payload,
      };
      // Push the new todo to the todos array in the state
      state.todos.push(todo);
    },
    removeTodo: (state, action) => {
      state.todos = state.todos.filter((todo) => todo.id !== action.payload);
    },
    // Update the text of a todo by finding its ID in the action payload
    updateTodo: (state, action) => {
      // Use map to update the text of the matching todo, keeping other properties unchanged
      state.todos = state.todos.map((todo) => todo.id === action.payload ? { ...todo, text: action.payload.text } : todo
      );
    },
  },
});

// exporting individual reducers
export const { addTodo, removeTodo, updateTodo } = todoSlice.actions;

export default todoSlice.reducer;
