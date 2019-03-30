import React from 'react'

export const withHydration = (WrappedComponent, token) => props => (
  <>
    {/* This div will be used as the components parent to hydrate without side-effects */}
    <div data-hydration-id={token}>
      <WrappedComponent {...props} />
    </div>
    <script
      type="application/json"
      data-hydration-data-id={token}
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(props),
      }}
    />
  </>
)
