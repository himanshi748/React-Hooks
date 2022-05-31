import React, { useState, useEffect } from "react";
import "./App.css";

function Effect() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    document.title = "you clicked {count} times";
  });
  return (
    <>
      <h1>Using useEffect</h1>
      <p>YOU CLICKED {count} times</p>
      <button onClick={() => setCount(count + 5)}>Add </button>
    </>
  );
}

export default Effect;
