import { useState } from "react";

import "./App.css";

function App() {
  let [count, setCount] = useState(0);
  function addValue() {
    count = count + 1;
    setCount(count);
  }
  function reduceValue() {
    count = count - 1;
    setCount(count);
  }
  return (
    <>
      <h2>Rate yourself out of 10</h2>
      <h1>{count}</h1>
      <button onClick={count < 10 && addValue}>+1</button>{" "}
      <button onClick={count && reduceValue}>-1</button>
    </>
  );
}

export default App;
