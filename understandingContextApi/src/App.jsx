import { useState, useContext } from "react";
import "./App.css";
import { CounterContext } from "./contexts/CounterContext";
import Counter from "./components/Counter";

function App() {
  const counterState = useContext(CounterContext); // with this i'll able to access states
  // console.log(counterState);

  return (
    <>
      <h1>Counter is {counterState.count}</h1> {/* states used here */}
      <Counter value={counterState.count}/>
      <Counter />
    </>
  );
}

export default App;
