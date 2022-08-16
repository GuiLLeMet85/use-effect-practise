import React, { useState, useEffect } from 'react'

export default function Counter() {

  const [count, setCount] = useState(0);
  const [dynamicClass, setDynamicClass] = useState('text');

 
  useEffect(() => {
    setCount(Math.floor(Math.random() * (10 - 0) + 0));

    return () => {
      setCount(0);
      setDynamicClass('text');
    }
  }, [])



  const handleIncrease = () => {
      setCount(value => value +1)
  }

  const handleDecrease = () => {
    setCount(value => value -1)
  }

  // First iteration

  // Second and Fourth iteration

  // Third iteration

  return (
    <div>
      <p>Counter: <span className={dynamicClass}>{count}</span></p>
      <button onClick={handleIncrease}>➕</button>
      <button onClick={handleDecrease}>➖</button>
    </div>
  )
}
