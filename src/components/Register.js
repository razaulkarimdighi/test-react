import React, { useMemo, useState } from "react";

const expensiveCalculation = (num) => {
  console.log("Calculating...............");
  for (let i = 0; i < 100000000; i++) {
    num = num + i;
  }
  return num;
};

export default function Register() {
  const [count, setCount] = useState(0);
  const [todos, setTodos] = useState([]);
  const calculation = useMemo(() => expensiveCalculation(count),[count]);

  const increment = () => {
    setCount((c) => c + 1);
  };

  const addTodo = () => {
    setTodos((t) => [...t, "New ToDos"]);
  };

  return (
    <div>
      <div>
        <h2>My todos</h2>
        {todos.map((todo, index) => {
          return <p key={index}>{todo}</p>;
        })}
        <button onClick={addTodo}>Add Todo</button>
      </div>
      <div>
        Count: {count}
        <button onClick={increment}>+</button>
        <h2>Expensive Calculation</h2>
        {calculation}
      </div>
    </div>
  );
}
