import React, { useContext, useState } from "react";
import { TodoContext } from "../contexts";
import { UseTodo} from "../contexts";

function TodoForm() {
  
    const [todo, setTodo] = useState()
    // todo =====================================
    // const {addTodo} = useContext(TodoContext)
    const {addTodo} = UseTodo()

    const add = (e) => {
        e.preventDefault()

        if(!todo) return

        // passing todo value in addTodo function in app.jsx 
        addTodo({todo, completed: false})
        setTodo("")
    }

  return (
    <form onSubmit={add} className="flex">
      <input
        type="text"
        placeholder="Write Todo..."
        className="w-full border border-black/10 rounded-l-lg px-3 outline-none duration-150 bg-white/20 py-1.5"
        // wiring of input with state
        value={todo}
        onChange={(e) => {setTodo(e.target.value)}}
      />
      <button
        type="submit"
        className="rounded-r-lg px-3 py-1 bg-green-600 text-white shrink-0"
      >
        Add
      </button>
    </form>
  );
}

export default TodoForm;
