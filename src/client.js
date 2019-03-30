import React from 'react'
import { hydrate } from 'react-dom'
import { Counter, CounterHydrationToken } from './components/counter'

const hydrateComponents = cs =>
  Object.keys(cs).forEach(token => {
    const Component = components[token]

    const props = JSON.parse(
      document.querySelector(`[data-hydration-data-id="${token}"]`).innerHTML,
    )
    const parent = document.querySelector(`[data-hydration-id="${token}"]`)

    console.log(props, parent)

    if (!props) {
      throw new Error(`Could not get props for '${token}'`)
    }

    if (!parent) {
      throw new Error(`Could not get parent node for '${token}'`)
    }

    hydrate(<Component {...props} />, parent)
  })

const components = {
  [CounterHydrationToken]: Counter,
}

hydrateComponents(components)
