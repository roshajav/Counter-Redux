import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Increment, Decrement } from "./actions/CounterActions";

const Counter = () => {
  const count = useSelector((state) => state.count);
  const dispatch = useDispatch();
  return (
    <>
      <p> Count: {count} </p>
      <button onClick={() => dispatch(Increment())}> + </button> &nbsp;
      <button onClick={() => dispatch(Decrement())}> - </button>
    </>
  );
};

export default Counter;
