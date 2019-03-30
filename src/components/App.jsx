import React from 'react'
import { Counter } from './counter'

export const App = ({ initialCount }) => (
  <div>
    <h1>You are amazing!</h1>
    <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic, deserunt.
      Quam esse, praesentium saepe earum doloribus totam adipisci cupiditate ex?
    </p>
    <div>
      <Counter initialCount={initialCount} />
    </div>
    <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic, deserunt.
      Quam esse, praesentium saepe earum doloribus totam adipisci cupiditate ex?
    </p>
  </div>
)
