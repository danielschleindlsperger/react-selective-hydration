import React, { useState } from 'react'
import { Button } from './atoms'

export const App = () => {
  const [isHappy, setHappiness] = useState(false)

  return (
    <div>
      <h1>Hello World!</h1>
      <Button data-testid="happiness-button" onClick={() => setHappiness(!isHappy)}>
        {isHappy ? '🤗' : '😞'}
      </Button>
    </div>
  )
}
