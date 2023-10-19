import { useSelector, useDispatch } from "react-redux";

import classes from "./Counter.module.css";

const Counter = () => {
  const counter = useSelector(state => state.counter);
  const dispatch = useDispatch();

  const toggleCounterHandler = () => {};

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      <div className={classes.value}>{counter}</div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
      <button onClick={() => dispatch({ type: "increment" })}>
        Increment Counter
      </button>
      <button onClick={() => dispatch({ type: "decrement" })}>
        Decrement Counter
      </button>
    </main>
  );
};

export default Counter;
