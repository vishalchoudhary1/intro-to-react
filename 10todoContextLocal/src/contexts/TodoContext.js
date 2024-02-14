import { createContext, useContext } from "react";

// its a object
export const TodoContext = createContext({
    // adding some functionality
  todos: [
    {
      id: 1,
      todo: "todo title",
      completed: false,
    },
  ],
  addTodo: (todo) => {},
  updateTodo: (id, todo) => {},
  deleteTodo: (id) => {},
  toggleComplete: (id) => {},
});

// becoz of this i don't need to import useContext anywhere else(ex: TodoForm.jsx component) and export each function in todocontext(ex: addtodo functionality in app.jsx, updatetodo functionality in app.jsx)
export const UseTodo = () => {
  return useContext(TodoContext);
};

// becoz of this i don't need to write .Provider
export const TodoProvider = TodoContext.Provider
