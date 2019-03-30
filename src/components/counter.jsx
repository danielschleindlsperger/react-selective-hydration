import React, { useState } from 'react'
import { withHydration } from './with-hydration'

const Counter = ({ initialCount, ...props }) => {
  const [count, setCount] = useState(initialCount)
  return (
    <div {...props}>
      <button onClick={() => setCount(c => c - 1)}>-</button>
      <span>{count}</span>
      <button onClick={() => setCount(c => c + 1)}>+</button>
    </div>
  )
}

Counter.defaultProps = {
  initialCount: 0,
}

const CounterHydrationToken = 'Counter'
const HydratableCounter = withHydration(Counter, CounterHydrationToken)

export { HydratableCounter as Counter, CounterHydrationToken }
