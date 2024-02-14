import { useEffect, useState } from "react";
import "./App.css";
import { TodoProvider } from "./contexts";

function App() {
  const [todos, setTodo] = useState([]);

  const addTodo = (todo) => {
    // previous state of todos array
    setTodo((oldTodo) => [{ id: Date.now(), ...todo }, ...oldTodo]);
  };

  const updateTodo = (id, todo) => {
    setTodo((prev) =>
      prev.map((prevtodo) => (prevtodo.id === id ? todo : prevtodo))
    );

    // prev.forEach((eachValue) => {
    //   if (eachValue.id === id) {
    //     to-do
    //   }
    // });
  };

  const deleteTodo = (id) => {
    setTodo((prev) => prev.filter((todo) => todo.id !== id))
  }

  const toggleComplete = (id) => {
    setTodo((prev) => prev.map((prevTodo) => prevTodo.id === id ? {...prev, completed: !prevTodo.completed} : prevTodo))
  }

  // functionality of local storage:
  useEffect(()=>{
    const todos = JSON.parse(localStorage.getItem("todos"))

    if(todos && todo.length > 0){
      // setting todos state from local storage
      setTodo(todos)
    }
  },[])

  // when state todos changes and adding into local storage
  // getting todos state from local storage
  useEffect(()=>{
    localStorage.setItem("todos", JSON.stringify(todos))
  }, [todos])

  return (
    <TodoProvider value={{ todos, addTodo, updateTodo, deleteTodo, toggleComplete }}>
      <div className="bg-[#172842] min-h-screen py-8">
        <div className="w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 text-white">
          <h1 className="text-2xl font-bold text-center mb-8 mt-2">
            Manage Your Todos
          </h1>
          <div className="mb-4">{/* Todo form goes here */}</div>
          <div className="flex flex-wrap gap-y-3">
            {/*Loop and Add TodoItem here */}
          </div>
        </div>
      </div>
    </TodoProvider>
  );
}

export default App;
