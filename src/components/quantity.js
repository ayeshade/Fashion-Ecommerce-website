import React, { useState } from 'react';
import '../App.css'

function IncrementDecrement() {
  const [count, setCount] = useState(1);

  const handleIncrement = () => {
    setCount(count + 1);
  };

  const handleDecrement = () => {
    if (count > 1) {
      setCount(count - 1);
    }
  };

  return (
    <div className="wrapper">
      <span className="minus" onClick={handleDecrement}>-</span>
      <span className="num">{count < 10 ? `0${count}` : count}</span>
      <span className="plus" onClick={handleIncrement}>+</span>
    </div>
  );
}

export default IncrementDecrement;
