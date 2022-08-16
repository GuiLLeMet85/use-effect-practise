import React, { useState, useEffect } from 'react'

export default function Counter() {

  const [count, setCount] = useState(0);
  const [dynamicClass, setDynamicClass] = useState('text');


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
