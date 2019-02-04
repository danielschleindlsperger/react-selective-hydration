import React from 'react'
import cxs from 'classnames'
import './Overlay.scss'

export const Overlay = ({ className, onClose, children, ...props }) => (
  <div className={cxs('overlay-backdrop', className)} onClick={() => onClose()} {...props}>
    <div className="overlay">{children}</div>
  </div>
)
