import React from 'react'
import { hydrate } from 'react-dom'
import { Counter, CounterHydrationToken } from './components/counter'

const components = {
  [CounterHydrationToken]: Counter,
}

const hydrateComponents = cs =>
  Object.keys(cs).forEach(token => {
    const Component = components[token]

    const props = JSON.parse(
      document.querySelector(`[data-hydration-data-id="${token}"]`).innerHTML,
    )
    const parent = document.querySelector(`[data-hydration-id="${token}"]`)
      .parentNode

    console.log(props, parent)

    if (!props && !parent) {
      throw new Error(
        'Could not get props or component parent node for ',
        token,
      )
    }

    hydrate(<Component {...props} />, parent)
  })

hydrateComponents(components)
