import React, { useState } from 'react'
import { Button, Headline } from './atoms'

export const App = () => {
  const [isHappy, setHappiness] = useState(false)

  return (
    <div>
      <Headline>You are amazing!</Headline>
      <Button
        data-testid="happiness-button"
        onClick={() => setHappiness(!isHappy)}
      >
        {isHappy ? '🤗' : '😞'}
      </Button>
    </div>
  )
}
