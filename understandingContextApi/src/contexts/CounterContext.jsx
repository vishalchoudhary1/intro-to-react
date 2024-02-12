import React, { useState, createContext } from "react";

export const CounterContext = createContext(null);

export const CounterProvider = ( props ) => {

  // state that i'll pass
  const [count, setCount] = useState(4);
  return (

    // provider will wrap the component in main.jsx
  <CounterContext.Provider value={{count, setCount, name:'jack'}}>
    {props.children} {/*component will come here*/}
  </CounterContext.Provider>
  );
};
