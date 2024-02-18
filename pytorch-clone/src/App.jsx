import { useState } from "react";
import "./App.css";
import Nav from "./components/Nav";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="nav">
        <a className="logo">logo here</a>
        <Nav />
      </div>
    </>
  );
}

export default App;
