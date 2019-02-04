import React from 'react'
import cxs from 'classnames'
import './Headline.scss'

export const Headline = ({ className, as, ...props }) =>
  React.createElement(as, { className: cxs(className, 'headline'), ...props })

Headline.defaultProps = {
  as: 'h1',
}
