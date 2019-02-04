import React from 'react'
import cxs from 'classnames'
import './Button.scss'

export const Button = React.memo(({ className, ...props }) => (
  <button className={cxs('btn', className)} {...props} />
))
