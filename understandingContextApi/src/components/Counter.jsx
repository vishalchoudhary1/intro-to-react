import React, { useContext } from "react";
import { CounterContext } from "../contexts/CounterContext";

const Counter = ({value}) => {
  const contextState = useContext(CounterContext);
  const IncrementBtn = () => {
    return contextState.setCount(contextState.count + 1);
  };
  const DecrementBtn = () => {
    return contextState.setCount(contextState.count - 1);
  };
  return (
    <div>
      <button
        onClick={() => {
          IncrementBtn();
        }}
      >
        Increment {value}
      </button>
      <button
        onClick={() => {
          DecrementBtn();
        }}
      >
        Decrement
      </button>
    </div>
  );
};

export default Counter;
