import React, { useState, useEffect } from 'react'

export const withHydration = (WrappedComponent, token) => props => {
  const [isServer, setIsServer] = useState(true)

  // useEffect runs synchronously on first render. Therefore we can set the default `isServer` to true
  // and run again on client to set to false.
  useEffect(() => {
    setIsServer(false)
  }, [])

  return (
    <>
      {isServer && (
        <script
          type="application/json"
          data-hydration-data-id={token}
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(props),
          }}
        />
      )}
      <WrappedComponent data-hydration-id={token} {...props} />
    </>
  )
}
