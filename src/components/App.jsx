import React from 'react'
import { SSRCounter } from './counter'

export const App = ({ initialCount }) => (
  <main>
    <h1>You are amazing!</h1>
    <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic, deserunt.
      Quam esse, praesentium saepe earum doloribus totam adipisci cupiditate ex?
    </p>
    <SSRCounter initialCount={initialCount} />
    <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic, deserunt.
      Quam esse, praesentium saepe earum doloribus totam adipisci cupiditate ex?
    </p>
  </main>
)
