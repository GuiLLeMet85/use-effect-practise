import React, { useState, useEffect } from 'react'

export default function Counter() {

  const [count, setCount] = useState(0);
  const [dynamicClass, setDynamicClass] = useState('text');

  // Second and Fourth iteration
  useEffect(() => {
    setCount(Math.floor(Math.random() * (10 - 0) + 0));
    return () => {
      setCount(0);
      setDynamicClass('text');
      console.log('All clean here. Count:', count, 'Class:', dynamicClass);
    }
  }, []);


  // First iteration
  const handleIncrease = () => {
      setCount(value => value +1)
  }

  const handleDecrease = () => {
    setCount(value => value -1)
  }

  // Third iteration

useEffect (() => {
  if (count <= 0) {
  setDynamicClass('red');
  }
  else if (count > 0 && count <= 5) {
    setDynamicClass('orange');
  } 
  else if (count > 5 ) {
    setDynamicClass ('green');
  }
}, [count])

  return (
    <div>
      <p>Counter: <span className={dynamicClass}>{count}</span></p>
      <button onClick={handleIncrease}>➕</button>
      <button onClick={handleDecrease}>➖</button>
    </div>
  )
}
