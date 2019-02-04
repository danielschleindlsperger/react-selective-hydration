/**
 * @jest-environment jsdom
 */

import React from 'react'
import { render, fireEvent, cleanup } from 'react-testing-library'
import { App } from './App'

afterEach(cleanup)

test('<App /> is sad and then happy!', () => {
  const { getByTestId } = render(<App />)
  let button = getByTestId('happiness-button')
  expect(button.innerHTML).toBe('😞')
  fireEvent.click(button)
  button = getByTestId('happiness-button')
  expect(button.innerHTML).toBe('🤗')
})
